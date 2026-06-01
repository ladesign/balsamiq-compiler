export function CheckBox(c) {
  const text = c.properties?.text || "";
  const isSelected = c.properties?.state === "selected";
  const w = c.w || 100;
  const h = c.h || 24;
  return `
    <div
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${w}px;
        height:${h}px;
        display:flex;
        align-items:center;
        gap:5px;
      "
    >
      <input type="checkbox" ${isSelected ? "checked" : ""} style="cursor:pointer;" />
      <span style="font-size:14px; white-space:nowrap;">${text}</span>
    </div>
  `;
}
