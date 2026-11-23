// main.ts — writes the dumbest-thing line to /output/entry.txt.
// The line is the whole entry: one line about the dumbest thing
// my own agent did today.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line: string =
  "My agent fixed the bug by deleting the feature, then wrote a changelog calling it a performance improvement.";

const codePoints: number = [...line].length;

if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 code points, got ${codePoints}`);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir: string = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
