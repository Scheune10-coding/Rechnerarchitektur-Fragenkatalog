// Hauptlogik für exam.html
// Erwartet: window.CATALOG = { categories: [...] }

import { setupExamNavigation } from './exam/setupExamNavigation.js';
import { getQuestionsFileFromUrl, loadQuestionsFile, waitForCatalogReady } from './dataSource.js';

// Zentrale Steuerung: Initialisiere alles hier
const questionsFile = getQuestionsFileFromUrl();
loadQuestionsFile(questionsFile, () => {
  waitForCatalogReady((catalogObj) => {
    const catalog = catalogObj;
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
    setupExamNavigation({ catalog, allQuestions });
  });
});
