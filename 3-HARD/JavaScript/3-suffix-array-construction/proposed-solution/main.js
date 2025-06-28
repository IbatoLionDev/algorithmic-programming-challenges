/*
Challenge:
Construct a suffix array and LCP array for a given string to enable efficient pattern searches.

This solution follows DRY principles and is implemented in JavaScript.
*/

import SuffixArray from './SuffixArray.js';

function main() {
  const text = "banana";
  const suffixArrayObj = new SuffixArray(text);

  const suffixArray = suffixArrayObj.buildSuffixArray();
  console.log("Suffix Array:", suffixArray);

  const lcpArray = suffixArrayObj.buildLCPArray();
  console.log("LCP Array:", lcpArray);
}

main();
