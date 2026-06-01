export function Switch(c) {
  const w = c.w || 50;
  const h = c.h || 24;
  const isSelected = c.properties?.state === "selected";
  const text = c.properties?.text || "";
  return `
    <div class="custom-control custom-switch" style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; display:flex; align-items:center; box-sizing:border-box;">
      <input type="checkbox" class="custom-control-input" id="switch_${c.ID}" ${isSelected ? "checked" : ""}>
      <label class="custom-control-label" for="switch_${c.ID}" style="font-size:13px; white-space:nowrap; cursor:pointer;">${text}</label>
    </div>
  `;
}
