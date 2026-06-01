export function VideoPlayer(c) {
  const w = c.w || 300;
  const h = c.h || 200;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #444; background:#111; border-radius:4px; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; overflow:hidden; color:#fff;">
      <div style="flex-grow:1; display:flex; align-items:center; justify-content:center;">
        <i class="fa-solid fa-play" style="font-size:40px; opacity:0.7; cursor:pointer;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7"></i>
      </div>
      <div style="background:rgba(0,0,0,0.8); height:30px; display:flex; align-items:center; padding:0 10px; gap:10px; font-size:12px;">
        <i class="fa-solid fa-play"></i>
        <div style="flex-grow:1; height:4px; background:#555; border-radius:2px; position:relative;">
          <div style="width:30%; height:100%; background:#007bff; border-radius:2px;"></div>
        </div>
        <span>01:15 / 03:45</span>
        <i class="fa-solid fa-volume-high"></i>
      </div>
    </div>
  `;
}
