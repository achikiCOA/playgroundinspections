import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const match = html.match(/<script>([\s\S]*)<\/script>\s*<\/body>/);

if (!match) {
  console.error("Could not find the inline application script in index.html.");
  process.exit(1);
}

try {
  new Function(match[1]);
  console.log("index.html inline JavaScript syntax OK");
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
