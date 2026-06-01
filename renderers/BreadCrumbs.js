export function BreadCrumbs(c) {
  const w = c.w || 200;
  const h = c.h || 20;
  const text = c.properties?.text || "Home, Category, Page";
  const items = text.split(",").map(item => item.trim());
  return `
    <nav aria-label="breadcrumb" style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; box-sizing:border-box;">
      <ol class="breadcrumb" style="padding:0; margin:0; background:none; font-size:13px; display:flex; flex-wrap:nowrap;">
        ${items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          if (isLast) {
            return `<li class="breadcrumb-item active" aria-current="page" style="white-space:nowrap;">${item}</li>`;
          }
          return `<li class="breadcrumb-item" style="white-space:nowrap;"><a href="#">${item}</a></li>`;
        }).join("")}
      </ol>
    </nav>
  `;
}
