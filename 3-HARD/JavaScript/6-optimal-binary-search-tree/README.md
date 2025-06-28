# Optimal Binary Search Tree

## English

The optimal binary search tree problem is a classic dynamic programming problem that aims to minimize the expected search cost based on access frequencies. It has applications in compiler design and database indexing.

This challenge involves implementing a dynamic programming algorithm to construct an optimal binary search tree minimizing the average search cost.

### Relevant Code Snippet

```javascript
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
```

### History

The optimal binary search tree problem has been widely studied in computer science and has practical applications in compiler design and database indexing.

---

## Español

Árbol Binario de Búsqueda Óptimo

El problema del árbol binario de búsqueda óptimo es un problema clásico de programación dinámica que busca minimizar el costo esperado de búsqueda basado en las frecuencias de acceso. Tiene aplicaciones en diseño de compiladores e indexación de bases de datos.

Este reto consiste en implementar un algoritmo de programación dinámica para construir un árbol binario de búsqueda óptimo que minimice el costo promedio de búsqueda.

### Fragmento de Código Relevante

```javascript
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
```

### Historia

El problema del árbol binario de búsqueda óptimo ha sido ampliamente estudiado en ciencias de la computación y tiene aplicaciones prácticas en diseño de compiladores e indexación de bases de datos.
