export function Component(c) {
  const w = c.w || 100;
  const h = c.h || 100;
  return `<div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px dashed #aaa; background:rgba(0,0,0,0.02); display:flex; align-items:center; justify-content:center; font-size:12px; color:#999; box-sizing:border-box;">Symbol</div>`;
}
