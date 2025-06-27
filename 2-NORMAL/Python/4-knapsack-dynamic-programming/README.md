# Challenge Description and Solution

## English Version

### Challenge Description
Solve the 0/1 knapsack problem using dynamic programming. Given a set of items with weights and values, determine the combination that maximizes value without exceeding the capacity.

### Code Explanation
The solution uses a 2D dynamic programming table `dp` where `dp[i][w]` represents the maximum value achievable with the first `i` items and capacity `w`.

For each item, the algorithm decides whether to include it or not based on maximizing the total value without exceeding the capacity.

### Relevant Code Snippet

```python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w - weights[i-1]], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]

    return dp[n][capacity]
```

### Historical Context
The 0/1 knapsack problem is a classic optimization problem in computer science and operations research. It models resource allocation where items cannot be divided. Dynamic programming provides an efficient solution with polynomial time complexity.

---

## Versión en Español

### Descripción del Reto
Resuelve el problema de la mochila 0/1 usando programación dinámica. Dado un conjunto de objetos con pesos y valores, determina la combinación que maximiza el valor sin exceder la capacidad.

### Explicación del Código
La solución utiliza una tabla 2D de programación dinámica `dp` donde `dp[i][w]` representa el valor máximo alcanzable con los primeros `i` objetos y capacidad `w`.

Para cada objeto, el algoritmo decide si incluirlo o no basado en maximizar el valor total sin exceder la capacidad.

### Fragmento de Código Relevante

```python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w - weights[i-1]], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]

    return dp[n][capacity]
```

### Contexto Histórico
El problema de la mochila 0/1 es un problema clásico de optimización en informática e investigación operativa. Modela la asignación de recursos donde los objetos no pueden dividirse. La programación dinámica proporciona una solución eficiente con complejidad polinómica.
