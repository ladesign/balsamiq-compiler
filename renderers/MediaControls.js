export function MediaControls(c) {
  const w = c.w || 120;
  const h = c.h || 24;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; display:flex; border:1px solid #ccc; border-radius:4px; background:#fff; overflow:hidden; box-sizing:border-box; align-items:center; justify-content:space-around; font-size:12px; color:#555;">
      <i class="fa-solid fa-backward" style="cursor:pointer;"></i>
      <i class="fa-solid fa-play" style="cursor:pointer;"></i>
      <i class="fa-solid fa-stop" style="cursor:pointer;"></i>
      <i class="fa-solid fa-forward" style="cursor:pointer;"></i>
    </div>
  `;
}
