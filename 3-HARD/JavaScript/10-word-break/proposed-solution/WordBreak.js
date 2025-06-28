// WordBreak.js - Word Break problem using recursion with memoization in JavaScript

class WordBreak {
  constructor(s, wordDict) {
    this.s = s;
    this.wordDict = new Set(wordDict);
    this.memo = new Map();
  }

  wordBreak(start = 0) {
    if (start === this.s.length) {
      return [""];
    }

    if (this.memo.has(start)) {
      return this.memo.get(start);
    }

    const sentences = [];
    for (let end = start + 1; end <= this.s.length; end++) {
      const word = this.s.substring(start, end);
      if (this.wordDict.has(word)) {
        const subsentences = this.wordBreak(end);
        for (const subsentence of subsentences) {
          const sentence = word + (subsentence ? " " + subsentence : "");
          sentences.push(sentence);
        }
      }
    }

    this.memo.set(start, sentences);
    return sentences;
  }
}

export default WordBreak;
