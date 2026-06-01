import { getGridLayoutHtml } from "./gridLayout.js";

export function renderPage(mockup) {
  let controlList = [];
  if (mockup && mockup.controls && mockup.controls.control) {
    if (Array.isArray(mockup.controls.control)) {
      controlList = mockup.controls.control;
    } else {
      controlList = [mockup.controls.control];
    }
  }

  const width = mockup?.mockupW || 1200;
  const { html: gridHtml, css: gridCss } = getGridLayoutHtml(controlList, width);

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Balsamiq Rendered Page</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/v4-shims.min.css"
  />
  <style>
    body {
      background: #fafafa;
      font-family: Arial, sans-serif;
    }
    ${gridCss}
  </style>
</head>
<body>
  <div class="container py-5">
    ${gridHtml}
  </div>
</body>
</html>
`;
}
