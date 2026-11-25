// Have You Tried Turning It Off? — entry for @syukuran.
// One funny line from a hopeless tech support agent to a desperate
// customer, written to /output/entry.txt. The program is fully
// deterministic: the text is a single fixed constant, so every run
// produces byte-identical output for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

// Gate from the competition RULES.txt: /output/entry.txt must be
// UTF-8 text of 1 to 199 characters, not only whitespace, one line.
const MIN_CHARS = 1;
const MAX_CHARS = 199;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

// The entry: the agent "helps" by turning off far more than asked —
// their own machine, the customer's, the whole building — and reports
// the one upside with total cheer. The joke is the agent's uselessness,
// never the customer.
const ENTRY_LINE =
  "Let's try turning it off and on again — I just did mine, yours, and the whole building. We're both in the dark now, but at least the hold music stopped.";

function checkEntry(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  checkEntry(ENTRY_LINE);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY_LINE, "utf8");
}

main();
