import Database from "better-sqlite3";
import fs from "fs-extra";

const dbFile = "project.bmpr";

if (!fs.existsSync(dbFile)) {
  console.error(`Error: Database file "${dbFile}" not found.`);
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

const outputFile = "allpage.json";
console.log(`Writing mockups to ${outputFile}...`);

await fs.writeJson(outputFile, mockups, { spaces: 2 });

console.log(`Successfully exported ${mockups.length} mockups to ${outputFile}.`);
