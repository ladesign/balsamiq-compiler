export function Canvas(c) {
  const w = c.w || 200;
  const h = c.h || 100;
  return `<div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #ccc; background:#fff; box-sizing:border-box;"></div>`;
}
