export function Button(c) {
  return `
    <button
      class="btn btn-primary"
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
      "
    >
      ${c.properties?.text || ""}
    </button>
  `;
}
