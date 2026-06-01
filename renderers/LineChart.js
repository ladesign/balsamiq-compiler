export function LineChart(c) {
  const w = c.w || 200;
  const h = c.h || 100;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #ddd; background:#fff; border-radius:4px; box-sizing:border-box; padding:5px;">
      <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
        <path d="M 10 40 L 30 20 L 50 35 L 70 10 L 90 25" fill="none" stroke="#007bff" stroke-width="2" />
        <circle cx="10" cy="40" r="2" fill="#007bff" />
        <circle cx="30" cy="20" r="2" fill="#007bff" />
        <circle cx="50" cy="35" r="2" fill="#007bff" />
        <circle cx="70" cy="10" r="2" fill="#007bff" />
        <circle cx="90" cy="25" r="2" fill="#007bff" />
        <line x1="5" y1="45" x2="95" y2="45" stroke="#ccc" stroke-dasharray="2,2" />
      </svg>
    </div>
  `;
}
