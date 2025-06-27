
/*
Challenge: Develop a function that implements the Merge Sort algorithm to sort an array.
Evaluate the efficiency of your implementation and consider cases with large arrays.
*/

// main.js - Example usage of MergeSort

import MergeSort from './mergeSort.js';

function main() {
    const sampleArray = [38, 27, 43, 3, 9, 82, 10];
    console.log("Original array:", sampleArray);
    const sortedArray = MergeSort.mergeSort(sampleArray);
    console.log("Sorted array:", sortedArray);
}

main();
