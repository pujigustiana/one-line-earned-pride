// One line of earned pride: a baker's first loaf from an oven she
// built herself from scrap — a long effort landing in one quiet image.
import { mkdirSync, writeFileSync } from "node:fs";
const parts = [
  "At midnight, Mara pulled her first loaf from the oven",
  " she'd built from scrap, and it sang.",
];
const line = parts.join("");
const dest = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(dest, line, "utf8");
console.log("entry.txt done: " + line.length + " characters in one line.");
