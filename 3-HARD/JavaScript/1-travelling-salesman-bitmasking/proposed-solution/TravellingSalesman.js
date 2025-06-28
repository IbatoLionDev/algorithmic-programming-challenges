// TravellingSalesman.js - TSP solver using Bitmasking and Dynamic Programming with OOP and DRY principles

class TravellingSalesman {
  constructor(distanceMatrix) {
    this.distanceMatrix = distanceMatrix;
    this.n = distanceMatrix.length;
    this.memo = Array.from({ length: this.n }, () => []);
  }

  tsp(mask = 1, pos = 0) {
    if (mask === (1 << this.n) - 1) {
      return this.distanceMatrix[pos][0];
    }
    if (this.memo[pos][mask] !== undefined) {
      return this.memo[pos][mask];
    }

    let minCost = Infinity;
    for (let city = 0; city < this.n; city++) {
      if ((mask & (1 << city)) === 0) {
        const newCost =
          this.distanceMatrix[pos][city] + this.tsp(mask | (1 << city), city);
        if (newCost < minCost) {
          minCost = newCost;
        }
      }
    }
    this.memo[pos][mask] = minCost;
    return minCost;
  }
}

export default TravellingSalesman;
