export function Arrow(c) {
  const w = c.w || 100;
  const h = c.h || 50;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; box-sizing:border-box; pointer-events:none;">
      <svg width="${w}" height="${h}" style="overflow:visible;">
        <defs>
          <marker id="arrow_${c.ID}" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#888" />
          </marker>
        </defs>
        <line x1="5" y1="${h - 5}" x2="${w - 10}" y2="5" stroke="#888" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow_${c.ID})" />
      </svg>
    </div>
  `;
}
