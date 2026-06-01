export function Label(c) {
  return `
    <div
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        font-size:${c.properties?.size || 14}px;
      "
    >
      ${c.properties?.text || ""}
    </div>
  `;
}
