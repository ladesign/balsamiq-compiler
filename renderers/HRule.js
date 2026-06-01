export function HRule(c) {
  const w = c.w || 200;
  return `<hr style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; border:none; border-top:1px solid #999; margin:0;" />`;
}
