// SuffixArray.js - Suffix Array and LCP Array construction in JavaScript

class SuffixArray {
  constructor(text) {
    this.text = text;
    this.n = text.length;
    this.suffixArray = [];
    this.lcpArray = [];
  }

  buildSuffixArray() {
    this.suffixArray = Array.from({ length: this.n }, (_, i) => i);
    this.suffixArray.sort((a, b) => {
      const substrA = this.text.substring(a);
      const substrB = this.text.substring(b);
      if (substrA < substrB) return -1;
      if (substrA > substrB) return 1;
      return 0;
    });
    return this.suffixArray;
  }

  buildLCPArray() {
    if (this.suffixArray.length === 0) {
      this.buildSuffixArray();
    }

    this.lcpArray = new Array(this.n).fill(0);
    const invSuffix = new Array(this.n);

    for (let i = 0; i < this.n; i++) {
      invSuffix[this.suffixArray[i]] = i;
    }

    let k = 0;
    for (let i = 0; i < this.n; i++) {
      if (invSuffix[i] === this.n - 1) {
        k = 0;
        continue;
      }
      const j = this.suffixArray[invSuffix[i] + 1];
      while (i + k < this.n && j + k < this.n && this.text[i + k] === this.text[j + k]) {
        k++;
      }
      this.lcpArray[invSuffix[i]] = k;
      if (k > 0) k--;
    }

    return this.lcpArray;
  }
}

export default SuffixArray;
