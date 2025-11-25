import { initCategorySelect } from './dom/initCategorySelect.js';
import { updateTopicSelect } from './dom/updateTopicSelect.js';
import { getFilteredQuestions } from './filter/getFilteredQuestions.js';
import { clampIndex } from './filter/clampIndex.js';
import { renderCardView } from './render/renderCardView.js';
import { renderListView } from './render/renderListView.js';

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

// State
let mode = "cards";
let currentIndex = 0;
let showAnswer = false;
let searchTerm = "";
let selectedCategoryId = "all";
let selectedTopicId = "all";

function render() {
  const filtered = getFilteredQuestions(allQuestions, selectedCategoryId, selectedTopicId, searchTerm);
  const domRefs = {
    totalCountLabel, filteredCountLabel, statsTotal, statsFiltered, currentIndexLabel, cardLabel, cardMeta, cardQuestion, cardAnswer,
    listCountLabel, listContainer
  };
  if (mode === "cards") {
    cardsView.classList.remove("hidden");
    listView.classList.add("hidden");
    modeCardsBtn.classList.add("bg-slate-900", "text-slate-100");
    modeCardsBtn.classList.remove("text-slate-400");
    modeListBtn.classList.remove("bg-slate-900", "text-slate-100");
    modeListBtn.classList.add("text-slate-400");
    renderCardView(filtered, allQuestions, currentIndex, showAnswer, domRefs);
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

// Events
modeCardsBtn.addEventListener("click", () => {
  mode = "cards";
  render();
});
modeListBtn.addEventListener("click", () => {
  mode = "list";
  render();
});
searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value || "";
  currentIndex = 0;
  showAnswer = false;
  render();
});
categorySelect.addEventListener("change", (e) => {
  selectedCategoryId = e.target.value || "all";
  selectedTopicId = "all";
  updateTopicSelect(catalog, selectedCategoryId, topicSelect);
  currentIndex = 0;
  showAnswer = false;
  render();
});
topicSelect.addEventListener("change", (e) => {
  selectedTopicId = e.target.value || "all";
  currentIndex = 0;
  showAnswer = false;
  render();
});
card.addEventListener("click", () => {
  if (mode !== "cards") return;
  showAnswer = !showAnswer;
  cardAnswer.style.opacity = showAnswer ? 1 : 0;
  cardLabel.textContent = showAnswer ? "Antwort" : "Frage";
});
prevBtn.addEventListener("click", () => {
  const filtered = getFilteredQuestions(allQuestions, selectedCategoryId, selectedTopicId, searchTerm);
  if (filtered.length === 0) return;
  currentIndex = clampIndex(currentIndex - 1, filtered.length);
  showAnswer = false;
  render();
});
nextBtn.addEventListener("click", () => {
  const filtered = getFilteredQuestions(allQuestions, selectedCategoryId, selectedTopicId, searchTerm);
  if (filtered.length === 0) return;
  currentIndex = clampIndex(currentIndex + 1, filtered.length);
  showAnswer = false;
  render();
});
randomBtn.addEventListener("click", () => {
  const filtered = getFilteredQuestions(allQuestions, selectedCategoryId, selectedTopicId, searchTerm);
  if (filtered.length === 0) return;
  const next = Math.floor(Math.random() * filtered.length);
  currentIndex = next;
  showAnswer = false;
  render();
});
document.addEventListener("keydown", (e) => {
  if (e.target === searchInput) return;
  const filtered = getFilteredQuestions(allQuestions, selectedCategoryId, selectedTopicId, searchTerm);
  if (filtered.length === 0) return;
  if (e.code === "Space") {
    e.preventDefault();
    if (mode === "cards") {
      showAnswer = !showAnswer;
      cardAnswer.style.opacity = showAnswer ? 1 : 0;
      cardLabel.textContent = showAnswer ? "Antwort" : "Frage";
    }
  }
  if (e.key === "ArrowRight") {
    e.preventDefault();
    currentIndex = clampIndex(currentIndex + 1, filtered.length);
    showAnswer = false;
    render();
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    currentIndex = clampIndex(currentIndex - 1, filtered.length);
    showAnswer = false;
    render();
  }
});
startExamBtn.addEventListener("click", () => {
  const filtered = getFilteredQuestions(allQuestions, selectedCategoryId, selectedTopicId, searchTerm);
  if (filtered.length === 0) {
    alert("Keine Fragen im aktuellen Filter. Bitte Kategorie/Thema/Suche anpassen.");
    return;
  }
  const params = new URLSearchParams();
  if (selectedCategoryId !== "all") params.set("category", selectedCategoryId);
  if (selectedTopicId !== "all") params.set("topic", selectedTopicId);
  if (searchTerm.trim() !== "") params.set("search", searchTerm.trim());
  const url = "exam.html" + (params.toString() ? "?" + params.toString() : "");
  window.location.href = url;
});

// Init
initCategorySelect(catalog, categorySelect);
updateTopicSelect(catalog, selectedCategoryId, topicSelect);
render();
