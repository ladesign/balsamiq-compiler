export function Image(c) {
  const w = c.w || 200;
  const h = c.h || 150;
  return `
    <div
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${w}px;
        height:${h}px;
        border:1px dashed #999;
        background:#eee;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        box-sizing:border-box;
        color:#666;
      "
    >
      <i class="fa-regular fa-image" style="font-size:24px; margin-bottom:5px;"></i>
      <span style="font-size:12px;">Image (${w} x ${h})</span>
    </div>
  `;
}
