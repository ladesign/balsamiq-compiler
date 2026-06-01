import { getIconClass } from "./iconMap.js";

export function RoundButton(c) {
  const w = c.w || 32;
  const h = c.h || 32;
  const text = c.properties?.text || "";
  const iconName = c.properties?.icon?.ID;
  const iconClass = iconName ? getIconClass(iconName) : "";
  return `
    <button class="btn btn-outline-secondary" style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border-radius:50%; display:flex; align-items:center; justify-content:center; padding:0; font-size:12px; box-sizing:border-box;">
      ${iconName ? `<i class="${iconClass}"></i>` : text}
    </button>
  `;
}
