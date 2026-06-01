export function VSlider(c) {
  const w = c.w || 24;
  const h = c.h || 150;
  const val = c.properties?.value || "50";
  return `<input type="range" class="custom-range" value="${val}" style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; transform: rotate(-90deg); transform-origin: center; box-sizing:border-box;" />`;
}
