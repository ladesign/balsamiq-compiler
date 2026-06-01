export function Title(c) {
  return `
    <h2
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
      "
    >
      ${c.properties?.text || ""}
    </h2>
  `;
}
