 // main.js - Example usage of MinPathSum class

import MinPathSum from './minPathSum.js';

/*
Challenge: Given a matrix of integers, determine the minimum sum to reach from the top-left corner to the bottom-right corner, moving only right or down. Use dynamic programming to optimize the solution.
*/

function main() {
  const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ];
  const result = MinPathSum.minPathSum(grid);
  console.log('Minimum path sum:', result);
}

main();
