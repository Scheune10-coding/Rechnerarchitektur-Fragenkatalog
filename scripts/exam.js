// Hauptlogik für exam.html
// Erwartet: window.CATALOG = { categories: [...] }

import { setupExamNavigation } from './exam/setupExamNavigation.js';

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

// Übergibt alle relevanten DOM-Elemente und State-Variablen an die Navigationslogik
setupExamNavigation({ catalog, allQuestions });
