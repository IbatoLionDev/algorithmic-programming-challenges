// main.js - Example usage of wordLadder function

import wordLadder from './wordLadder.js';

/*
Challenge: Given two words (start and end) and a dictionary, implement an algorithm to find the shortest transformation sequence where each word differs by exactly one character from the previous one. This challenge requires applying search techniques like BFS.
*/

function main() {
  const beginWord = "hit";
  const endWord = "cog";
  const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  const path = wordLadder(beginWord, endWord, wordList);
  console.log("Shortest transformation sequence:", path);
}

main();
