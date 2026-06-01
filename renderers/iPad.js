export function iPad(c) {
  const w = c.w || 800;
  const h = c.h || 600;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:20px solid #222; border-radius:30px; background:#fafafa; box-shadow:0 10px 25px rgba(0,0,0,0.15); box-sizing:border-box;">
      <div style="position:absolute; left:-12px; top:50%; transform:translateY(-50%); width:6px; height:6px; border-radius:50%; background:#555;"></div>
      <div style="position:absolute; right:-13px; top:50%; transform:translateY(-50%); width:8px; height:8px; border-radius:50%; background:#555;"></div>
    </div>
  `;
}
