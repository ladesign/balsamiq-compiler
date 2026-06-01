export function CoverFlow(c) {
  const w = c.w || 300;
  const h = c.h || 120;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #ddd; background:#fafafa; border-radius:4px; box-sizing:border-box; display:flex; align-items:center; justify-content:center; overflow:hidden; gap:5px; padding:10px;">
      <div style="width:20%; height:70%; border:1px solid #999; background:#ddd; transform: skewY(10deg); border-radius:2px;"></div>
      <div style="width:35%; height:90%; border:1px solid #555; background:#fff; z-index:2; box-shadow:0 4px 8px rgba(0,0,0,0.15); border-radius:4px; display:flex; align-items:center; justify-content:center;"><i class="fa-regular fa-image" style="font-size:24px; color:#777;"></i></div>
      <div style="width:20%; height:70%; border:1px solid #999; background:#ddd; transform: skewY(-10deg); border-radius:2px;"></div>
    </div>
  `;
}
