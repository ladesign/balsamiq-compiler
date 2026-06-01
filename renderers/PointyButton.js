export function PointyButton(c) {
  const w = c.w || 100;
  const h = c.h || 24;
  const text = c.properties?.text || "Back";
  const direction = c.properties?.direction || "left";
  return `
    <button class="btn btn-primary btn-sm" style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; font-size:12px; border-radius: ${direction === "left" ? "0 4px 4px 0" : "4px 0 0 4px"}; clip-path: ${direction === "left" ? "polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0% 50%)" : "polygon(0% 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 0% 100%)"}; padding-left:${direction === "left" ? "15px" : "10px"}; padding-right:${direction === "right" ? "15px" : "10px"};">
      ${text}
    </button>
  `;
}
