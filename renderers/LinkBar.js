export function LinkBar(c) {
  const w = c.w || 200;
  const h = c.h || 20;
  const text = c.properties?.text || "Link 1, Link 2, Link 3";
  const items = text.split(",").map(item => item.trim());
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; display:flex; align-items:center; gap:8px; font-size:13px; font-weight:normal; box-sizing:border-box; white-space:nowrap; overflow:hidden;">
      ${items.map((item, idx) => `
        <a href="#" style="color:#007bff; text-decoration:none;">${item}</a>
        ${idx < items.length - 1 ? `<span style="color:#ccc;">|</span>` : ""}
      `).join("")}
    </div>
  `;
}
