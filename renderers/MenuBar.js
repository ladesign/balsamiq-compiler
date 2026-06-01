export function MenuBar(c) {
  const w = c.w || 400;
  const h = c.h || 24;
  const text = c.properties?.text || "File, Edit, View, Help";
  const items = text.split(",").map(item => item.trim());
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; background:#f8f9fa; border:1px solid #ddd; display:flex; align-items:center; padding:0 10px; font-size:13px; box-sizing:border-box; border-radius:3px;">
      ${items.map(item => `<span style="margin-right:15px; cursor:pointer; color:#333;">${item}</span>`).join("")}
    </div>
  `;
}
