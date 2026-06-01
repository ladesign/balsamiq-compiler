export function ButtonBar(c) {
  const w = c.w || 250;
  const h = c.h || 28;
  const text = c.properties?.text || "One, Two, Three";
  const items = text.split(",").map(item => item.trim());
  const selectedIndex = parseInt(c.properties?.selectedIndex || "0", 10);
  return `
    <div class="btn-group btn-group-sm" role="group" style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; box-sizing:border-box;">
      ${items.map((item, idx) => `
        <button type="button" class="btn ${idx === selectedIndex ? "btn-primary" : "btn-outline-primary"}" style="font-size:12px;">${item}</button>
      `).join("")}
    </div>
  `;
}
