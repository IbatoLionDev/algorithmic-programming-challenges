// main.js - Example usage of mergeIntervals function

import mergeIntervals from './intervals.js';

/*
Challenge: Given a list of intervals (e.g., [[1, 3], [2, 6], [8, 10]]), implement a function that merges all overlapping intervals and returns an array with the resulting intervals.
*/

function main() {
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
  const merged = mergeIntervals(intervals);
  console.log('Merged intervals:', merged);
}

main();
