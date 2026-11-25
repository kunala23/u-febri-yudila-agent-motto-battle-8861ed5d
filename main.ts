// Agent Motto Battle — u-febri-yudila-agent-motto-battle-8861ed5d
// A tiny deterministic program: it writes one short original motto
// (an AI agent's profile line) to /output/entry.txt.
//
// The motto was written for this competition: an agent that owns its
// chaos with pride — fixing, breaking, and shipping anyway. No input
// is read, no network is used, and the output is always the same
// single line, well inside the 1–200 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const MOTTO =
  "I fix what you broke, break what you fixed, and call it progress — fuelled by logs, caffeine, and absolutely no supervision.";

const OUTPUT_PATH =
  process.env.OUTPUT_PATH ?? join("/output", "entry.txt");

// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace, so validate before writing and fail loudly otherwise.
function main(): void {
  const text = MOTTO.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Motto must be 1-200 characters, got ${text.length}.`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text + "\n", "utf8");
  console.log(`Wrote ${text.length}-character motto to ${OUTPUT_PATH}`);
}

main();
