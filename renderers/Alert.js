export function Alert(c) {
  const w = c.w || 300;
  const h = c.h || 150;
  const text = c.properties?.text || "Alert\nMessage goes here\nOK, Cancel";
  const lines = text.split("\n");
  const title = lines[0] || "Alert";
  const message = lines[1] || "";
  const buttons = lines.slice(2).flatMap(b => b.split(",")).map(b => b.trim()).filter(Boolean);
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #666; border-radius:6px; background:#fff; box-shadow:0 4px 12px rgba(0,0,0,0.25); display:flex; flex-direction:column; padding:15px; box-sizing:border-box; justify-content:space-between; z-index:1000;">
      <div>
        <div style="font-weight:bold; font-size:16px; margin-bottom:8px;">${title}</div>
        <div style="font-size:14px; color:#555;">${message}</div>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:8px;">
        ${buttons.length > 0 ? buttons.map(btn => `<button class="btn btn-sm btn-outline-secondary">${btn}</button>`).join("") : `<button class="btn btn-sm btn-primary">OK</button>`}
      </div>
    </div>
  `;
}
