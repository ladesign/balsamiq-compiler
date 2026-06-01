export function PieChart(c) {
  const w = c.w || 100;
  const h = c.h || 100;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; display:flex; align-items:center; justify-content:center; box-sizing:border-box;">
      <svg width="${w}" height="${h}" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#f8f9fa" stroke="#666" stroke-width="2" />
        <path d="M 50 50 L 50 10 A 40 40 0 0 1 90 50 Z" fill="#ccc" stroke="#666" stroke-width="1" />
        <path d="M 50 50 L 90 50 A 40 40 0 0 1 50 90 Z" fill="#999" stroke="#666" stroke-width="1" />
      </svg>
    </div>
  `;
}
