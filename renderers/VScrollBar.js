export function VScrollBar(c) {
  const w = c.w || 16;
  const h = c.h || 200;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; background:#f0f0f0; border:1px solid #d3d3d3; border-radius:2px; box-sizing:border-box; display:flex; flex-direction:column; align-items:center;">
      <div style="height:16px; width:100%; display:flex; align-items:center; justify-content:center; background:#e0e0e0; cursor:pointer; font-size:8px;"><i class="fa-solid fa-chevron-up"></i></div>
      <div style="flex-grow:1; width:100%; position:relative; background:#f0f0f0; margin:2px 0;">
        <div style="position:absolute; top:10px; left:1px; right:1px; height:40px; background:#cdcdcd; border-radius:2px; cursor:pointer;" onmouseover="this.style.background='#a6a6a6'" onmouseout="this.style.background='#cdcdcd'"></div>
      </div>
      <div style="height:16px; width:100%; display:flex; align-items:center; justify-content:center; background:#e0e0e0; cursor:pointer; font-size:8px;"><i class="fa-solid fa-chevron-down"></i></div>
    </div>
  `;
}
