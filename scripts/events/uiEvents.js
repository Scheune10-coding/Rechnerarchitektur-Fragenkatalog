// events/uiEvents.js
export function setupUIEvents({ modeCardsBtn, modeListBtn, searchInput, categorySelect, topicSelect, startExamBtn, appState, updateTopicSelect, catalog, render }) {
  modeCardsBtn.addEventListener("click", () => {
    appState.mode = "cards";
    render();
  });
  modeListBtn.addEventListener("click", () => {
    appState.mode = "list";
    render();
  });
  searchInput.addEventListener("input", (e) => {
    appState.searchTerm = e.target.value || "";
    appState.currentIndex = 0;
    appState.showAnswer = false;
    render();
  });
  categorySelect.addEventListener("change", (e) => {
    appState.selectedCategoryId = e.target.value || "all";
    appState.selectedTopicId = "all";
    updateTopicSelect(catalog, appState.selectedCategoryId, topicSelect);
    appState.currentIndex = 0;
    appState.showAnswer = false;
    render();
  });
  topicSelect.addEventListener("change", (e) => {
    appState.selectedTopicId = e.target.value || "all";
    appState.currentIndex = 0;
    appState.showAnswer = false;
    render();
  });
  startExamBtn.addEventListener("click", () => {
    render('startExam');
  });
}
