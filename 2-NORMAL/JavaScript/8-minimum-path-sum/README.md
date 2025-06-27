# Challenge Description and Solution

## English Version

### Challenge Description
Given a matrix of integers, determine the minimum sum to reach from the top-left corner to the bottom-right corner, moving only right or down. Use dynamic programming to optimize the solution.

### Code Explanation
The solution uses a 2D dynamic programming table `dp` where `dp[i][j]` represents the minimum path sum to reach cell `(i, j)`.

The first row and first column are initialized by accumulating sums from the start. For other cells, the minimum path sum is the cell's value plus the minimum of the sums from the top or left neighbor.

### Relevant Code Snippet

```javascript
function minPathSum(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  dp[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m - 1][n - 1];
}
```

### Example Usage

```javascript
import minPathSum from './minPathSum.js';

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];
const result = minPathSum(grid);
console.log('Minimum path sum:', result);
```

---

## Versión en Español

### Descripción del Reto
Dada una matriz de enteros, determina la suma mínima para llegar desde la esquina superior izquierda hasta la esquina inferior derecha, moviéndote solo a la derecha o hacia abajo. Usa programación dinámica para optimizar la solución.

### Explicación del Código
La solución utiliza una tabla 2D de programación dinámica `dp` donde `dp[i][j]` representa la suma mínima del camino para llegar a la celda `(i, j)`.

La primera fila y la primera columna se inicializan acumulando sumas desde el inicio. Para otras celdas, la suma mínima del camino es el valor de la celda más el mínimo de las sumas del vecino superior o izquierdo.

### Fragmento de Código Relevante

```javascript
function minPathSum(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  dp[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m - 1][n - 1];
}
```

### Ejemplo de Uso

```javascript
import minPathSum from './minPathSum.js';

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];
const result = minPathSum(grid);
console.log('Suma mínima del camino:', result);
