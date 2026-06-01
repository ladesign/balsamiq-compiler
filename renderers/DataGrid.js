export function DataGrid(c) {
  const text = c.properties?.text || "";
  const lines = text.split("\n").filter(line => line.trim() !== "");
  const selectedIndex = parseInt(c.properties?.selectedIndex || "-1", 10);

  const w = c.w || 400;
  const h = c.h || 200;

  if (lines.length === 0) {
    return `
      <div style="position:absolute; left:${c.x}px; top:${c.y}px; width:${w}px; height:${h}px; border:1px solid #ddd; background:#fff;"></div>
    `;
  }

  const headers = lines[0].split(",").map(cell => cell.trim());

  const bodyRows = lines.slice(1).map((rowText, rowIndex) => {
    const cells = rowText.split(",").map(cell => {
      let cellText = cell.trim();
      if (cellText.startsWith("[") && cellText.endsWith("]")) {
        const linkName = cellText.slice(1, -1);
        return `<a href="#" class="btn btn-sm btn-link p-0" style="vertical-align: baseline;">${linkName}</a>`;
      }
      return cellText;
    });

    const isRowSelected = selectedIndex === rowIndex;

    const cellHtml = cells.map(cellContent => `
      <td style="padding: 6px 12px; vertical-align: middle;">${cellContent}</td>
    `).join("");

    return `
      <tr style="${isRowSelected ? "background-color: #e9ecef; font-weight: 500;" : ""}">
        ${cellHtml}
      </tr>
    `;
  }).join("\n");

  const headerHtml = headers.map(headerText => `
    <th style="padding: 8px 12px; background-color: #f8f9fa; border-bottom: 2px solid #dee2e6;">${headerText}</th>
  `).join("");

  return `
    <div
      style="
        position:absolute;
        left:${c.x}px;
        top:${c.y}px;
        width:${w}px;
        height:${h}px;
        overflow:auto;
        border:1px solid #dee2e6;
        background:#fff;
        border-radius:4px;
      "
    >
      <table class="table table-bordered table-hover table-sm m-0" style="font-size:14px; width:100%; border-collapse: collapse;">
        <thead>
          <tr>
            ${headerHtml}
          </tr>
        </thead>
        <tbody>
          ${bodyRows}
        </tbody>
      </table>
    </div>
  `;
}
