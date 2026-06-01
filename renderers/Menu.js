export function Menu(c) {
  const w = c.w || 150;
  const h = c.h || 120;
  const text = c.properties?.text || "Open, Save, -, Close";
  const items = text.split(",").map(item => item.trim());
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; background:#fff; border:1px solid #ccc; border-radius:4px; box-shadow:0 2px 8px rgba(0,0,0,0.1); padding:5px 0; box-sizing:border-box; overflow-y:auto; display:flex; flex-direction:column; z-index:999;">
      ${items.map(item => {
        if (item === "-") {
          return `<hr style="margin:4px 0; border:none; border-top:1px solid #eee;" />`;
        }
        return `<div style="padding:4px 15px; font-size:13px; color:#333; cursor:pointer; white-space:nowrap; text-overflow:ellipsis; overflow:hidden;" onmouseover="this.style.background='#f1f3f5'" onmouseout="this.style.background='none'">${item}</div>`;
      }).join("")}
    </div>
  `;
}
