// dom/updateTopicSelect.js
export function updateTopicSelect(catalog, selectedCategoryId, topicSelect) {
  topicSelect.innerHTML = "";
  const optAll = document.createElement("option");
  optAll.value = "all";
  optAll.textContent = "Alle Themen";
  topicSelect.appendChild(optAll);
  if (selectedCategoryId === "all") return;
  const cat = catalog.categories.find(c => c.id === selectedCategoryId);
  if (!cat) return;
  (cat.topics || []).forEach(topic => {
    const opt = document.createElement("option");
    opt.value = topic.id;
    opt.textContent = topic.title || topic.id;
    topicSelect.appendChild(opt);
  });
}
