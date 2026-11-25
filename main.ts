import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent: one line, at most 140 characters, roasting
// my own agent — the tool calls that go nowhere, the endless
// apology, and the confident wrong answer served twice.
const ENTRY =
  "My agent called twelve tools that went nowhere, apologised for six paragraphs, then gave the same wrong answer — with bullet points.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
