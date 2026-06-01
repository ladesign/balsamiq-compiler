export function Link(c) {
  const text = c.properties?.text || "";
  return `<a href="#" style="position:absolute; left:${c.x}px; top:${c.y}px; font-size:14px; text-decoration:underline; color:#007bff; white-space:nowrap;">${text}</a>`;
}
