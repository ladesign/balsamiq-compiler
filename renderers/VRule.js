export function VRule(c) {
  const h = c.h || 200;
  return `<div style="position:absolute; left:${c.x}px; top:${c.y}px; height:${h}px; border-left:1px solid #999; width:0; margin:0;"></div>`;
}
