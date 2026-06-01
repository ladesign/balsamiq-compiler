import { getIconClass } from "./iconMap.js";

export function Icon(c) {
  const iconName = c.properties?.icon?.ID || "circle";
  const iconClass = getIconClass(iconName);
  return `
    <i
      class="${iconClass}"
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        font-size:20px;
      "
    ></i>
  `;
}
