export function Paragraph(c) {
  const text = c.properties?.text || "";
  const w = c.w || 200;
  const h = c.h || 80;
  return `
    <p style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; font-size:14px; color:#333; line-height:1.4; overflow:hidden; margin:0; text-align:left;">
      ${text.replace(/\n/g, "<br>")}
    </p>
  `;
}
