export function HSlider(c) {
  const w = c.w || 150;
  const h = c.h || 24;
  const val = c.properties?.value || "50";
  return `<input type="range" class="custom-range" value="${val}" style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; box-sizing:border-box;" />`;
}
