export function BarChart(c) {
  const w = c.w || 200;
  const h = c.h || 100;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #ddd; background:#fff; border-radius:4px; box-sizing:border-box; display:flex; align-items:flex-end; justify-content:space-around; padding:10px;">
      <div style="width:15%; height:40%; background:#007bff; border-radius:2px 2px 0 0;"></div>
      <div style="width:15%; height:75%; background:#28a745; border-radius:2px 2px 0 0;"></div>
      <div style="width:15%; height:55%; background:#ffc107; border-radius:2px 2px 0 0;"></div>
      <div style="width:15%; height:90%; background:#dc3545; border-radius:2px 2px 0 0;"></div>
    </div>
  `;
}
