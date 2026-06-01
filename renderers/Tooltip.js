export function Tooltip(c) {
  const text = c.properties?.text || "Tooltip";
  const w = c.w || 100;
  const h = c.h || 32;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; background:#333; color:#fff; font-size:12px; border-radius:4px; padding:6px 10px; display:flex; align-items:center; justify-content:center; box-sizing:border-box; box-shadow:0 2px 4px rgba(0,0,0,0.15);">
      <span>${text}</span>
      <div style="position:absolute; bottom:-5px; left:50%; transform:translateX(-50%); width:0; height:0; border-left:5px solid transparent; border-right:5px solid transparent; border-top:5px solid #333;"></div>
    </div>
  `;
}
