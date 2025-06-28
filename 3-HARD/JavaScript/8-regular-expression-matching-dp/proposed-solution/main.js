/*
Challenge:
Design a regular expression matching engine that supports special characters like '.' and '*', using dynamic programming techniques to efficiently handle branching and backtracking.

This solution follows DRY principles and is implemented in JavaScript.
*/

import RegexMatcher from "./RegexMatcher.js";

function main() {
  const text = "aab";
  const pattern = "c*a*b";

  const matcher = new RegexMatcher(text, pattern);
  const result = matcher.isMatch();

  console.log(
    `Does the text "${text}" match the pattern "${pattern}"?`,
    result
  );
}

main();
