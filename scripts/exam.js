// Hauptlogik für exam.html
// Erwartet: window.CATALOG = { categories: [...] }

import { setupExamNavigation } from './exam/setupExamNavigation.js';

function waitForCatalog(callback) {
  if (window.CATALOG && window.CATALOG.categories) {
    callback(window.CATALOG);
  } else {
    setTimeout(() => waitForCatalog(callback), 30);
  }
}

waitForCatalog((catalogObj) => {
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
