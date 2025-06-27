class ParenthesesValidator {
  static isValidParentheses(s) {
    const stack = [];
    const mapping = { ')': '(', ']': '[', '}': '{' };

    for (const char of s) {
      if (Object.values(mapping).includes(char)) {
        stack.push(char);
      } else if (char in mapping) {
        if (stack.length === 0 || stack.pop() !== mapping[char]) {
          return false;
        }
      } else {
        // Ignore other characters
        continue;
      }
    }

    return stack.length === 0;
  }
}

export default ParenthesesValidator;
