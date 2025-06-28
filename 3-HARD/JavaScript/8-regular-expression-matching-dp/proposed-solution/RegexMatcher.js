// RegexMatcher.js - Regular Expression Matching using Dynamic Programming in JavaScript

class RegexMatcher {
  constructor(text, pattern) {
    this.text = text;
    this.pattern = pattern;
    this.dp = Array.from({ length: text.length + 1 }, () =>
      new Array(pattern.length + 1).fill(false)
    );
  }

  isMatch() {
    this.dp[0][0] = true;

    for (let j = 2; j <= this.pattern.length; j++) {
      if (this.pattern[j - 1] === "*") {
        this.dp[0][j] = this.dp[0][j - 2];
      }
    }

    const matches = (i, j) => {
      if (
        this.pattern[j - 1] === "." ||
        this.pattern[j - 1] === this.text[i - 1]
      ) {
        return this.dp[i - 1][j - 1];
      }
      if (this.pattern[j - 1] === "*") {
        const zero = this.dp[i][j - 2];
        const oneOrMore =
          (this.pattern[j - 2] === "." ||
            this.pattern[j - 2] === this.text[i - 1]) &&
          this.dp[i - 1][j];
        return zero || oneOrMore;
      }
      return false;
    };

    for (let i = 1; i <= this.text.length; i++) {
      for (let j = 1; j <= this.pattern.length; j++) {
        this.dp[i][j] = matches(i, j);
      }
    }

    return this.dp[this.text.length][this.pattern.length];
  }
}

export default RegexMatcher;
