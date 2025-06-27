// longestUniqueSubstring.js - Implementation of longest unique substring using sliding window technique

class LongestUniqueSubstring {
  static lengthOfLongestSubstring(s) {
    const charIndexMap = new Map();
    let left = 0;
    let maxLength = 0;
    let maxSubstring = "";

    for (let right = 0; right < s.length; right++) {
      if (charIndexMap.has(s[right]) && charIndexMap.get(s[right]) >= left) {
        left = charIndexMap.get(s[right]) + 1;
      }
      charIndexMap.set(s[right], right);
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        maxSubstring = s.substring(left, right + 1);
      }
    }
    return { maxLength, maxSubstring };
  }
}

export default LongestUniqueSubstring;
