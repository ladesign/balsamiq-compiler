export function StickyNote(c) {
  const text = c.properties?.text || "";
  const size = c.properties?.size || 14;
  const isBold = c.properties?.bold === "true";
  const w = c.w || 150;
  const h = c.h || 150;
  return `
    <div
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${w}px;
        height:${h}px;
        background:#fff7c2;
        border:1px solid #e0d890;
        box-shadow:2px 2px 5px rgba(0,0,0,0.15);
        padding:15px;
        box-sizing:border-box;
        font-size:${size}px;
        font-weight:${isBold ? "bold" : "normal"};
        overflow:auto;
        color:#333;
        transform:rotate(-1deg);
      "
    >
      ${text.replace(/\n/g, "<br>")}
    </div>
  `;
}
