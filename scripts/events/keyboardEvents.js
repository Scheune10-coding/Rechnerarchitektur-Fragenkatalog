// events/keyboardEvents.js
export function setupKeyboardEvents({ searchInput, getFilteredQuestions, allQuestions, selectedCategoryId, selectedTopicId, render, clampIndex }) {
  document.addEventListener("keydown", (e) => {
    if (e.target === searchInput) return;
    const filtered = getFilteredQuestions(allQuestions, selectedCategoryId, selectedTopicId, "");
    if (filtered.length === 0) return;
    if (e.code === "Space") {
      e.preventDefault();
      render('toggleAnswer');
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      render('next');
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      render('prev');
    }
  });
}
