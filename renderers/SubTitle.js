export function SubTitle(c) {
  const text = c.properties?.text || "";
  const size = c.properties?.size || 18;
  const isBold = c.properties?.bold === "true";
  return `
    <h4 style="position:absolute; left:${c.x}px; top:${c.y}px; font-size:${size}px; font-weight:${isBold ? "bold" : "normal"}; margin:0;">
      ${text}
    </h4>
  `;
}
