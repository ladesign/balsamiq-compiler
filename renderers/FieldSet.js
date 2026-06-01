export function FieldSet(c) {
  const text = c.properties?.text || "";
  const w = c.w || 200;
  const h = c.h || 170;
  const childrenContent = c.childrenHtml || "";
  return `
    <fieldset
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${w}px;
        height:${h}px;
        border:1px solid #ddd;
        border-radius:4px;
        padding:15px;
        box-sizing:border-box;
      "
    >
      ${text ? `<legend style="font-size: 14px; font-weight: bold; width: auto; padding: 0 5px; margin-bottom: 0; border: none;">${text}</legend>` : ""}
      ${childrenContent}
    </fieldset>
  `;
}
