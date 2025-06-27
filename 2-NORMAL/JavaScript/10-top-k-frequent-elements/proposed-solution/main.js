import TopKFrequent from './topKFrequent.js';

/*
Challenge: Given an array of integers, return the k most frequent elements. Use a hashmap and a heap to optimize the solution.
*/

function main() {
  const nums = [1, 1, 1, 2, 2, 3];
  const k = 2;
  const topK = new TopKFrequent(nums, k);
  const result = topK.findTopK();
  console.log('Top k frequent elements:', result);
}

main();
