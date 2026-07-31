let currentIdx = 0;
let revealedCount = 1;
let showEN = false;
const visited = new Set();

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

function speak(text, btn) {
  if (!("speechSynthesis" in window)) {
    document.getElementById("ttsNote").textContent = "Tekst-naar-spraak wordt niet ondersteund in deze browser.";
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "nl-NL";
  utter.rate = 0.92;
  const voices = window.speechSynthesis.getVoices();
  const nlVoice = voices.find(v => v.lang === "nl-NL") || voices.find(v => v.lang && v.lang.startsWith("nl"));
  if (nlVoice) utter.voice = nlVoice;
  if (btn) {
    document.querySelectorAll(".speak-btn.speaking").forEach(b => b.classList.remove("speaking"));
    btn.classList.add("speaking");
    utter.onend = () => btn.classList.remove("speaking");
    utter.onerror = () => btn.classList.remove("speaking");
  }
  window.speechSynthesis.speak(utter);
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

  const chat = document.getElementById("chat");
  let html = "";
  for (let i = 0; i < revealedCount && i < s.turns.length; i++) {
    const t = s.turns[i];
    html += `
      <div class="bubble-row ${t.speaker}">
        <button class="speak-btn" data-turn-idx="${i}" title="Beluister">&#128264;</button>
        <div class="bubble-wrap">
          <div class="bubble-name">${escapeHtml(speakerLabel(t, s))}</div>
          <div class="bubble">
            ${escapeHtml(t.nl)}
            <div class="bubble-en${showEN ? " show" : ""}">${escapeHtml(t.en)}</div>
          </div>
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
    const label = next.speaker === "you" ? "Toon jouw antwoord →" : "Volgende zin →";
    controls.innerHTML = `<button class="reveal-btn" onclick="revealNext()">${label}</button>`;
  } else {
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
  visited.add(currentIdx);
  currentIdx = idx;
  revealedCount = 1;
  showEN = false;
  renderDots();
  renderScenario();
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
} else {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ttsNote").textContent = "Tekst-naar-spraak wordt niet ondersteund in deze browser.";
  });
}

renderDots();
renderScenario();
