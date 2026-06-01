export function Callout(c) {
  const text = c.properties?.text || "1";
  const color = c.properties?.color || "ffc107";
  const w = c.w || 24;
  const h = c.h || 24;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border-radius:50%; background:#${color.startsWith("0x") ? color.slice(2) : color}; color:#333; border:2px solid #333; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold; box-sizing:border-box; box-shadow:1px 1px 3px rgba(0,0,0,0.2);">
      ${text}
    </div>
  `;
}
