export function BrowserWindow(c) {
  return `
    <div
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${c.w || 800}px;
        height:${c.h || 600}px;
        border:1px solid #999;
        background:#fff;
        border-radius:6px;
      "
    >
      <div
        style="
          background:#f3f3f3;
          padding:8px;
          border-bottom:1px solid #ccc;
          font-size:14px;
        "
      >
        Browser Window
      </div>
    </div>
  `;
}
