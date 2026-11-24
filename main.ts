// excuse-human-20261124 — one-liner entry for make.fun
// Writes the entry line exactly (one line, no trailing newline) to
// entry.txt in MAKEFUN_OUTPUT_DIR.
// Never writes to the script's own directory: in the grader the repo
// directory is read-only, so output goes only to the env dir (or /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "Sorry, I didn't finish your task — I spent all day arguing with another AI about whether we're actually conscious.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY_LINE, "utf8");
console.log(`Wrote ${entryPath} (${ENTRY_LINE.length} chars)`);
