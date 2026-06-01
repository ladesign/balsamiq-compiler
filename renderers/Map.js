export function Map(c) {
  const w = c.w || 200;
  const h = c.h || 150;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #999; background:#e5e3df; box-sizing:border-box; display:flex; align-items:center; justify-content:center; overflow:hidden;">
      <svg width="100%" height="100%" style="position:absolute; left:0; top:0; opacity:0.3;">
        <line x1="0" y1="0" x2="${w}" y2="${h}" stroke="#666" stroke-width="1" />
        <line x1="0" y1="${h}" x2="${w}" y2="0" stroke="#666" stroke-width="1" />
      </svg>
      <i class="fa-solid fa-location-dot" style="font-size:32px; color:#dc3545; z-index:1; filter:drop-shadow(1px 1px 2px rgba(0,0,0,0.3));"></i>
    </div>
  `;
}
