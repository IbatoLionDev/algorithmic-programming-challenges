/*
Challenge:
Given a string and a dictionary, return all possible valid sentences that can be formed using recursion with memoization.

This solution follows DRY principles and is implemented in JavaScript.
*/

import WordBreak from "./WordBreak.js";

function main() {
  const s = "catsanddog";
  const wordDict = ["cat", "cats", "and", "sand", "dog"];

  const wordBreak = new WordBreak(s, wordDict);
  const sentences = wordBreak.wordBreak();

  console.log("Possible sentences:");
  sentences.forEach((sentence) => console.log(sentence));
}

main();
