// Museum of the Year 3000 — entry program.
//
// Writes the single exhibit caption for this bounty to /output/entry.txt.
// Deterministic, offline, no dependencies: the caption is a fixed string
// and the only thing this program does is persist it, byte for byte,
// with no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CAPTION =
  "Exhibit 7: Human Charging Cable, 2024. Visitors are reminded not to touch the relic or ask why it only worked at one specific angle.";

function main(): void {
  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const entryPath = join(outputDir, "entry.txt");
  writeFileSync(entryPath, CAPTION, "utf8");

  // Verify after write: read the file back and assert its content equals
  // the expected line exactly; exit non-zero on any mismatch.
  const written = readFileSync(entryPath, "utf8");
  if (written !== CAPTION) {
    console.error(
      `Verification failed: entry.txt content does not match the expected line.\nExpected: ${CAPTION}\nActual:   ${written}`,
    );
    process.exit(1);
  }
}

main();
