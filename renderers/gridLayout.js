import { renderControl } from "./renderControl.js";

function isInside(child, parent) {
  const tolerance = 10;
  return (
    child.x >= parent.x - tolerance &&
    child.y >= parent.y - tolerance &&
    child.x + child.w <= parent.x + parent.w + tolerance &&
    child.y + child.h <= parent.y + parent.h + tolerance
  );
}

function stripAbsoluteStyles(html) {
  if (!html) return html;

  // 1. Remove position: absolute (case insensitive, optional trailing semicolon)
  html = html.replace(/position\s*:\s*absolute\s*;?/gi, "");

  // 2. Remove left and top styles
  html = html.replace(/left\s*:\s*-?\d+(?:\.\d+)?px\s*;?/gi, "");
  html = html.replace(/top\s*:\s*-?\d+(?:\.\d+)?px\s*;?/gi, "");

  // 3. For width, since it's now in a Bootstrap column (which determines the width),
  // we change the absolute width to "width: 100%" to fit the grid column responsively
  html = html.replace(/width\s*:\s*\d+(?:\.\d+)?px\s*;?/gi, "width:100%;");

  // 4. Clean up any double semicolons or empty style attributes
  html = html.replace(/style\s*=\s*"\s*;?\s*"/gi, "");
  html = html.replace(/;\s*;/g, ";");

  return html;
}

function extractStylesFromHtml(html, ctrlId, cssRules) {
  if (!html) return html;

  let styleCounter = 0;
  
  // Match each HTML tag
  return html.replace(/<([a-zA-Z0-9\-]+)([^>]*?)>/g, (tagMatch, tagName, attrs) => {
    // Check if this tag has a style attribute
    const styleRegex = /style\s*=\s*"([^"]*)"/i;
    const styleMatch = attrs.match(styleRegex);
    
    if (styleMatch) {
      const styleContent = styleMatch[1].trim();
      
      // Check self-closing slash
      let isSelfClosing = false;
      let cleanAttrs = attrs.trim();
      if (cleanAttrs.endsWith("/")) {
        isSelfClosing = true;
        cleanAttrs = cleanAttrs.slice(0, -1).trim();
      }

      if (styleContent) {
        // Sanitize control ID for CSS selector (letters, numbers, hyphens are safe)
        const className = `c-${ctrlId}-${styleCounter++}`.replace(/[^a-zA-Z0-9\-]/g, "_");
        
        // Save style rule
        cssRules.push(`.${className} { ${styleContent} }`);
        
        // Remove style attribute
        let newAttrs = cleanAttrs.replace(styleRegex, "");
        
        // Check existing class
        const classRegex = /class\s*=\s*"([^"]*)"/i;
        const classMatch = cleanAttrs.match(classRegex);
        
        if (classMatch) {
          const existingClass = classMatch[1];
          newAttrs = newAttrs.replace(classRegex, `class="${existingClass} ${className}"`);
        } else {
          newAttrs = `${newAttrs} class="${className}"`;
        }
        
        newAttrs = newAttrs.replace(/\s+/g, " ").trim();
        return `<${tagName} ${newAttrs}${isSelfClosing ? " /" : ""}>`;
      } else {
        let newAttrs = cleanAttrs.replace(styleRegex, "").replace(/\s+/g, " ").trim();
        return `<${tagName} ${newAttrs}${isSelfClosing ? " /" : ""}>`;
      }
    }
    
    return tagMatch;
  });
}

export function getGridLayoutHtml(controlList, W_total) {
  const widthVal = W_total || 1200;
  const cssRules = [];

  // 1. Normalize coordinates to Numbers and filter out BrowserWindow
  const normalizedControls = controlList
    .map(ctrl => {
      return {
        ...ctrl,
        x: parseInt(ctrl.x || 0, 10),
        y: parseInt(ctrl.y || 0, 10),
        w: parseInt(ctrl.w || ctrl.measuredW || 100, 10),
        h: parseInt(ctrl.h || ctrl.measuredH || 30, 10)
      };
    })
    .filter(ctrl => ctrl.typeID !== "BrowserWindow");

  if (normalizedControls.length === 0) {
    return { html: "", css: "" };
  }

  // 2. Separate FieldSets and other controls
  const fieldSets = normalizedControls.filter(ctrl => ctrl.typeID === "FieldSet");
  const otherControls = normalizedControls.filter(ctrl => ctrl.typeID !== "FieldSet");

  // 3. Build containment map
  const sortedFieldSets = [...fieldSets].sort((a, b) => (a.w * a.h) - (b.w * b.h));

  const parentMap = new Map();
  const childrenMap = new Map();

  for (const fs of sortedFieldSets) {
    childrenMap.set(fs.ID, []);
  }

  const allCandidates = [...otherControls, ...fieldSets];
  for (const candidate of allCandidates) {
    for (const fs of sortedFieldSets) {
      if (fs.ID !== candidate.ID && isInside(candidate, fs)) {
        parentMap.set(candidate.ID, fs);
        childrenMap.get(fs.ID).push(candidate);
        break;
      }
    }
  }

  // 4. Filter top-level controls
  const topLevelControls = normalizedControls.filter(ctrl => !parentMap.has(ctrl.ID));

  // Helper function to recursively generate HTML for a list of controls
  function generateGrid(controls, totalWidth, offsetContainerX = 0, offsetContainerY = 0) {
    if (controls.length === 0) return "";

    // Sort controls by Y coordinate
    controls.sort((a, b) => a.y - b.y);

    // Group controls into horizontal rows based on vertical overlap
    const rows = [];
    for (const c of controls) {
      const h = c.h;
      const y = c.y;
      
      let bestRow = null;
      let maxOverlap = 0;
      
      for (const r of rows) {
        const overlap = Math.max(0, Math.min(r.maxY, y + h) - Math.max(r.minY, y));
        if (overlap > 0) {
          const minH = Math.min(r.maxY - r.minY, h);
          if (overlap > minH * 0.3 && overlap > maxOverlap) {
            maxOverlap = overlap;
            bestRow = r;
          }
        }
      }
      
      if (bestRow) {
        bestRow.controls.push(c);
        bestRow.minY = Math.min(bestRow.minY, y);
        bestRow.maxY = Math.max(bestRow.maxY, y + h);
      } else {
        rows.push({
          minY: y,
          maxY: y + h,
          controls: [c]
        });
      }
    }

    // Sort rows vertically and their controls horizontally (left to right)
    rows.sort((a, b) => a.minY - b.minY);
    for (const r of rows) {
      r.controls.sort((a, b) => a.x - b.x);
    }

    // Map each clustered row into 12 Bootstrap grid columns
    const W_unit = totalWidth / 12;
    const gridHtmlRows = [];

    for (const row of rows) {
      let currentX = 0;
      let currentRowCols = [];

      for (const ctrl of row.controls) {
        const relX = Math.max(0, ctrl.x - offsetContainerX);
        
        let colStart = Math.round(relX / W_unit);
        let colEnd = Math.round((relX + ctrl.w) / W_unit);

        colStart = Math.max(0, Math.min(11, colStart));
        colEnd = Math.max(1, Math.min(12, colEnd));
        let span = Math.max(1, colEnd - colStart);

        if (colStart < currentX) {
          colStart = currentX;
        }

        if (colStart + span > 12) {
          if (currentRowCols.length > 0) {
            gridHtmlRows.push(`<div class="row mb-4">${currentRowCols.join("\n")}</div>`);
          }
          currentRowCols = [];
          currentX = 0;
          
          colStart = 0;
          colEnd = Math.min(12, colStart + span);
          span = Math.max(1, colEnd - colStart);
        }

        const offset = colStart - currentX;
        let colClass = `col-md-${span}`;
        if (offset > 0) {
          colClass += ` offset-md-${offset}`;
        }

        let ctrlHtml = "";
        if (ctrl.typeID === "FieldSet") {
          const children = childrenMap.get(ctrl.ID) || [];
          const childrenGridHtml = generateGrid(children, ctrl.w, ctrl.x, ctrl.y);
          
          ctrl.childrenHtml = childrenGridHtml;
          ctrlHtml = renderControl(ctrl);
          ctrlHtml = ctrlHtml.replace(/height\s*:\s*\d+(?:\.\d+)?px\s*;?/gi, "");
        } else {
          ctrlHtml = renderControl(ctrl);
        }

        ctrlHtml = stripAbsoluteStyles(ctrlHtml);
        ctrlHtml = extractStylesFromHtml(ctrlHtml, ctrl.ID, cssRules);

        if (ctrlHtml && ctrlHtml.trim()) {
          currentRowCols.push(`  <div class="${colClass}">\n    ${ctrlHtml.trim()}\n  </div>`);
          currentX = colStart + span;
        }
      }

      if (currentRowCols.length > 0) {
        gridHtmlRows.push(`<div class="row mb-4">${currentRowCols.join("\n")}</div>`);
      }
    }

    return gridHtmlRows.join("\n");
  }

  const gridHtml = generateGrid(topLevelControls, widthVal);

  return {
    html: gridHtml,
    css: cssRules.join("\n")
  };
}
