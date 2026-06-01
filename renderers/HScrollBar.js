export function HScrollBar(c) {
  const w = c.w || 200;
  const h = c.h || 16;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; background:#f0f0f0; border:1px solid #d3d3d3; border-radius:2px; box-sizing:border-box; display:flex; align-items:center;">
      <div style="width:16px; height:100%; display:flex; align-items:center; justify-content:center; background:#e0e0e0; cursor:pointer; font-size:8px;"><i class="fa-solid fa-chevron-left"></i></div>
      <div style="flex-grow:1; height:100%; position:relative; background:#f0f0f0; margin:0 2px;">
        <div style="position:absolute; left:10px; top:1px; bottom:1px; width:40px; background:#cdcdcd; border-radius:2px; cursor:pointer;" onmouseover="this.style.background='#a6a6a6'" onmouseout="this.style.background='#cdcdcd'"></div>
      </div>
      <div style="width:16px; height:100%; display:flex; align-items:center; justify-content:center; background:#e0e0e0; cursor:pointer; font-size:8px;"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
  `;
}
