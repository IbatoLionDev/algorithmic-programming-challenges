/*
Challenge: Given a string, find the length of the longest substring without repeating characters.
Use sliding window techniques to optimize the solution's performance.
*/

// main.js - Example usage of LongestUniqueSubstring

import LongestUniqueSubstring from './longestUniqueSubstring.js';


function main() {
    const testString = "abcabcbb";
    const { maxLength, maxSubstring } = LongestUniqueSubstring.lengthOfLongestSubstring(testString);
    console.log(`Length of longest substring without repeating characters: ${maxLength}`);
    console.log(`Longest substring without repeating characters: ${maxSubstring}`);
}

main();
