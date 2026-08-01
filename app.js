const RECORD_MAX_SECONDS = 20;

let currentIdx = 0;
let revealedCount = 1;
let showEN = false;
let answerUIShownFor = -1;
const visited = new Set();
const expandedAlts = new Set();
const optionIndexByKey = {};

function altKey(idx, turnIdx) {
  return `${idx}_${turnIdx}`;
}

function getOptionIndex(key) {
  return optionIndexByKey[key] || 0;
}

function currentAnswerText(t, key) {
  if (t.options) return t.options[getOptionIndex(key)];
  return { nl: t.nl, en: t.en };
}

// --- Local recording (per answer, persists until you delete it) -----------
let mediaRecorder = null;
let recordedChunks = [];
let activeStream = null;
let recordTimeout = null;
let recordInterval = null;
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

function clearRecordTimers() {
  if (recordTimeout) { clearTimeout(recordTimeout); recordTimeout = null; }
  if (recordInterval) { clearInterval(recordInterval); recordInterval = null; }
}

function stopActiveRecordingIfAny() {
  clearRecordTimers();
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
}

function deleteRecording(turnIdx) {
  const key = recordingKey(currentIdx, turnIdx);
  if (recordingsByKey[key]) {
    URL.revokeObjectURL(recordingsByKey[key]);
    delete recordingsByKey[key];
  }
  if (turnIdx === revealedCount) {
    renderAnswerControls(turnIdx);
  } else {
    renderChat();
  }
}

async function startRecording(turnIdx) {
  const note = document.getElementById("ttsNote");
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    note.textContent = "Opnemen is niet gelukt. Controleer of je toestel een microfoon heeft en of je toestemming hebt gegeven.";
    return;
  }
  activeStream = stream;
  const mimeType = pickMimeType();
  mediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
  recordedChunks = [];
  mediaRecorder.ondataavailable = e => { if (e.data && e.data.size > 0) recordedChunks.push(e.data); };
  mediaRecorder.onstop = () => {
    clearRecordTimers();
    activeStream.getTracks().forEach(t => t.stop());
    activeStream = null;
    const key = recordingKey(currentIdx, turnIdx);
    if (recordingsByKey[key]) URL.revokeObjectURL(recordingsByKey[key]);
    const blob = new Blob(recordedChunks, { type: mediaRecorder.mimeType || "audio/webm" });
    recordingsByKey[key] = URL.createObjectURL(blob);
    renderAnswerControls(turnIdx);
  };
  mediaRecorder.start();
  let remaining = RECORD_MAX_SECONDS;
  renderAnswerControls(turnIdx, remaining);
  recordInterval = setInterval(() => {
    remaining--;
    const countEl = document.getElementById("recordCount");
    if (countEl) countEl.textContent = Math.max(remaining, 0);
  }, 1000);
  recordTimeout = setTimeout(() => stopActiveRecordingIfAny(), RECORD_MAX_SECONDS * 1000);
}

function renderAnswerControls(turnIdx, recordingRemaining) {
  const controls = document.getElementById("controls");
  const key = recordingKey(currentIdx, turnIdx);
  const isRecording = mediaRecorder && mediaRecorder.state === "recording";
  controls.innerHTML = "";

  const box = document.createElement("div");
  box.className = "answer-box";

  const label = document.createElement("div");
  label.className = "answer-label";
  label.textContent = "Spreek je antwoord nu hardop. Neem het op als je wilt (max. 20 seconden), of ga direct verder.";
  box.appendChild(label);

  if (isRecording) {
    const track = document.createElement("div");
    track.className = "timer-track";
    const fill = document.createElement("div");
    fill.className = "timer-fill";
    track.appendChild(fill);
    box.appendChild(track);
    fill.style.width = "100%";
    requestAnimationFrame(() => {
      fill.style.transition = `width ${RECORD_MAX_SECONDS}s linear`;
      fill.style.width = "0%";
    });

    const recRow = document.createElement("div");
    recRow.className = "record-area";
    const stopBtn = document.createElement("button");
    stopBtn.className = "btn-secondary rec-btn recording";
    stopBtn.innerHTML = `&#9679; Stop opname (<span id="recordCount">${recordingRemaining ?? RECORD_MAX_SECONDS}</span>s)`;
    stopBtn.addEventListener("click", () => stopActiveRecordingIfAny());
    recRow.appendChild(stopBtn);
    box.appendChild(recRow);
  } else if (micSupported()) {
    const recRow = document.createElement("div");
    recRow.className = "record-area";
    if (recordingsByKey[key]) {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = recordingsByKey[key];
      const reBtn = document.createElement("button");
      reBtn.className = "btn-secondary rec-btn";
      reBtn.innerHTML = "&#127908; Opnieuw opnemen";
      reBtn.addEventListener("click", () => startRecording(turnIdx));
      const delBtn = document.createElement("button");
      delBtn.className = "btn-secondary rec-delete-btn";
      delBtn.innerHTML = "&#128465; Verwijder";
      delBtn.addEventListener("click", () => deleteRecording(turnIdx));
      recRow.appendChild(audio);
      recRow.appendChild(reBtn);
      recRow.appendChild(delBtn);
    } else {
      const recBtn = document.createElement("button");
      recBtn.className = "btn-secondary rec-btn";
      recBtn.innerHTML = "&#127908; Neem je antwoord op";
      recBtn.addEventListener("click", () => startRecording(turnIdx));
      recRow.appendChild(recBtn);
    }
    box.appendChild(recRow);
  }

  const proceedBtn = document.createElement("button");
  proceedBtn.className = "reveal-btn";
  proceedBtn.textContent = "Ik ben klaar → Toon antwoord";
  proceedBtn.addEventListener("click", () => {
    stopActiveRecordingIfAny();
    revealNext();
  });
  box.appendChild(proceedBtn);

  controls.appendChild(box);
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
let voicesLoadAttempted = false;
const CHOSEN_VOICE_STORAGE_KEY = "spreektraining_chosen_voice";

function loadVoices(forceRefresh) {
  if (forceRefresh) { cachedVoices = null; voicesLoadAttempted = false; }
  // An empty result still counts as "attempted" - without this, every speak() on a device
  // that genuinely has zero voices would re-poll for ~3s on every single call.
  if (voicesLoadAttempted) return Promise.resolve(cachedVoices || []);
  return new Promise(resolve => {
    const synth = window.speechSynthesis;
    let voices = synth.getVoices();
    if (voices.length) { cachedVoices = voices; voicesLoadAttempted = true; resolve(voices); return; }
    let tries = 0;
    const finish = v => { cachedVoices = v; voicesLoadAttempted = true; resolve(v); };
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

function voiceKey(v) {
  // voiceURI is included because iOS exposes compact vs. Enhanced/Premium voices
  // with the *same* name+lang, differing only in voiceURI - name+lang alone would
  // make those two indistinguishable and impossible to pick between.
  return `${v.name}|${v.lang}|${v.voiceURI || ""}`;
}

function isHigherQualityVoice(v) {
  return /enhanced|premium|neural/i.test(v.name) || /enhanced|premium|neural/i.test(v.voiceURI || "");
}

function pickBestDutchVoice(voices) {
  const nl = voices.filter(v => v.lang === "nl-NL" || (v.lang && v.lang.toLowerCase().startsWith("nl")));
  if (!nl.length) return null;
  const score = v => {
    let s = 0;
    if (isHigherQualityVoice(v)) s += 10;
    if (v.lang === "nl-NL") s += 1;
    return s;
  };
  return nl.slice().sort((a, b) => score(b) - score(a))[0];
}

function getChosenVoice(voices) {
  const key = localStorage.getItem(CHOSEN_VOICE_STORAGE_KEY);
  if (!key) return null;
  return voices.find(v => voiceKey(v) === key) || null;
}

function populateVoicePicker(voices) {
  const picker = document.getElementById("voicePicker");
  const select = document.getElementById("voiceSelect");
  if (!picker || !select || !voices.length) return;
  const sorted = voices.slice().sort((a, b) => {
    const aNl = a.lang.toLowerCase().startsWith("nl") ? 0 : 1;
    const bNl = b.lang.toLowerCase().startsWith("nl") ? 0 : 1;
    if (aNl !== bNl) return aNl - bNl;
    return a.name.localeCompare(b.name);
  });
  const chosen = getChosenVoice(voices);
  const best = chosen || pickBestDutchVoice(voices);
  // iOS often exposes compact vs. Enhanced/Premium voices under the identical
  // name+lang - label them distinctly so both are actually pickable in the list.
  const nameLangCounts = {};
  sorted.forEach(v => {
    const k = `${v.name}|${v.lang}`;
    nameLangCounts[k] = (nameLangCounts[k] || 0) + 1;
  });
  select.innerHTML = sorted.map(v => {
    const dupeCount = nameLangCounts[`${v.name}|${v.lang}`];
    const qualityTag = isHigherQualityVoice(v) ? " — Enhanced" : (dupeCount > 1 ? " — Standaard" : "");
    return `<option value="${escapeHtml(voiceKey(v))}"${best && voiceKey(v) === voiceKey(best) ? " selected" : ""}>${escapeHtml(v.name)} (${escapeHtml(v.lang)})${qualityTag}</option>`;
  }).join("");
  picker.hidden = false;
}

let currentlySpeakingBtn = null;

function speakNow(text, btn, voices) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "nl-NL";
  utter.rate = 0.92;
  const chosenVoice = getChosenVoice(voices);
  const nlVoice = chosenVoice || pickBestDutchVoice(voices);
  if (nlVoice) {
    utter.voice = nlVoice;
  } else if (voices.length) {
    document.getElementById("ttsNote").textContent =
      "Geen Nederlandse stem gevonden op dit toestel. Voeg er een toe via Instellingen → Toegankelijkheid → Gesproken content → Stemmen.";
  }
  if (btn) {
    document.querySelectorAll(".speak-btn.speaking").forEach(b => b.classList.remove("speaking"));
    btn.classList.add("speaking");
    currentlySpeakingBtn = btn;
    utter.onend = () => {
      btn.classList.remove("speaking");
      if (currentlySpeakingBtn === btn) currentlySpeakingBtn = null;
    };
    utter.onerror = () => {
      btn.classList.remove("speaking");
      if (currentlySpeakingBtn === btn) currentlySpeakingBtn = null;
      document.getElementById("ttsNote").textContent =
        "Afspelen is mislukt. Controleer of je toestel niet stil staat en of het volume aan staat.";
    };
  }
  synth.speak(utter);
}

function stopSpeaking() {
  window.speechSynthesis.cancel();
  document.querySelectorAll(".speak-btn.speaking").forEach(b => b.classList.remove("speaking"));
  currentlySpeakingBtn = null;
}

async function speak(text, btn) {
  if (!("speechSynthesis" in window)) {
    document.getElementById("ttsNote").textContent = "Tekst-naar-spraak wordt niet ondersteund in deze browser.";
    return;
  }
  // Tapping the button that's already speaking stops it; a later tap restarts from the beginning.
  if (currentlySpeakingBtn === btn) {
    stopSpeaking();
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

function renderChat() {
  const s = SCENARIOS[currentIdx];
  const chat = document.getElementById("chat");
  let html = "";
  for (let i = 0; i < revealedCount && i < s.turns.length; i++) {
    const t = s.turns[i];
    const key = recordingKey(currentIdx, i);
    const shown = currentAnswerText(t, key);
    const ownRecording = t.speaker === "you" && recordingsByKey[key]
      ? `<div class="own-recording">
           <span class="own-recording-label">Jouw opname</span>
           <audio controls src="${recordingsByKey[key]}"></audio>
           <button class="rec-delete-btn" data-turn-idx="${i}" title="Verwijder opname">&#128465;</button>
         </div>`
      : "";
    const optionBlock = t.speaker === "you" && t.options && t.options.length > 1
      ? `<button class="option-cycle-btn" data-turn-idx="${i}">Andere optie (${getOptionIndex(key) + 1}/${t.options.length}) &rarr;</button>`
      : "";
    const aKey = altKey(currentIdx, i);
    const altExpanded = expandedAlts.has(aKey);
    const altBlock = t.speaker === "you" && t.simple
      ? `<button class="alt-toggle-btn" data-turn-idx="${i}">${altExpanded ? "Verberg eenvoudig antwoord" : "+ Toon eenvoudig antwoord"}</button>
         <div class="alt-answer${altExpanded ? " show" : ""}">
           ${escapeHtml(t.simple.nl)}
           <div class="bubble-en${showEN ? " show" : ""}">${escapeHtml(t.simple.en)}</div>
         </div>`
      : "";
    html += `
      <div class="bubble-row ${t.speaker}">
        <button class="speak-btn" data-turn-idx="${i}" title="Beluister">&#128264;</button>
        <div class="bubble-wrap">
          <div class="bubble-name">${escapeHtml(speakerLabel(t, s))}</div>
          <div class="bubble">
            ${escapeHtml(shown.nl)}
            <div class="bubble-en${showEN ? " show" : ""}">${escapeHtml(shown.en)}</div>
          </div>
          ${optionBlock}
          ${altBlock}
          ${ownRecording}
        </div>
      </div>`;
  }
  chat.innerHTML = html;
  chat.querySelectorAll(".speak-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const turnIdx = Number(btn.dataset.turnIdx);
      const t = s.turns[turnIdx];
      const key = recordingKey(currentIdx, turnIdx);
      speak(currentAnswerText(t, key).nl, btn);
    });
  });
  chat.querySelectorAll(".rec-delete-btn").forEach(btn => {
    btn.addEventListener("click", () => deleteRecording(Number(btn.dataset.turnIdx)));
  });
  chat.querySelectorAll(".alt-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = altKey(currentIdx, Number(btn.dataset.turnIdx));
      if (expandedAlts.has(key)) expandedAlts.delete(key);
      else expandedAlts.add(key);
      renderChat();
    });
  });
  chat.querySelectorAll(".option-cycle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const turnIdx = Number(btn.dataset.turnIdx);
      const key = recordingKey(currentIdx, turnIdx);
      const total = s.turns[turnIdx].options.length;
      optionIndexByKey[key] = (getOptionIndex(key) + 1) % total;
      renderChat();
    });
  });
}

function renderScenario() {
  const s = SCENARIOS[currentIdx];
  document.getElementById("navCounter").textContent = `${currentIdx + 1} / ${SCENARIOS.length}`;
  document.getElementById("prevBtn").disabled = currentIdx === 0;
  document.getElementById("nextBtn").disabled = currentIdx === SCENARIOS.length - 1;
  document.getElementById("topicTag").textContent = s.topic;
  document.getElementById("enBtn").classList.toggle("active", showEN);

  document.getElementById("situation").innerHTML =
    `${escapeHtml(s.situation.nl)}<div class="situation-en${showEN ? " show" : ""}">${escapeHtml(s.situation.en)}</div>`;

  renderChat();

  const controls = document.getElementById("controls");
  if (revealedCount < s.turns.length) {
    const next = s.turns[revealedCount];
    if (next.speaker === "you" && !next.quick) {
      if (answerUIShownFor !== revealedCount) {
        answerUIShownFor = revealedCount;
        renderAnswerControls(revealedCount);
      }
    } else {
      answerUIShownFor = -1;
      controls.innerHTML = `<button class="reveal-btn" onclick="revealNext()">Volgende zin &rarr;</button>`;
    }
  } else {
    answerUIShownFor = -1;
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
  if (window.speechSynthesis) stopSpeaking();
  stopActiveRecordingIfAny();
  answerUIShownFor = -1;
  revealedCount = 1;
  renderScenario();
}

function toggleEN() {
  showEN = !showEN;
  renderScenario();
}

function goTo(idx) {
  if (idx < 0 || idx >= SCENARIOS.length) return;
  if (window.speechSynthesis) stopSpeaking();
  stopActiveRecordingIfAny();
  answerUIShownFor = -1;
  visited.add(currentIdx);
  currentIdx = idx;
  revealedCount = 1;
  showEN = false;
  renderDots();
  renderScenario();
}

if ("speechSynthesis" in window) {
  loadVoices().then(populateVoicePicker);
  document.addEventListener("pointerdown", () => loadVoices().then(populateVoicePicker), { once: true });
  document.getElementById("voiceSelect").addEventListener("change", e => {
    localStorage.setItem(CHOSEN_VOICE_STORAGE_KEY, e.target.value);
  });
  document.getElementById("refreshVoicesBtn").addEventListener("click", () => {
    document.getElementById("ttsNote").textContent = "Stemlijst wordt vernieuwd...";
    loadVoices(true).then(voices => {
      populateVoicePicker(voices);
      document.getElementById("ttsNote").textContent = voices.length
        ? "Stemlijst is vernieuwd."
        : "Geen stemmen gevonden. Probeer Safari volledig te sluiten en opnieuw te openen.";
    });
  });
} else {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ttsNote").textContent = "Tekst-naar-spraak wordt niet ondersteund in deze browser.";
  });
}

renderDots();
renderScenario();
