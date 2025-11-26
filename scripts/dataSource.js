// scripts/dataSource.js
export function getQuestionsFileFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('questionsFile') || 'questions.js';
}

export function loadQuestionsFile(file, callback) {
  const script = document.createElement('script');
  script.src = file;
  script.onload = callback;
  document.head.appendChild(script);
}

export function waitForCatalogReady(callback) {
  function check() {
    if (window.CATALOG && window.CATALOG.categories && window.CATALOG.categories.length > 0) {
      callback(window.CATALOG);
    } else {
      setTimeout(check, 30);
    }
  }
  check();
}

export function loadQuestionsAndInit(modulePath) {
  const questionsFile = getQuestionsFileFromUrl();
  loadQuestionsFile(questionsFile, () => {
    import(modulePath);
  });
}