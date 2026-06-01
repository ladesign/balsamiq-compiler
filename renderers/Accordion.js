export function Accordion(c) {
  const w = c.w || 150;
  const h = c.h || 120;
  const text = c.properties?.text || "Item 1\nItem 2\nItem 3";
  const items = text.split("\n").map(item => item.trim());
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #ddd; border-radius:4px; box-sizing:border-box; background:#fff; overflow-y:auto; font-size:13px;">
      ${items.map((item, idx) => `
        <div style="border-bottom:${idx === items.length - 1 ? "none" : "1px solid #ddd"};">
          <div style="background:#f8f9fa; padding:8px 12px; font-weight:bold; cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
            <span>${item}</span>
            <i class="fa-solid fa-chevron-right" style="font-size:10px; color:#777;"></i>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
