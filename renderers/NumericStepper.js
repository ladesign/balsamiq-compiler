export function NumericStepper(c) {
  const w = c.w || 60;
  const h = c.h || 24;
  const text = c.properties?.text || "1";
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; display:flex; border:1px solid #ced4da; border-radius:4px; background:#fff; overflow:hidden; box-sizing:border-box;">
      <span style="flex-grow:1; font-size:13px; display:flex; align-items:center; padding:0 6px; color:#495057;">${text}</span>
      <div style="display:flex; flex-direction:column; border-left:1px solid #ced4da; width:16px;">
        <div style="flex:1; display:flex; align-items:center; justify-content:center; background:#f8f9fa; cursor:pointer; font-size:8px; border-bottom:1px solid #ced4da;"><i class="fa-solid fa-chevron-up"></i></div>
        <div style="flex:1; display:flex; align-items:center; justify-content:center; background:#f8f9fa; cursor:pointer; font-size:8px;"><i class="fa-solid fa-chevron-down"></i></div>
      </div>
    </div>
  `;
}
