// filter/getFilteredQuestions.js
export function getFilteredQuestions(allQuestions, selectedCategoryId, selectedTopicId, searchTerm) {
  let result = allQuestions.slice();
  if (selectedCategoryId !== "all") {
    result = result.filter(q => q.categoryId === selectedCategoryId);
  }
  if (selectedTopicId !== "all") {
    result = result.filter(q => q.topicId === selectedTopicId);
  }
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    result = result.filter(q =>
      (q.question || "").toLowerCase().includes(term) ||
      (q.answer || "").toLowerCase().includes(term)
    );
  }
  return result;
}
