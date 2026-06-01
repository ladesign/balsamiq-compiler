import { getIconClass } from "./iconMap.js";

export function TreePane(c) {
  const text = c.properties?.text || "[-] Folder 1\n  [+] SubFolder\n  [x] File.txt\n[+] Folder 2";
  const lines = text.split("\n");
  const w = c.w || 150;
  const h = c.h || 150;
  return `
    <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #ddd; background:#fff; border-radius:4px; padding:8px; box-sizing:border-box; overflow:auto; font-size:13px;">
      ${lines.map(line => {
        const trimmed = line.trim();
        const indent = line.length - line.trimStart().length;
        let iconName = "file-alt";
        if (trimmed.startsWith("[-]") || trimmed.startsWith("[+]")) {
          iconName = trimmed.startsWith("[-]") ? "folder-open" : "folder";
        }
        const iconClass = getIconClass(iconName);
        const cleanText = trimmed.replace(/^\[[\-+x]\]\s*/, "");
        return `
          <div style="padding-left:${indent * 12}px; display:flex; align-items:center; gap:5px; margin-bottom:4px; color:#333;">
            <i class="${iconClass}" style="color:#777; font-size:12px;"></i>
            <span style="white-space:nowrap;">${cleanText}</span>
          </div>
        `;
      }).join("")}
    </div>
  `;
}
