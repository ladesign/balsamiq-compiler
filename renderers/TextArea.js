export function TextArea(c) {
  const text = c.properties?.text || "";
  const w = c.w || 200;
  const h = c.h || 140;
  return `
    <textarea
      class="form-control form-control-sm"
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${w}px;
        height:${h}px;
        resize:none;
      "
    >${text}</textarea>
  `;
}
