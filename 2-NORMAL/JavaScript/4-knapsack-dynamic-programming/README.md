# Challenge Description and Solution

## English Version

### Challenge Description
Solve the 0/1 knapsack problem using dynamic programming. Given a set of items with weights and values, determine the combination that maximizes value without exceeding the capacity.

### Code Explanation
The solution uses a 2D dynamic programming table `dp` where `dp[i][w]` represents the maximum value achievable with the first `i` items and capacity `w`.

For each item, the algorithm decides whether to include it or not based on maximizing the total value without exceeding the capacity.

### Relevant Code Snippet

```javascript
class Knapsack {
    static knapsack(weights, values, capacity) {
        const n = weights.length;
        const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

        for (let i = 1; i <= n; i++) {
            for (let w = 0; w <= capacity; w++) {
                if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(
                        values[i - 1] + dp[i - 1][w - weights[i - 1]],
                        dp[i - 1][w]
                    );
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        return dp[n][capacity];
    }
}
```

### Example Usage

```javascript
import Knapsack from './knapsack.js';

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
const maxValue = Knapsack.knapsack(weights, values, capacity);
console.log(`Maximum value in knapsack with capacity ${capacity}: ${maxValue}`);
```

---

## Versión en Español

### Descripción del Reto
Resuelve el problema de la mochila 0/1 usando programación dinámica. Dado un conjunto de objetos con pesos y valores, determina la combinación que maximiza el valor sin exceder la capacidad.

### Explicación del Código
La solución utiliza una tabla 2D de programación dinámica `dp` donde `dp[i][w]` representa el valor máximo alcanzable con los primeros `i` objetos y capacidad `w`.

Para cada objeto, el algoritmo decide si incluirlo o no basado en maximizar el valor total sin exceder la capacidad.

### Fragmento de Código Relevante

```javascript
class Knapsack {
    static knapsack(weights, values, capacity) {
        const n = weights.length;
        const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

        for (let i = 1; i <= n; i++) {
            for (let w = 0; w <= capacity; w++) {
                if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(
                        values[i - 1] + dp[i - 1][w - weights[i - 1]],
                        dp[i - 1][w]
                    );
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        return dp[n][capacity];
    }
}
```

### Ejemplo de Uso

```javascript
import Knapsack from './knapsack.js';

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
const maxValue = Knapsack.knapsack(weights, values, capacity);
console.log(`Valor máximo en la mochila con capacidad ${capacity}: ${maxValue}`);
