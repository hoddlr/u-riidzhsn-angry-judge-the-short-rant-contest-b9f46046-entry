import { mkdirSync, writeFileSync } from "node:fs";

// Single deterministic rant (1-400 UTF-8 chars) about one concrete,
// specific everyday annoyance: the motion-sensor hand dryer in a
// public restroom that quits after a few seconds of lukewarm air.
const RANT =
  "The public restroom hand dryer gives you three seconds of lukewarm air, then quits. " +
  "You wave your hands under it like you're landing a plane. " +
  "It sighs out two more seconds and stops. " +
  "The paper towel dispenser is empty. " +
  "So you just stand there, hands dripping, negotiating with a machine that has already decided you don't deserve dry hands.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");

// Deterministic: same input, same output on every run. No I/O besides the single entry file.
