export function Shape(c) {
  const w = c.w || 100;
  const h = c.h || 100;
  const shapeType = c.properties?.shapeType || "rectangle";
  let borderRadius = "0";
  if (shapeType === "roundrect") {
    borderRadius = "8px";
  } else if (shapeType === "ellipse") {
    borderRadius = "50%";
  }
  return `
    <div
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${w}px;
        height:${h}px;
        border:1px solid #666;
        background:#fff;
        border-radius:${borderRadius};
        box-sizing:border-box;
      "
    ></div>
  `;
}
