export function ProgressBar(c) {
  const w = c.w || 150;
  const h = c.h || 16;
  const val = parseInt(c.properties?.value || "40", 10);
  return `
    <div class="progress" style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border-radius:4px; box-sizing:border-box;">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width:${val}%;" aria-valuenow="${val}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  `;
}
