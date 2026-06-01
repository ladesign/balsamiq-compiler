export function DateChooser(c) {
  const text = c.properties?.text || "";
  const w = c.w || 120;
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
        border:1px solid #ccc;
        border-radius:4px;
        padding:0 8px;
        background:#fff;
        box-sizing:border-box;
      "
    >
      <span style="flex-grow:1; font-size:14px; color:#333; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">${text}</span>
      <i class="fa-regular fa-calendar" style="color:#666; font-size:14px;"></i>
    </div>
  `;
}
