export function TextInput(c) {
  const text = c.properties?.text || "";
  const w = c.w || 120;
  const h = c.h || 24;
  return `
    <input
      type="text"
      class="form-control form-control-sm"
      value="${text}"
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${w}px;
        height:${h}px;
      "
    />
  `;
}
