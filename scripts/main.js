import { initCategorySelect } from './dom/initCategorySelect.js';
import { updateTopicSelect } from './dom/updateTopicSelect.js';
import { getFilteredQuestions } from './filter/getFilteredQuestions.js';
import { clampIndex } from './filter/clampIndex.js';
import { renderCardView } from './render/renderCardView.js';
import { renderListView } from './render/renderListView.js';
import { setupCardEvents, animateCardTransition } from './events/cardEvents.js';
import { setupKeyboardEvents } from './events/keyboardEvents.js';
import { setupUIEvents } from './events/uiEvents.js';
import { appState } from './state/appState.js';

// erwartet: window.CATALOG = { categories: [...] }
const catalog = (window.CATALOG && window.CATALOG.categories) ? window.CATALOG : { categories: [] };

const allQuestions = [];
catalog.categories.forEach(cat => {
  (cat.topics || []).forEach(topic => {
    (topic.questions || []).forEach(q => {
      allQuestions.push({
        id: q.id,
        question: q.question,
        answer: q.answer,
        categoryId: cat.id,
        categoryTitle: cat.title,
        topicId: topic.id,
        topicTitle: topic.title
      });
    });
  });
});

// DOM-Refs
const modeCardsBtn = document.getElementById("modeCardsBtn");
const modeListBtn = document.getElementById("modeListBtn");
const cardsView = document.getElementById("cardsView");
const listView = document.getElementById("listView");
const card = document.getElementById("flashcard");
const cardLabel = document.getElementById("cardLabel");
const cardMeta = document.getElementById("cardMeta");
const cardQuestion = document.getElementById("cardQuestion");
const cardAnswer = document.getElementById("cardAnswer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const randomBtn = document.getElementById("randomBtn");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const topicSelect = document.getElementById("topicSelect");
const currentIndexLabel = document.getElementById("currentIndexLabel");
const filteredCountLabel = document.getElementById("filteredCountLabel");
const totalCountLabel = document.getElementById("totalCountLabel");
const listCountLabel = document.getElementById("listCountLabel");
const listContainer = document.getElementById("listContainer");
const statsTotal = document.getElementById("statsTotal");
const statsFiltered = document.getElementById("statsFiltered");
const startExamBtn = document.getElementById("startExamBtn");

function render(action) {
  const filtered = getFilteredQuestions(allQuestions, appState.selectedCategoryId, appState.selectedTopicId, appState.searchTerm);
  const domRefs = {
    totalCountLabel, filteredCountLabel, statsTotal, statsFiltered, currentIndexLabel, cardLabel, cardMeta, cardQuestion, cardAnswer,
    listCountLabel, listContainer
  };
  if (action === 'toggleAnswer') {
    appState.showAnswer = !appState.showAnswer;
    cardAnswer.style.opacity = appState.showAnswer ? 1 : 0;
    cardLabel.textContent = appState.showAnswer ? "Antwort" : "Frage";
    return;
  }
  if (action === 'next') {
    animateCardTransition(card, 'left');
    if (filtered.length === 0) return;
    appState.currentIndex = clampIndex(appState.currentIndex + 1, filtered.length);
    appState.showAnswer = false;
  }
  if (action === 'prev') {
    animateCardTransition(card, 'right');
    if (filtered.length === 0) return;
    appState.currentIndex = clampIndex(appState.currentIndex - 1, filtered.length);
    appState.showAnswer = false;
  }
  if (action === 'startExam') {
    if (filtered.length === 0) {
      alert("Keine Fragen im aktuellen Filter. Bitte Kategorie/Thema/Suche anpassen.");
      return;
    }
    const params = new URLSearchParams();
    if (appState.selectedCategoryId !== "all") params.set("category", appState.selectedCategoryId);
    if (appState.selectedTopicId !== "all") params.set("topic", appState.selectedTopicId);
    if (appState.searchTerm.trim() !== "") params.set("search", appState.searchTerm.trim());
    const url = "exam.html" + (params.toString() ? "?" + params.toString() : "");
    window.location.href = url;
    return;
  }
  if (appState.mode === "cards") {
    cardsView.classList.remove("hidden");
    listView.classList.add("hidden");
    modeCardsBtn.classList.add("bg-slate-900", "text-slate-100");
    modeCardsBtn.classList.remove("text-slate-400");
    modeListBtn.classList.remove("bg-slate-900", "text-slate-100");
    modeListBtn.classList.add("text-slate-400");
    renderCardView(filtered, allQuestions, appState.currentIndex, appState.showAnswer, domRefs);
  } else {
    listView.classList.remove("hidden");
    cardsView.classList.add("hidden");
    modeListBtn.classList.add("bg-slate-900", "text-slate-100");
    modeListBtn.classList.remove("text-slate-400");
    modeCardsBtn.classList.remove("bg-slate-900", "text-slate-100");
    modeCardsBtn.classList.add("text-slate-400");
    renderListView(filtered, allQuestions, domRefs);
  }
}

function handlePrev() {
  const filtered = getFilteredQuestions(allQuestions, appState.selectedCategoryId, appState.selectedTopicId, appState.searchTerm);
  if (filtered.length === 0) return;
  animateCardTransition(card, 'right');
  setTimeout(() => {
    appState.currentIndex = clampIndex(appState.currentIndex - 1, filtered.length);
    appState.showAnswer = false;
    render();
  }, 250);
}

function handleNext() {
  const filtered = getFilteredQuestions(allQuestions, appState.selectedCategoryId, appState.selectedTopicId, appState.searchTerm);
  if (filtered.length === 0) return;
  animateCardTransition(card, 'left');
  setTimeout(() => {
    appState.currentIndex = clampIndex(appState.currentIndex + 1, filtered.length);
    appState.showAnswer = false;
    render();
  }, 250);
}

function handleRandom() {
  const filtered = getFilteredQuestions(allQuestions, appState.selectedCategoryId, appState.selectedTopicId, appState.searchTerm);
  if (filtered.length === 0) return;
  const next = Math.floor(Math.random() * filtered.length);
  animateCardTransition(card, Math.random() > 0.5 ? 'left' : 'right');
  setTimeout(() => {
    appState.currentIndex = next;
    appState.showAnswer = false;
    render();
  }, 250);
}

// Initialisierung
initCategorySelect(catalog, categorySelect);
updateTopicSelect(catalog, appState.selectedCategoryId, topicSelect);
prevBtn.addEventListener("click", handlePrev);
nextBtn.addEventListener("click", handleNext);
randomBtn.addEventListener("click", handleRandom);
setupCardEvents({ card, prevBtn, nextBtn });
setupKeyboardEvents({ searchInput, getFilteredQuestions, allQuestions, selectedCategoryId: appState.selectedCategoryId, selectedTopicId: appState.selectedTopicId, render, clampIndex });
setupUIEvents({ modeCardsBtn, modeListBtn, searchInput, categorySelect, topicSelect, startExamBtn, appState, updateTopicSelect, catalog, render });
let touchMoved = false;
card.addEventListener('touchstart', () => { touchMoved = false; });
card.addEventListener('touchmove', () => { touchMoved = true; });
card.addEventListener("click", (e) => {
  if (touchMoved) return;
  if (e.target.closest("#prevBtn") || e.target.closest("#nextBtn") || e.target.closest("#randomBtn")) return;
  appState.showAnswer = !appState.showAnswer;
  cardAnswer.style.opacity = appState.showAnswer ? 1 : 0;
  cardLabel.textContent = appState.showAnswer ? "Antwort" : "Frage";
});
render();
