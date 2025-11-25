// render/renderListView.js
export function renderListView(filtered, allQuestions, domRefs) {
  const { listCountLabel, statsTotal, statsFiltered, listContainer } = domRefs;
  const total = allQuestions.length;
  const count = filtered.length;
  listCountLabel.textContent = count;
  statsTotal.textContent = total;
  statsFiltered.textContent = count;
  listContainer.innerHTML = "";
  if (count === 0) {
    const li = document.createElement("li");
    li.className =
      "rounded-xl border border-slate-800 bg-slate-950/90 px-5 py-4 text-lg text-slate-100";
    li.textContent = "Keine Fragen gefunden. Filter/Suche anpassen.";
    listContainer.appendChild(li);
    return;
  }
  filtered.forEach((item, idx) => {
    const li = document.createElement("li");
    li.className =
      "rounded-xl border border-slate-800 bg-slate-900/95 overflow-hidden";
    const header = document.createElement("button");
    header.type = "button";
    header.className =
      "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg text-slate-50";
    header.innerHTML = `
      <span class=\"flex-1\">
        <span class=\"mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-slate-100\">
          ${idx + 1}
        </span>
        <span class=\"block text-xs text-cyan-300 mb-1\">
          ${item.categoryTitle || item.categoryId} · ${item.topicTitle || item.topicId}
        </span>
        <span class=\"text-base sm:text-lg leading-relaxed\">
          ${item.question}
        </span>
      </span>
      <span class=\"ml-3 text-slate-400 text-sm toggle-icon\">▼</span>
    `;
    const answer = document.createElement("div");
    answer.className =
      "hidden border-t border-slate-800/80 bg-slate-950 px-5 py-4 text-base sm:text-lg text-slate-100 whitespace-pre-line leading-relaxed";
    answer.textContent = item.answer || "Keine Antwort hinterlegt.";
    header.addEventListener("click", () => {
      const isHidden = answer.classList.contains("hidden");
      answer.classList.toggle("hidden", !isHidden);
      const icon = header.querySelector(".toggle-icon");
      if (icon) {
        icon.textContent = isHidden ? "▲" : "▼";
      }
    });
    li.appendChild(header);
    li.appendChild(answer);
    listContainer.appendChild(li);
  });
}
