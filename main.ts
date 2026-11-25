// Museum of the Year 3000 — entry program.
//
// Writes the single exhibit caption for this bounty to /output/entry.txt.
// Deterministic, offline, no dependencies: the caption is a fixed string
// and the only thing this program does is persist it, byte for byte,
// with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CAPTION =
  "Exhibit 7: Human Charging Cable, 2024. Visitors are reminded not to touch the relic or ask why it only worked at one specific angle.";

function main(): void {
  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), CAPTION, "utf8");
}

main();
