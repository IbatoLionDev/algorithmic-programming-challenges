/*
Challenge:
Given a set of words and a maximum width, implement a dynamic programming algorithm to justify text optimally, minimizing penalties for irregular spaces.

This solution follows DRY principles and is implemented in JavaScript.
*/

import TextJustifier from "./TextJustifier.js";

function main() {
  const words = ["This", "is", "an", "example", "of", "text", "justification."];
  const maxWidth = 16;

  const justifier = new TextJustifier(words, maxWidth);
  const justifiedLines = justifier.justify();

  console.log("Justified Text:");
  justifiedLines.forEach((line) => console.log(`"${line}"`));
}

main();
