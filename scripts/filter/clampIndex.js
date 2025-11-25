// filter/clampIndex.js
export function clampIndex(index, len) {
  if (len === 0) return 0;
  if (index < 0) return 0;
  if (index >= len) return len - 1;
  return index;
}
