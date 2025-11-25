import { setupCardEvents, animateCardTransition } from '../events/cardEvents.js';

// Initialisiert die Prüfungssimulation und Navigation
export function setupExamNavigation({ catalog, allQuestions }) {
  // URL-Parameter lesen
  const params = new URLSearchParams(window.location.search);
  const paramCategory = params.get("category") || "all";
  const paramTopic = params.get("topic") || "all";
  const paramSearch = (params.get("search") || "").toLowerCase();

  function filterForExam() {
    let result = allQuestions.slice();
    if (paramCategory !== "all") {
      result = result.filter(q => q.categoryId === paramCategory);
    }
    if (paramTopic !== "all") {
      result = result.filter(q => q.topicId === paramTopic);
    }
    if (paramSearch) {
      result = result.filter(q =>
        (q.question || "").toLowerCase().includes(paramSearch) ||
        (q.answer || "").toLowerCase().includes(paramSearch)
      );
    }
    return result;
  }

  const examCards = filterForExam().map(q => ({ ...q, mastered: false }));
  let queue = examCards.slice();
  let current = queue[0] || null;
  let totalAnswered = 0;
  let totalCorrect = 0;
  let totalWrong = 0;
  let answerShown = false;

  // DOM
  const examMeta = document.getElementById("examMeta");
  const progressBar = document.getElementById("progressBar");
  const progressLabel = document.getElementById("progressLabel");
  const card = document.getElementById("card");
  const cardLabel = document.getElementById("cardLabel");
  const cardMeta = document.getElementById("cardMeta");
  const cardQuestion = document.getElementById("cardQuestion");
  const cardAnswer = document.getElementById("cardAnswer");
  const toggleAnswerBtn = document.getElementById("toggleAnswerBtn");
  const correctBtn = document.getElementById("correctBtn");
  const wrongBtn = document.getElementById("wrongBtn");
  const remainingLabel = document.getElementById("remainingLabel");
  const answeredLabel = document.getElementById("answeredLabel");
  const totalLabel = document.getElementById("totalLabel");
  const masteredLabel = document.getElementById("masteredLabel");
  const correctCountLabel = document.getElementById("correctCountLabel");
  const wrongCountLabel = document.getElementById("wrongCountLabel");
  const finishedBox = document.getElementById("finishedBox");

  function updateMetaText() {
    const parts = [];
    if (paramCategory !== "all") {
      const cat = catalog.categories.find(c => c.id === paramCategory);
      if (cat) parts.push(cat.title || cat.id);
    }
    if (paramTopic !== "all") {
      const cat = catalog.categories.find(c => c.id === paramCategory);
      const topic = cat ? (cat.topics || []).find(t => t.id === paramTopic) : null;
      if (topic) parts.push(topic.title || topic.id);
    }
    if (paramSearch) {
      parts.push(`Suche: "${paramSearch}"`);
    }
    if (parts.length === 0) {
      examMeta.textContent = "Alle Fragen aus dem Katalog werden abgefragt.";
    } else {
      examMeta.textContent = parts.join(" · ");
    }
  }

  function updateStats() {
    const total = examCards.length;
    const mastered = examCards.filter(c => c.mastered).length;
    const remaining = queue.length;
    totalLabel.textContent = total;
    masteredLabel.textContent = mastered;
    remainingLabel.textContent = remaining;
    answeredLabel.textContent = totalAnswered;
    correctCountLabel.textContent = totalCorrect;
    wrongCountLabel.textContent = totalWrong;
    const progress = total === 0 ? 0 : Math.round((mastered / total) * 100);
    progressBar.style.width = progress + "%";
    progressLabel.textContent = progress + "%";
  }

  function setButtonsEnabled(enabled) {
    correctBtn.disabled = !enabled;
    wrongBtn.disabled = !enabled;
  }

  function renderCard() {
    if (examCards.length === 0) {
      cardLabel.textContent = "Keine Fragen";
      cardMeta.textContent = "";
      cardQuestion.textContent = "Es wurden keine Fragen für diese Prüfung gefunden.";
      cardAnswer.textContent = "";
      cardAnswer.style.opacity = 0;
      toggleAnswerBtn.disabled = true;
      setButtonsEnabled(false);
      return;
    }
    if (!current) {
      cardLabel.textContent = "Fertig";
      cardMeta.textContent = "";
      cardQuestion.textContent = "Prüfung bestanden – alle Karten wurden mindestens einmal richtig beantwortet.";
      cardAnswer.textContent = "";
      cardAnswer.style.opacity = 0;
      toggleAnswerBtn.disabled = true;
      setButtonsEnabled(false);
      finishedBox.classList.remove("hidden");
      return;
    }
    toggleAnswerBtn.disabled = false;
    setButtonsEnabled(true);
    cardLabel.textContent = answerShown ? "Antwort" : "Frage";
    cardQuestion.textContent = current.question || "";
    cardAnswer.textContent = current.answer || "";
    cardAnswer.style.opacity = answerShown ? 1 : 0;
    cardMeta.textContent = (current.categoryTitle || current.categoryId || "?") +
      " · " + (current.topicTitle || current.topicId || "?");
  }

  function nextFromQueue() {
    if (queue.length === 0) {
      current = null;
    } else {
      current = queue[0];
    }
    answerShown = false;
    renderCard();
    updateStats();
  }

  function toggleAnswer() {
    if (!current) return;
    answerShown = !answerShown;
    cardAnswer.style.opacity = answerShown ? 1 : 0;
    cardLabel.textContent = answerShown ? "Antwort" : "Frage";
    toggleAnswerBtn.textContent = answerShown ? "Antwort ausblenden" : "Antwort anzeigen";
  }

  // Buttons
  let touchMoved = false;
  card.addEventListener('touchstart', () => { touchMoved = false; });
  card.addEventListener('touchmove', () => { touchMoved = true; });
  toggleAnswerBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // verhindert Doppeltrigger über Karten-Click
    toggleAnswer();
  });
  card.addEventListener("click", (e) => {
    if (touchMoved) return;
    if (e.target.closest("#correctBtn") || e.target.closest("#wrongBtn") || e.target.closest("#toggleAnswerBtn")) return;
    toggleAnswer();
  });
  correctBtn.addEventListener("click", () => {
    if (!current) return;
    totalAnswered++;
    totalCorrect++;
    current.mastered = true;
    queue.shift();
    animateCardTransition(card, 'left');
    setTimeout(nextFromQueue, 250);
  });
  wrongBtn.addEventListener("click", () => {
    if (!current) return;
    totalAnswered++;
    totalWrong++;
    queue.push(current);
    queue.shift();
    animateCardTransition(card, 'right');
    setTimeout(nextFromQueue, 250);
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      toggleAnswer();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      correctBtn.click();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      wrongBtn.click();
    }
    if (e.key === "1") {
      e.preventDefault();
      correctBtn.click();
    }
    if (e.key === "2") {
      e.preventDefault();
      wrongBtn.click();
    }
  });

  // Animation und Wischgesten für Karte
  setupCardEvents({ card, prevBtn: wrongBtn, nextBtn: correctBtn });

  // Init
  updateMetaText();
  updateStats();
  renderCard();
}
