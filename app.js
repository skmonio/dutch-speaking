const ANSWER_SECONDS = 20;

let currentIdx = 0;
let revealedCount = 1;
let showEN = false;
let timerShownFor = -1;
let answerTimerInterval = null;
const visited = new Set();

// --- Local recording (per answer, never uploaded anywhere) ---------------
let mediaRecorder = null;
let recordedChunks = [];
let activeStream = null;
const recordingsByKey = {};

function recordingKey(idx, turnIdx) {
  return `${idx}_${turnIdx}`;
}

function micSupported() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
}

function pickMimeType() {
  const candidates = ["audio/mp4", "audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus"];
  for (const type of candidates) {
    if (window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(type)) return type;
  }
  return "";
}

function clearRecordingsForScenario(idx) {
  const prefix = `${idx}_`;
  Object.keys(recordingsByKey).forEach(key => {
    if (key.startsWith(prefix)) {
      URL.revokeObjectURL(recordingsByKey[key]);
      delete recordingsByKey[key];
    }
  });
}

function stopActiveRecordingIfAny() {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
}

async function startRecording(turnIdx) {
  const recNote = document.getElementById("ttsNote");
  try {
    activeStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    recNote.textContent = "Opnemen is niet gelukt. Controleer of je toestel een microfoon heeft en of je toestemming hebt gegeven.";
    return;
  }
  const mimeType = pickMimeType();
  mediaRecorder = mimeType ? new MediaRecorder(activeStream, { mimeType }) : new MediaRecorder(activeStream);
  recordedChunks = [];
  mediaRecorder.ondataavailable = e => { if (e.data && e.data.size > 0) recordedChunks.push(e.data); };
  mediaRecorder.onstop = () => {
    activeStream.getTracks().forEach(t => t.stop());
    activeStream = null;
    const key = recordingKey(currentIdx, turnIdx);
    if (recordingsByKey[key]) URL.revokeObjectURL(recordingsByKey[key]);
    const blob = new Blob(recordedChunks, { type: mediaRecorder.mimeType || "audio/webm" });
    recordingsByKey[key] = URL.createObjectURL(blob);
    renderRecordControls(turnIdx);
  };
  mediaRecorder.start();
  renderRecordControls(turnIdx);
}

function renderRecordControls(turnIdx) {
  const wrap = document.getElementById("recordArea");
  if (!wrap) return;
  const key = recordingKey(currentIdx, turnIdx);
  const isRecording = mediaRecorder && mediaRecorder.state === "recording";
  wrap.innerHTML = "";

  if (isRecording) {
    const btn = document.createElement("button");
    btn.className = "btn-secondary rec-btn recording";
    btn.innerHTML = "&#9679; Stop opname";
    btn.addEventListener("click", () => stopActiveRecordingIfAny());
    wrap.appendChild(btn);
    return;
  }

  if (recordingsByKey[key]) {
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = recordingsByKey[key];
    const btn = document.createElement("button");
    btn.className = "btn-secondary rec-btn";
    btn.innerHTML = "&#127908; Opnieuw opnemen";
    btn.addEventListener("click", () => startRecording(turnIdx));
    wrap.appendChild(audio);
    wrap.appendChild(btn);
    return;
  }

  const btn = document.createElement("button");
  btn.className = "btn-secondary rec-btn";
  btn.innerHTML = "&#127908; Neem je antwoord op";
  btn.addEventListener("click", () => startRecording(turnIdx));
  wrap.appendChild(btn);
}

// --- Answer timer ----------------------------------------------------------

function clearAnswerTimer() {
  if (answerTimerInterval) {
    clearInterval(answerTimerInterval);
    answerTimerInterval = null;
  }
}

function startAnswerTimer(seconds, turnIdx) {
  let remaining = seconds;
  const controls = document.getElementById("controls");
  controls.innerHTML = `
    <div class="timer-box">
      <div class="timer-label">Spreek je antwoord nu hardop. Je hebt ongeveer <span id="timerCount">${seconds}</span> seconden.</div>
      <div class="timer-track"><div class="timer-fill" id="timerFill"></div></div>
      ${micSupported() ? '<div id="recordArea" class="record-area"></div>' : ""}
      <button class="btn-secondary" id="skipTimerBtn">Ik ben klaar &rarr;</button>
    </div>`;
  const fill = document.getElementById("timerFill");
  fill.style.width = "100%";
  requestAnimationFrame(() => {
    fill.style.transition = `width ${seconds}s linear`;
    fill.style.width = "0%";
  });
  if (micSupported()) renderRecordControls(turnIdx);
  document.getElementById("skipTimerBtn").addEventListener("click", () => {
    stopActiveRecordingIfAny();
    clearAnswerTimer();
    revealNext();
  });
  clearAnswerTimer();
  answerTimerInterval = setInterval(() => {
    remaining--;
    const countEl = document.getElementById("timerCount");
    if (countEl) countEl.textContent = Math.max(remaining, 0);
    if (remaining <= 0) {
      stopActiveRecordingIfAny();
      clearAnswerTimer();
      revealNext();
    }
  }, 1000);
}

function speakerLabel(turn, scenario) {
  return turn.speaker === "you" ? "Jij" : scenario.other;
}

function renderDots() {
  const wrap = document.getElementById("topicDots");
  wrap.innerHTML = SCENARIOS.map((s, i) => {
    const cls = ["topic-dot"];
    if (i === currentIdx) cls.push("active");
    else if (visited.has(i)) cls.push("visited");
    return `<button class="${cls.join(" ")}" title="${escapeHtml(s.topic)}" onclick="goTo(${i})"></button>`;
  }).join("");
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// --- Text-to-speech ----------------------------------------------------------

let cachedVoices = null;

function loadVoices() {
  if (cachedVoices && cachedVoices.length) return Promise.resolve(cachedVoices);
  return new Promise(resolve => {
    const synth = window.speechSynthesis;
    let voices = synth.getVoices();
    if (voices.length) { cachedVoices = voices; resolve(voices); return; }
    let tries = 0;
    const finish = v => { cachedVoices = v; resolve(v); };
    const onChange = () => {
      voices = synth.getVoices();
      if (voices.length) { clearInterval(poll); synth.removeEventListener("voiceschanged", onChange); finish(voices); }
    };
    synth.addEventListener("voiceschanged", onChange);
    // iOS Safari sometimes never fires voiceschanged, so poll as a fallback.
    const poll = setInterval(() => {
      voices = synth.getVoices();
      tries++;
      if (voices.length || tries > 20) {
        clearInterval(poll);
        synth.removeEventListener("voiceschanged", onChange);
        finish(voices);
      }
    }, 150);
  });
}

function pickBestDutchVoice(voices) {
  const nl = voices.filter(v => v.lang === "nl-NL" || (v.lang && v.lang.toLowerCase().startsWith("nl")));
  if (!nl.length) return null;
  const score = v => {
    let s = 0;
    // "Enhanced"/"Premium"/"Neural" voices (downloadable on iOS) sound far less robotic
    // than the default compact system voice, so prefer them when present.
    if (/enhanced|premium|neural/i.test(v.name)) s += 10;
    if (v.lang === "nl-NL") s += 1;
    return s;
  };
  return nl.slice().sort((a, b) => score(b) - score(a))[0];
}

function speakNow(text, btn, voices) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "nl-NL";
  utter.rate = 0.92;
  const nlVoice = pickBestDutchVoice(voices);
  if (nlVoice) {
    utter.voice = nlVoice;
  } else if (voices.length) {
    document.getElementById("ttsNote").textContent =
      "Geen Nederlandse stem gevonden op dit toestel. Voeg er een toe via Instellingen → Toegankelijkheid → Gesproken content → Stemmen.";
  }
  if (btn) {
    document.querySelectorAll(".speak-btn.speaking").forEach(b => b.classList.remove("speaking"));
    btn.classList.add("speaking");
    utter.onend = () => btn.classList.remove("speaking");
    utter.onerror = () => {
      btn.classList.remove("speaking");
      document.getElementById("ttsNote").textContent =
        "Afspelen is mislukt. Controleer of je toestel niet stil staat en of het volume aan staat.";
    };
  }
  synth.speak(utter);
}

async function speak(text, btn) {
  if (!("speechSynthesis" in window)) {
    document.getElementById("ttsNote").textContent = "Tekst-naar-spraak wordt niet ondersteund in deze browser.";
    return;
  }
  const synth = window.speechSynthesis;
  const voices = await loadVoices();
  if (synth.speaking || synth.pending) {
    synth.cancel();
    // iOS Safari can silently drop a speak() called right after cancel() without this delay.
    setTimeout(() => speakNow(text, btn, voices), 120);
  } else {
    speakNow(text, btn, voices);
  }
}

// --- Rendering ----------------------------------------------------------

function renderScenario() {
  const s = SCENARIOS[currentIdx];
  document.getElementById("navCounter").textContent = `${currentIdx + 1} / ${SCENARIOS.length}`;
  document.getElementById("prevBtn").disabled = currentIdx === 0;
  document.getElementById("nextBtn").disabled = currentIdx === SCENARIOS.length - 1;
  document.getElementById("topicTag").textContent = s.topic;
  document.getElementById("enBtn").classList.toggle("active", showEN);

  document.getElementById("situation").innerHTML =
    `${escapeHtml(s.situation.nl)}<div class="situation-en${showEN ? " show" : ""}">${escapeHtml(s.situation.en)}</div>`;

  const chat = document.getElementById("chat");
  let html = "";
  for (let i = 0; i < revealedCount && i < s.turns.length; i++) {
    const t = s.turns[i];
    const key = recordingKey(currentIdx, i);
    const ownRecording = t.speaker === "you" && recordingsByKey[key]
      ? `<div class="own-recording"><span class="own-recording-label">Jouw opname</span><audio controls src="${recordingsByKey[key]}"></audio></div>`
      : "";
    html += `
      <div class="bubble-row ${t.speaker}">
        <button class="speak-btn" data-turn-idx="${i}" title="Beluister">&#128264;</button>
        <div class="bubble-wrap">
          <div class="bubble-name">${escapeHtml(speakerLabel(t, s))}</div>
          <div class="bubble">
            ${escapeHtml(t.nl)}
            <div class="bubble-en${showEN ? " show" : ""}">${escapeHtml(t.en)}</div>
          </div>
          ${ownRecording}
        </div>
      </div>`;
  }
  chat.innerHTML = html;
  chat.querySelectorAll(".speak-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const t = s.turns[Number(btn.dataset.turnIdx)];
      speak(t.nl, btn);
    });
  });

  const controls = document.getElementById("controls");
  if (revealedCount < s.turns.length) {
    const next = s.turns[revealedCount];
    if (next.speaker === "you" && !next.quick) {
      if (timerShownFor !== revealedCount) {
        timerShownFor = revealedCount;
        startAnswerTimer(ANSWER_SECONDS, revealedCount);
      }
    } else {
      clearAnswerTimer();
      controls.innerHTML = `<button class="reveal-btn" onclick="revealNext()">Volgende zin &rarr;</button>`;
    }
  } else {
    clearAnswerTimer();
    controls.innerHTML = `
      <button class="btn-secondary" onclick="restartScenario()">Opnieuw oefenen</button>
      <button class="btn-primary" onclick="goTo(currentIdx+1)" ${currentIdx === SCENARIOS.length - 1 ? "disabled" : ""}>Volgende situatie &rarr;</button>`;
  }
}

function revealNext() {
  revealedCount++;
  renderScenario();
}

function restartScenario() {
  stopActiveRecordingIfAny();
  clearAnswerTimer();
  clearRecordingsForScenario(currentIdx);
  timerShownFor = -1;
  revealedCount = 1;
  renderScenario();
}

function toggleEN() {
  showEN = !showEN;
  renderScenario();
}

function goTo(idx) {
  if (idx < 0 || idx >= SCENARIOS.length) return;
  window.speechSynthesis && window.speechSynthesis.cancel();
  stopActiveRecordingIfAny();
  clearAnswerTimer();
  clearRecordingsForScenario(currentIdx);
  timerShownFor = -1;
  visited.add(currentIdx);
  currentIdx = idx;
  revealedCount = 1;
  showEN = false;
  renderDots();
  renderScenario();
}

if ("speechSynthesis" in window) {
  loadVoices();
  document.addEventListener("pointerdown", () => loadVoices(), { once: true });
} else {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ttsNote").textContent = "Tekst-naar-spraak wordt niet ondersteund in deze browser.";
  });
}

renderDots();
renderScenario();
