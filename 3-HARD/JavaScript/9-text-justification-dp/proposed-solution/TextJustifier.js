// TextJustifier.js - Text Justification using Dynamic Programming in JavaScript

class TextJustifier {
  constructor(words, maxWidth) {
    this.words = words;
    this.maxWidth = maxWidth;
    this.n = words.length;
    this.dp = new Array(this.n + 1).fill(Infinity);
    this.dp[this.n] = 0;
    this.breaks = new Array(this.n + 1).fill(-1);
  }

  _cost(i, j) {
    const length =
      this.words.slice(i, j + 1).reduce((acc, w) => acc + w.length, 0) +
      (j - i);
    if (length > this.maxWidth) {
      return Infinity;
    }
    return Math.pow(this.maxWidth - length, 3);
  }

  justify() {
    for (let i = this.n - 1; i >= 0; i--) {
      for (let j = i; j < this.n; j++) {
        const cost = this._cost(i, j);
        if (cost === Infinity) {
          break;
        }
        if (this.dp[j + 1] + cost < this.dp[i]) {
          this.dp[i] = this.dp[j + 1] + cost;
          this.breaks[i] = j;
        }
      }
    }

    const lines = [];
    let i = 0;
    while (i < this.n) {
      const j = this.breaks[i];
      const lineWords = this.words.slice(i, j + 1);
      const line = this._justifyLine(lineWords);
      lines.push(line);
      i = j + 1;
    }
    return lines;
  }

  _justifyLine(lineWords) {
    if (lineWords.length === 1) {
      return lineWords[0] + " ".repeat(this.maxWidth - lineWords[0].length);
    }

    const totalSpaces =
      this.maxWidth - lineWords.reduce((acc, w) => acc + w.length, 0);
    const spacesBetweenWords = lineWords.length - 1;
    const space = Math.floor(totalSpaces / spacesBetweenWords);
    const extra = totalSpaces % spacesBetweenWords;

    let line = "";
    for (let i = 0; i < lineWords.length - 1; i++) {
      line += lineWords[i] + " ".repeat(space + (i < extra ? 1 : 0));
    }
    line += lineWords[lineWords.length - 1];
    return line;
  }
}

export default TextJustifier;
