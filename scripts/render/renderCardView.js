// render/renderCardView.js
export function renderCardView(filtered, allQuestions, currentIndex, showAnswer, domRefs) {
  const { totalCountLabel, filteredCountLabel, statsTotal, statsFiltered, currentIndexLabel, cardLabel, cardMeta, cardQuestion, cardAnswer } = domRefs;
  const total = allQuestions.length;
  const count = filtered.length;
  totalCountLabel.textContent = total;
  filteredCountLabel.textContent = count;
  statsTotal.textContent = total;
  statsFiltered.textContent = count;
  if (count === 0) {
    currentIndexLabel.textContent = "0";
    cardLabel.textContent = "Frage";
    cardMeta.textContent = "Keine Treffer";
    cardQuestion.textContent = "Keine Fragen gefunden. Passe Filter oder Suche an.";
    cardAnswer.textContent = "";
    cardAnswer.style.opacity = 0;
    return;
  }
  currentIndexLabel.textContent = String(currentIndex + 1);
  cardQuestion.textContent = filtered[currentIndex].question || "";
  cardAnswer.textContent = filtered[currentIndex].answer || "";
  cardAnswer.style.opacity = showAnswer ? 1 : 0;
  cardLabel.textContent = showAnswer ? "Antwort" : "Frage";
  cardMeta.textContent = (filtered[currentIndex].categoryTitle || filtered[currentIndex].categoryId || "?") +
    " · " + (filtered[currentIndex].topicTitle || filtered[currentIndex].topicId || "?");
}
