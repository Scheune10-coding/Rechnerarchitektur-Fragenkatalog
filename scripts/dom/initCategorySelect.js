// dom/initCategorySelect.js
export function initCategorySelect(catalog, categorySelect) {
  categorySelect.innerHTML = "";
  const optAll = document.createElement("option");
  optAll.value = "all";
  optAll.textContent = "Alle Kategorien";
  categorySelect.appendChild(optAll);
  catalog.categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat.id;
    opt.textContent = cat.title || cat.id;
    categorySelect.appendChild(opt);
  });
}
