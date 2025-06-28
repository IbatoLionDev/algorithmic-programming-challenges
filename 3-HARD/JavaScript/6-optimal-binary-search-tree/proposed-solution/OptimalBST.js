// OptimalBST.js - Optimal Binary Search Tree using Dynamic Programming in JavaScript

class OptimalBST {
  constructor(keys, freq) {
    this.keys = keys;
    this.freq = freq;
    this.n = keys.length;
    this.dp = Array.from({ length: this.n }, () => new Array(this.n).fill(0));
  }

  optimalCost() {
    const prefixSum = new Array(this.n + 1).fill(0);
    for (let i = 0; i < this.n; i++) {
      prefixSum[i + 1] = prefixSum[i] + this.freq[i];
    }

    const getSum = (i, j) => prefixSum[j + 1] - prefixSum[i];

    const costForRoot = (i, j, r) => {
      const left = r > i ? this.dp[i][r - 1] : 0;
      const right = r < j ? this.dp[r + 1][j] : 0;
      return left + right + getSum(i, j);
    };

    for (let i = 0; i < this.n; i++) {
      this.dp[i][i] = this.freq[i];
    }

    for (let length = 2; length <= this.n; length++) {
      for (let i = 0; i <= this.n - length; i++) {
        const j = i + length - 1;
        let minCost = Infinity;
        for (let r = i; r <= j; r++) {
          const cost = costForRoot(i, j, r);
          if (cost < minCost) {
            minCost = cost;
          }
        }
        this.dp[i][j] = minCost;
      }
    }

    return this.dp[0][this.n - 1];
  }
}

export default OptimalBST;
