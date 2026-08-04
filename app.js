const RECORD_MAX_SECONDS = 20;

let currentIdx = 0;
const revealedCountByScenario = {};
let showEN = false;
let answerUIShownFor = -1;
const visited = new Set();
const expandedAlts = new Set();
const optionIndexByKey = {};
const messagesByKey = {}; // "you"-turn key -> array of {id, type: "audio"|"text", text?}, in send order
let msgIdCounter = 0;

function nextMsgId() {
  return `${Date.now()}_${msgIdCounter++}`;
}

function getRevealedCount(idx) {
  return revealedCountByScenario[idx] || 1;
}

function setRevealedCount(idx, val) {
  revealedCountByScenario[idx] = val;
  saveProgress();
}

function altKey(idx, turnIdx) {
  return `${idx}_${turnIdx}`;
}

// --- Persistence (IndexedDB): messages and progress survive close/reopen ---
const DB_NAME = "spreektraining-db";
const DB_VERSION = 1;
let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise(resolve => {
    if (!("indexedDB" in window)) { resolve(null); return; }
    let req;
    try {
      req = indexedDB.open(DB_NAME, DB_VERSION);
    } catch (e) {
      resolve(null);
      return;
    }
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("recordings")) db.createObjectStore("recordings");
      if (!db.objectStoreNames.contains("state")) db.createObjectStore("state");
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });
  return dbPromise;
}

function idbGetAllRecordings() {
  return openDB().then(db => new Promise(resolve => {
    if (!db) { resolve({}); return; }
    const result = {};
    const req = db.transaction("recordings", "readonly").objectStore("recordings").openCursor();
    req.onsuccess = e => {
      const cursor = e.target.result;
      if (cursor) { result[cursor.key] = cursor.value; cursor.continue(); }
      else resolve(result);
    };
    req.onerror = () => resolve(result);
  }));
}

function idbPutRecording(key, blob) {
  openDB().then(db => {
    if (!db) return;
    db.transaction("recordings", "readwrite").objectStore("recordings").put(blob, key);
  });
}

function idbDeleteRecording(key) {
  openDB().then(db => {
    if (!db) return;
    db.transaction("recordings", "readwrite").objectStore("recordings").delete(key);
  });
}

function idbGetState() {
  return openDB().then(db => new Promise(resolve => {
    if (!db) { resolve(null); return; }
    const req = db.transaction("state", "readonly").objectStore("state").get("progress");
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => resolve(null);
  }));
}

function saveProgress() {
  openDB().then(db => {
    if (!db) return;
    db.transaction("state", "readwrite").objectStore("state").put({
      currentIdx,
      revealedCountByScenario,
      visited: Array.from(visited),
      messagesByKey
    }, "progress");
  });
}

function getOptionIndex(key) {
  return optionIndexByKey[key] || 0;
}

function currentAnswerText(t, key) {
  if (t.options) return t.options[getOptionIndex(key)];
  return { nl: t.nl, en: t.en };
}

// --- Local recording + typed messages (a "you" turn holds a running thread
// of messages you send, like a chat - not a single overwritable answer) -----
let mediaRecorder = null;
let recordedChunks = [];
let activeStream = null;
let recordTimeout = null;
let recordInterval = null;
const messageAudioUrls = {}; // messageAudioKey -> object URL, rebuilt each load

function recordingKey(idx, turnIdx) {
  return `${idx}_${turnIdx}`;
}

function messageAudioKey(key, id) {
  return `${key}_msg_${id}`;
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

function deleteMessage(turnIdx, id) {
  const key = recordingKey(currentIdx, turnIdx);
  const list = messagesByKey[key] || [];
  const idx = list.findIndex(m => m.id === id);
  if (idx === -1) return;
  const [msg] = list.splice(idx, 1);
  if (msg.type === "audio") {
    const aKey = messageAudioKey(key, id);
    if (messageAudioUrls[aKey]) {
      URL.revokeObjectURL(messageAudioUrls[aKey]);
      delete messageAudioUrls[aKey];
    }
    idbDeleteRecording(aKey);
  }
  if (!list.length) delete messagesByKey[key];
  saveProgress();
  renderMessagePanel(turnIdx);
  renderDots();
}

function addTextMessage(turnIdx, text) {
  const val = text.trim();
  if (!val) return;
  const key = recordingKey(currentIdx, turnIdx);
  if (!messagesByKey[key]) messagesByKey[key] = [];
  messagesByKey[key].push({ id: nextMsgId(), type: "text", text: val });
  saveProgress();
  renderDots();
  renderMessagePanel(turnIdx);
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
    const blob = new Blob(recordedChunks, { type: mediaRecorder.mimeType || "audio/webm" });
    if (blob.size > 0) {
      const key = recordingKey(currentIdx, turnIdx);
      const id = nextMsgId();
      const aKey = messageAudioKey(key, id);
      messageAudioUrls[aKey] = URL.createObjectURL(blob);
      idbPutRecording(aKey, blob);
      if (!messagesByKey[key]) messagesByKey[key] = [];
      messagesByKey[key].push({ id, type: "audio" });
      saveProgress();
    }
    renderMessagePanel(turnIdx);
    renderDots();
  };
  mediaRecorder.start();
  let remaining = RECORD_MAX_SECONDS;
  renderMessagePanel(turnIdx, remaining);
  recordInterval = setInterval(() => {
    remaining--;
    const countEl = document.getElementById("recordCount");
    if (countEl) countEl.textContent = Math.max(remaining, 0);
  }, 1000);
  recordTimeout = setTimeout(() => stopActiveRecordingIfAny(), RECORD_MAX_SECONDS * 1000);
}

function lastYouTurnIndex(s) {
  for (let i = s.turns.length - 1; i >= 0; i--) {
    if (s.turns[i].speaker === "you") return i;
  }
  return -1;
}

function buildMessageThread(turnIdx) {
  const key = recordingKey(currentIdx, turnIdx);
  const list = messagesByKey[key] || [];
  const wrap = document.createElement("div");
  wrap.className = "message-thread";
  list.forEach(msg => {
    const row = document.createElement("div");
    row.className = "own-message";
    if (msg.type === "audio") {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = messageAudioUrls[messageAudioKey(key, msg.id)] || "";
      row.appendChild(audio);
    } else {
      const bubble = document.createElement("div");
      bubble.className = "own-message-text";
      bubble.textContent = msg.text;
      row.appendChild(bubble);
    }
    const delBtn = document.createElement("button");
    delBtn.className = "own-message-delete";
    delBtn.innerHTML = "&#128465;";
    delBtn.title = "Verwijder bericht";
    delBtn.addEventListener("click", () => deleteMessage(turnIdx, msg.id));
    row.appendChild(delBtn);
    wrap.appendChild(row);
  });
  return wrap;
}

// Renders the message thread + composer for a "you" turn: a running list of
// your own sent voice/text messages (like a chat), plus controls to send
// more. Used both while answering (alongside "Ik ben klaar") and after the
// answer has been shown (alongside "Opnieuw oefenen"/"Volgende situatie") -
// sending more messages should stay possible after seeing the answer.
function renderMessagePanel(turnIdx, recordingRemaining) {
  const controls = document.getElementById("controls");
  const s = SCENARIOS[currentIdx];
  const isRecording = mediaRecorder && mediaRecorder.state === "recording";
  const isPreReveal = getRevealedCount(currentIdx) < s.turns.length;
  answerUIShownFor = getRevealedCount(currentIdx);
  controls.innerHTML = "";

  const box = document.createElement("div");
  box.className = "answer-box";

  const label = document.createElement("div");
  label.className = "answer-label";
  label.textContent = isPreReveal
    ? "Stuur je antwoord als bericht: spreek het in of typ het. Je kunt er zoveel sturen als je wilt."
    : "Je kunt hier nog (meer) berichten sturen - inspreken of typen.";
  box.appendChild(label);

  box.appendChild(buildMessageThread(turnIdx));

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
  }

  const composer = document.createElement("div");
  composer.className = "composer";

  const micRow = document.createElement("div");
  micRow.className = "composer-row";
  if (isRecording) {
    const stopBtn = document.createElement("button");
    stopBtn.className = "btn-secondary rec-btn recording";
    stopBtn.innerHTML = `&#9679; Stop opname (<span id="recordCount">${recordingRemaining ?? RECORD_MAX_SECONDS}</span>s)`;
    stopBtn.addEventListener("click", () => stopActiveRecordingIfAny());
    micRow.appendChild(stopBtn);
  } else if (micSupported()) {
    const recBtn = document.createElement("button");
    recBtn.className = "btn-secondary rec-btn";
    recBtn.innerHTML = "&#127908; Spreek een bericht in";
    recBtn.addEventListener("click", () => startRecording(turnIdx));
    micRow.appendChild(recBtn);
  }
  if (micRow.childNodes.length) composer.appendChild(micRow);

  const textRow = document.createElement("div");
  textRow.className = "composer-row";
  const textarea = document.createElement("textarea");
  textarea.rows = 2;
  textarea.placeholder = "Typ hier een bericht...";
  const sendBtn = document.createElement("button");
  sendBtn.type = "button";
  sendBtn.className = "send-btn";
  sendBtn.textContent = "Verstuur";
  sendBtn.addEventListener("click", () => {
    addTextMessage(turnIdx, textarea.value);
    textarea.value = "";
    textarea.focus();
  });
  textarea.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendBtn.click();
    }
  });
  textRow.appendChild(textarea);
  textRow.appendChild(sendBtn);
  composer.appendChild(textRow);

  box.appendChild(composer);

  if (isPreReveal) {
    const proceedBtn = document.createElement("button");
    proceedBtn.className = "reveal-btn";
    proceedBtn.textContent = "Ik ben klaar → Toon antwoord";
    proceedBtn.addEventListener("click", () => {
      stopActiveRecordingIfAny();
      revealNext();
    });
    box.appendChild(proceedBtn);
  }

  controls.appendChild(box);

  if (!isPreReveal) {
    const restartBtn = document.createElement("button");
    restartBtn.className = "btn-secondary";
    restartBtn.textContent = "Opnieuw oefenen";
    restartBtn.addEventListener("click", restartScenario);
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn-primary";
    nextBtn.textContent = "Volgende situatie →";
    nextBtn.disabled = currentIdx === SCENARIOS.length - 1;
    nextBtn.addEventListener("click", () => goTo(currentIdx + 1));
    controls.appendChild(restartBtn);
    controls.appendChild(nextBtn);
  }
}

function speakerLabel(turn, scenario) {
  return turn.speaker === "you" ? "Jij" : scenario.other;
}

function hasAttemptForScenario(idx) {
  return SCENARIOS[idx].turns.some((t, ti) => {
    if (t.speaker !== "you") return false;
    const key = recordingKey(idx, ti);
    return !!(messagesByKey[key] && messagesByKey[key].length);
  });
}

function answerShownForScenario(idx) {
  return getRevealedCount(idx) >= SCENARIOS[idx].turns.length;
}

function renderDots() {
  const wrap = document.getElementById("topicDots");
  wrap.innerHTML = SCENARIOS.map((s, i) => {
    const cls = ["topic-dot"];
    const attempted = hasAttemptForScenario(i);
    const answered = answerShownForScenario(i);
    let statusLabel = "";
    if (attempted && answered) { cls.push("rec-done"); statusLabel = " — bericht(en) gestuurd + antwoord getoond"; }
    else if (attempted) { cls.push("rec-pending"); statusLabel = " — bericht(en) gestuurd"; }
    else if (visited.has(i)) { cls.push("visited"); statusLabel = " — bekeken"; }
    if (i === currentIdx) cls.push("active");
    return `<button class="${cls.join(" ")}" title="${escapeHtml(s.topic + statusLabel)}" onclick="goTo(${i})"></button>`;
  }).join("");
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function escapeRegExp(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Wraps any glossary words/phrases found in `text` with a hoverable/tappable
// <span class="gloss"> showing the English meaning - mirrors the reading
// app's hover-to-translate feature. Falls back to plain escaped text when a
// scenario has no glossary (or in browsers without Unicode regex support).
function glossify(text, glossary) {
  if (!glossary || !glossary.length) return escapeHtml(text);
  const terms = glossary.slice().sort((a, b) => b.nl.length - a.nl.length);
  const pattern = terms.map(t => escapeRegExp(t.nl)).join("|");
  let re;
  try {
    re = new RegExp(`(^|[^\\p{L}])(${pattern})(?=[^\\p{L}]|$)`, "giu");
  } catch (e) {
    return escapeHtml(text);
  }
  let result = "";
  let lastIndex = 0;
  let match;
  while ((match = re.exec(text)) !== null) {
    const [full, pre, word] = match;
    const start = match.index;
    result += escapeHtml(text.slice(lastIndex, start)) + escapeHtml(pre);
    const found = terms.find(t => t.nl.toLowerCase() === word.toLowerCase());
    const en = found ? found.en : "";
    result += `<span class="gloss" tabindex="0" data-gloss="${escapeHtml(en)}">${escapeHtml(word)}</span>`;
    lastIndex = start + full.length;
    if (re.lastIndex === match.index) re.lastIndex++;
  }
  result += escapeHtml(text.slice(lastIndex));
  return result;
}

function setupGlossaryInteractions() {
  document.addEventListener("click", e => {
    const target = e.target.closest && e.target.closest(".gloss");
    document.querySelectorAll(".gloss.active").forEach(el => {
      if (el !== target) el.classList.remove("active");
    });
    if (target) target.classList.toggle("active");
  });
  document.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("gloss")) {
      e.preventDefault();
      e.target.classList.toggle("active");
    }
  });
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
  for (let i = 0; i < getRevealedCount(currentIdx) && i < s.turns.length; i++) {
    const t = s.turns[i];
    const key = recordingKey(currentIdx, i);
    const shown = currentAnswerText(t, key);
    const optionBlock = t.speaker === "you" && t.options && t.options.length > 1
      ? `<button class="option-cycle-btn" data-turn-idx="${i}">Andere optie (${getOptionIndex(key) + 1}/${t.options.length}) &rarr;</button>`
      : "";
    const aKey = altKey(currentIdx, i);
    const altExpanded = expandedAlts.has(aKey);
    const altBlock = t.speaker === "you" && t.simple && t.simple.length
      ? `<button class="alt-toggle-btn" data-turn-idx="${i}">${altExpanded ? "Verberg eenvoudige antwoorden" : "+ Toon eenvoudige antwoorden"}</button>
         <div class="alt-answer${altExpanded ? " show" : ""}">
           ${t.simple.map((alt, ai) => `
             <div class="alt-answer-item">
               <button class="alt-speak-btn" data-turn-idx="${i}" data-alt-idx="${ai}" title="Beluister">&#128264;</button>
               <div class="alt-answer-text">
                 ${glossify(alt.nl, s.glossary)}
                 <div class="bubble-en${showEN ? " show" : ""}">${escapeHtml(alt.en)}</div>
               </div>
             </div>`).join("")}
         </div>`
      : "";
    html += `
      <div class="bubble-row ${t.speaker}">
        <button class="speak-btn" data-turn-idx="${i}" title="Beluister">&#128264;</button>
        <div class="bubble-wrap">
          <div class="bubble-name">${escapeHtml(speakerLabel(t, s))}</div>
          <div class="bubble">
            ${glossify(shown.nl, s.glossary)}
            <div class="bubble-en${showEN ? " show" : ""}">${escapeHtml(shown.en)}</div>
          </div>
          ${optionBlock}
          ${altBlock}
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
  chat.querySelectorAll(".alt-speak-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const turnIdx = Number(btn.dataset.turnIdx);
      const altIdx = Number(btn.dataset.altIdx);
      const alt = s.turns[turnIdx].simple[altIdx];
      speak(alt.nl, btn);
    });
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

function renderHints() {
  const s = SCENARIOS[currentIdx];
  const hintsBox = document.getElementById("hintsBox");
  if (!hintsBox) return;
  if (s.hints && s.hints.length) {
    hintsBox.innerHTML = `<span class="hints-label">&#128161; Handige woorden:</span> ${s.hints.map(h => escapeHtml(h)).join(" &middot; ")}`;
    hintsBox.hidden = false;
  } else {
    hintsBox.hidden = true;
  }
}

function renderScenario() {
  const s = SCENARIOS[currentIdx];
  document.getElementById("navCounter").textContent = `${currentIdx + 1} / ${SCENARIOS.length}`;
  document.getElementById("prevBtn").disabled = currentIdx === 0;
  document.getElementById("nextBtn").disabled = currentIdx === SCENARIOS.length - 1;
  document.getElementById("topicTag").textContent = s.topic;
  document.getElementById("enBtn").classList.toggle("active", showEN);

  document.getElementById("situation").innerHTML =
    `${glossify(s.situation.nl, s.glossary)}<div class="situation-en${showEN ? " show" : ""}">${escapeHtml(s.situation.en)}</div>`;

  renderHints();
  renderChat();

  const controls = document.getElementById("controls");
  const revealedCount = getRevealedCount(currentIdx);
  if (revealedCount < s.turns.length) {
    const next = s.turns[revealedCount];
    if (next.speaker === "you" && !next.quick) {
      if (answerUIShownFor !== revealedCount) {
        renderMessagePanel(revealedCount);
      }
    } else {
      answerUIShownFor = -1;
      controls.innerHTML = `<button class="reveal-btn" onclick="revealNext()">Volgende zin &rarr;</button>`;
    }
  } else if (answerUIShownFor !== revealedCount) {
    renderMessagePanel(lastYouTurnIndex(s));
  }
}

function revealNext() {
  setRevealedCount(currentIdx, getRevealedCount(currentIdx) + 1);
  renderDots();
  renderScenario();
}

function restartScenario() {
  if (window.speechSynthesis) stopSpeaking();
  stopActiveRecordingIfAny();
  answerUIShownFor = -1;
  setRevealedCount(currentIdx, 1);
  renderDots();
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
  showEN = false;
  saveProgress();
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

async function resetCurrentScenario() {
  const ok = confirm("Weet je zeker dat je al je berichten (opnames en tekst) en voortgang van deze situatie wilt wissen?");
  if (!ok) return;
  if (window.speechSynthesis) stopSpeaking();
  stopActiveRecordingIfAny();
  const s = SCENARIOS[currentIdx];
  s.turns.forEach((t, i) => {
    if (t.speaker !== "you") return;
    const key = recordingKey(currentIdx, i);
    (messagesByKey[key] || []).forEach(msg => {
      if (msg.type === "audio") {
        const aKey = messageAudioKey(key, msg.id);
        if (messageAudioUrls[aKey]) {
          URL.revokeObjectURL(messageAudioUrls[aKey]);
          delete messageAudioUrls[aKey];
        }
        idbDeleteRecording(aKey);
      }
    });
    delete messagesByKey[key];
    delete optionIndexByKey[key];
    expandedAlts.delete(altKey(currentIdx, i));
  });
  delete revealedCountByScenario[currentIdx];
  visited.delete(currentIdx);
  answerUIShownFor = -1;
  saveProgress();
  renderDots();
  renderScenario();
}

document.getElementById("resetBtn").addEventListener("click", resetCurrentScenario);

async function initApp() {
  const [recordings, state] = await Promise.all([idbGetAllRecordings(), idbGetState()]);
  Object.keys(recordings).forEach(key => {
    messageAudioUrls[key] = URL.createObjectURL(recordings[key]);
  });
  if (state) {
    if (typeof state.currentIdx === "number" && state.currentIdx >= 0 && state.currentIdx < SCENARIOS.length) {
      currentIdx = state.currentIdx;
    }
    Object.assign(revealedCountByScenario, state.revealedCountByScenario || {});
    (state.visited || []).forEach(i => visited.add(i));
    Object.assign(messagesByKey, state.messagesByKey || {});
  }
  setupGlossaryInteractions();
  renderDots();
  renderScenario();
}

initApp();
