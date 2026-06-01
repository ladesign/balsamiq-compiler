import { getIconClass } from "./iconMap.js";

export function IconLabel(c) {
  const text = c.properties?.text || "Label";
  const iconName = c.properties?.icon?.ID || "circle";
  const iconClass = getIconClass(iconName);
  const w = c.w || 80;
  const h = c.h || 40;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; display:flex; flex-direction:column; align-items:center; justify-content:center; box-sizing:border-box; gap:3px;">
      <i class="${iconClass}" style="font-size:20px; color:#555;"></i>
      <span style="font-size:12px; color:#333; text-align:center; white-space:nowrap; text-overflow:ellipsis; overflow:hidden; width:100%;">${text}</span>
    </div>
  `;
}
