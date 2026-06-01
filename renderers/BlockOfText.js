export function BlockOfText(c) {
  const w = c.w || 200;
  const h = c.h || 60;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; display:flex; flex-direction:column; justify-content:space-between; box-sizing:border-box;">
      <div style="height:4px; background:#ddd; border-radius:2px; width:100%;"></div>
      <div style="height:4px; background:#ddd; border-radius:2px; width:95%;"></div>
      <div style="height:4px; background:#ddd; border-radius:2px; width:98%;"></div>
      <div style="height:4px; background:#ddd; border-radius:2px; width:80%;"></div>
    </div>
  `;
}
