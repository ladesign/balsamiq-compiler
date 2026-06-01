import Database from "better-sqlite3";
import fs from "fs-extra";
import { renderPage } from "./renderers/renderPage.js";
import path from "path";

const dbFile = "project.bmpr";

if (!fs.existsSync(dbFile)) {
  console.error(`Error: Database file "${dbFile}" not found.`);
  console.error("Please place your Balsamiq project file named 'project.bmpr' in the root directory and run again.");
  process.exit(1);
}

console.log(`Reading project file: ${dbFile}...`);
const db = new Database(dbFile);

const rows = db.prepare(`
  SELECT ATTRIBUTES, DATA
  FROM RESOURCES
`).all();

const mockups = [];

for (const row of rows) {
  try {
    const attrs = JSON.parse(row.ATTRIBUTES);
    const data = JSON.parse(row.DATA);

    if (data && data.mockup) {
      mockups.push({
        name: attrs.name,
        mockup: data.mockup
      });
    }
  } catch (err) {
    // Ignore rows that don't match our criteria or fail parsing
  }
}

if (mockups.length === 0) {
  console.warn("No mockups found in the resources database.");
  process.exit(0);
}

await fs.ensureDir("dist");

for (const page of mockups) {
  const html = renderPage(page.mockup);
  const filename = page.name.replace(/\s+/g, "_");

  await fs.writeFile(
    `dist/${filename}.html`,
    html
  );

  console.log("Generated:", `dist/${filename}.html`);
}

console.log(`Successfully compiled ${mockups.length} mockups.`);
