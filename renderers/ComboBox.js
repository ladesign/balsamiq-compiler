export function ComboBox(c) {
  const text = c.properties?.text || "";
  const lines = text.split("\n");
  const w = c.w || 120;
  const h = c.h || 24;

  const options = lines.map(line => {
    const trimmed = line.trim();
    return `<option value="${trimmed}">${trimmed}</option>`;
  }).join("\n");

  return `
    <select
      class="form-control form-control-sm"
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${w}px;
        height:${h}px;
        padding:2px 6px;
      "
    >
      ${options}
    </select>
  `;
}
