/*
Challenge:
Implement a segment tree with lazy propagation to support efficient range queries and updates.

This solution follows DRY principles and is implemented in JavaScript.
*/

import SegmentTree from "./SegmentTree.js";

function main() {
  const data = [1, 3, 5, 7, 9, 11];
  const segTree = new SegmentTree(data);

  console.log("Initial sum of range [1, 3]:", segTree.queryRange(1, 3)); // 3 + 5 + 7 = 15

  segTree.updateRange(1, 5, 10); // Add 10 to elements from index 1 to 5

  console.log("Sum of range [1, 3] after update:", segTree.queryRange(1, 3)); // (3+10) + (5+10) + (7+10) = 45
}

main();
