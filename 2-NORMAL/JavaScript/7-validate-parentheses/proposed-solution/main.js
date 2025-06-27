 // main.js - Example usage of ParenthesesValidator class

import ParenthesesValidator from './parentheses.js';

/*
Challenge: Create a function that, given a string composed of parentheses and possibly other opening and closing symbols, verifies if the sequence is valid (i.e., each open symbol has its corresponding closing symbol in the correct order). Use a stack data structure to solve it.
*/

function main() {
  const testStrings = ["()", "()[]{}", "(]", "([)]", "{[]}"];
  testStrings.forEach(s => {
    console.log(`Is '${s}' valid?`, ParenthesesValidator.isValidParentheses(s));
  });
}

main();
