export function TitleWindow(c) {
  const w = c.w || 450;
  const h = c.h || 400;
  const text = c.properties?.text || "Title Window";
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #666; border-radius:4px; background:#fff; box-shadow:0 4px 8px rgba(0,0,0,0.1); display:flex; flex-direction:column; box-sizing:border-box; overflow:hidden;">
      <div style="background:#e9ecef; border-bottom:1px solid #ccc; padding:6px 12px; display:flex; justify-content:space-between; align-items:center; font-weight:bold; font-size:14px; user-select:none;">
        <span>${text}</span>
        <div style="display:flex; gap:5px;">
          <span style="width:12px; height:12px; border-radius:50%; background:#ff5f56; display:inline-block;"></span>
          <span style="width:12px; height:12px; border-radius:50%; background:#ffbd2e; display:inline-block;"></span>
          <span style="width:12px; height:12px; border-radius:50%; background:#27c93f; display:inline-block;"></span>
        </div>
      </div>
      <div style="flex-grow:1; position:relative; overflow:auto; padding:10px;"></div>
    </div>
  `;
}
