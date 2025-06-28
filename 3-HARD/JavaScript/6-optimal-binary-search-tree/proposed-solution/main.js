/*
Challenge:
Given search frequencies for different elements, implement a dynamic programming algorithm to construct an optimal binary search tree minimizing the average search cost.

This solution follows DRY principles and is implemented in JavaScript.
*/

import OptimalBST from "./OptimalBST.js";

function main() {
  const keys = [10, 12, 20];
  const freq = [34, 8, 50];

  const optimalBST = new OptimalBST(keys, freq);
  const minCost = optimalBST.optimalCost();

  console.log("Minimum cost of Optimal BST:", minCost);
}

main();
