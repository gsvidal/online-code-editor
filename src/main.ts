import Split from "split-grid";

Split({
  columnGutters: [
    {
      track: 1,
      element: document.querySelector(".gutter-col-1") as HTMLElement,
    },
  ],
  rowGutters: [
    {
      track: 1,
      element: document.querySelector(".gutter-row-1") as HTMLElement,
    },
  ],
});

const preview = document.querySelector(".preview") as HTMLIFrameElement;
const HTMLeditor = document.querySelector(
  "#textarea-html"
) as HTMLTextAreaElement;
const CSSeditor = document.querySelector(
  "#textarea-css"
) as HTMLTextAreaElement;
const JSeditor = document.querySelector("#textarea-js") as HTMLTextAreaElement;

const consoleOutput = document.querySelector(
  ".console-output"
) as HTMLDivElement;

const editors = [HTMLeditor, CSSeditor, JSeditor];

document.addEventListener("DOMContentLoaded", () => {
  HTMLeditor.textContent = `<h1>Skyhigh2</h1>  `;
  CSSeditor.textContent = `h1 {
  color: red;
}`;
  JSeditor.textContent = 'console.log("hey you")';

  updatePreview();
});

editors.forEach((editor: HTMLTextAreaElement) => {
  editor.addEventListener("input", () => {
    updatePreview();
  });
});

const updatePreview = () => {
  const html = createPreviewDocument();
  preview.setAttribute("srcdoc", html);
};

// function handleConsoleLog(message: string, ...args: any) {
//   console.log(message);
//   console.log(args);
//   const logElement = document.createElement("p"); // Create a new element for each log message
//   logElement.textContent = `${message} ${args.join(" ")}`; // Format the log message
//   consoleOutput?.appendChild(logElement); // Add the element to the console display area
// }
// console.log = (...args) => handleConsoleLog("log:", ...args);

const createPreviewDocument = () => {
  const html = HTMLeditor.value;
  const css = CSSeditor.value;
  const js = JSeditor.value;

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Code editor</title>
      <style>
        ${css}
      </style>
    </head>
    <body>
      ${html}
      <script>
        ${js}
      </script>
      </body>
  </html>
  `;
};
