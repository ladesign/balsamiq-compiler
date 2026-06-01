export function List(c) {
  const text = c.properties?.text || "";
  const lines = text.split("\n");
  const selectedIndex = parseInt(c.properties?.selectedIndex || "-1", 10);
  const hasHeader = c.properties?.hasHeader === "true";
  const size = c.properties?.size || 14;

  const w = c.w || 150;
  const h = c.h || 150;

  const renderedItems = lines.map((line, idx) => {
    const trimmed = line.trim();
    if (idx === 0 && hasHeader) {
      return `
        <div
          class="list-group-item disabled"
          style="
            background: #eee;
            font-weight: bold;
            color: #333;
            padding: 8px 12px;
            font-size: ${size}px;
            border-bottom: 2px solid #ccc;
          "
        >
          ${trimmed}
        </div>
      `;
    }

    const leadingSpaces = line.length - line.trimStart().length;
    const paddingLeft = leadingSpaces > 0 ? (leadingSpaces * 4) + 12 : 12;
    const isActive = selectedIndex === idx;

    return `
      <a
        href="#"
        class="list-group-item list-group-item-action ${isActive ? "active" : ""}"
        style="
          padding: 8px 12px;
          padding-left: ${paddingLeft}px;
          font-size: ${size}px;
          border-color: #ddd;
          color: ${isActive ? "#fff" : "#444"};
          background-color: ${isActive ? "#007bff" : "#fff"};
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        "
      >
        ${trimmed}
      </a>
    `;
  }).join("\n");

  return `
    <div
      class="list-group"
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${w}px;
        height:${h}px;
        overflow-y:auto;
        border:1px solid #ddd;
        border-radius:4px;
        background:#fff;
      "
    >
      ${renderedItems}
    </div>
  `;
}
