export function iPhone(c) {
  const w = c.w || 375;
  const h = c.h || 750;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:15px solid #111; border-radius:36px; background:#fff; box-shadow:0 8px 20px rgba(0,0,0,0.15); box-sizing:border-box;">
      <div style="position:absolute; left:50%; top:-9px; transform:translateX(-50%); width:60px; height:4px; border-radius:2px; background:#555;"></div>
      <div style="position:absolute; left:50%; bottom:-12px; transform:translateX(-50%); width:10px; height:10px; border-radius:50%; background:#555;"></div>
    </div>
  `;
}
