export function TabBar(c) {
  const w = c.w || 300;
  const h = c.h || 30;
  const text = c.properties?.text || "Tab 1, Tab 2, Tab 3";
  const items = text.split(",").map(item => item.trim());
  const selectedIndex = parseInt(c.properties?.selectedIndex || "0", 10);
  return `
    <ul class="nav nav-tabs" style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border-bottom:1px solid #dee2e6; box-sizing:border-box;">
      ${items.map((item, idx) => `
        <li class="nav-item">
          <a class="nav-link ${idx === selectedIndex ? "active" : ""}" href="#" style="padding:4px 12px; font-size:13px; font-weight:${idx === selectedIndex ? "bold" : "normal"};">${item}</a>
        </li>
      `).join("")}
    </ul>
  `;
}
