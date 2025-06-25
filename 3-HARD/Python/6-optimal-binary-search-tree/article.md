# Challenge Description and Solution

## English Version

### Challenge Description
Given search frequencies for different elements, implement a dynamic programming algorithm to construct an optimal binary search tree minimizing the average search cost. Use object-oriented programming and follow the DRY principle.

### Code Explanation
The `OptimalBST` class uses dynamic programming to compute the minimum cost of searching in a binary search tree constructed from given keys and their search frequencies.

Key points:
- `dp[i][j]` stores the minimum cost of the BST that can be built from keys i to j.
- The cost for each root is calculated by summing the cost of left and right subtrees plus the sum of frequencies in the range.
- The algorithm tries all possible roots for each subtree and picks the minimum cost.

### Relevant Code Snippet

```python
from typing import List

class OptimalBST:
    def __init__(self, keys: List[int], freq: List[int]):
        self.keys = keys
        self.freq = freq
        self.n = len(keys)
        self.dp = [[0] * self.n for _ in range(self.n)]

    def optimal_cost(self) -> int:
        prefix_sum = [0] * (self.n + 1)
        for i in range(self.n):
            prefix_sum[i + 1] = prefix_sum[i] + self.freq[i]

        def get_sum(i, j):
            return prefix_sum[j + 1] - prefix_sum[i]

        def cost_for_root(i, j, r):
            left = self.dp[i][r - 1] if r > i else 0
            right = self.dp[r + 1][j] if r < j else 0
            return left + right + get_sum(i, j)

        for i in range(self.n):
            self.dp[i][i] = self.freq[i]

        for length in range(2, self.n + 1):
            for i in range(self.n - length + 1):
                j = i + length - 1
                self.dp[i][j] = min(
                    cost_for_root(i, j, r) for r in range(i, j + 1)
                )

        return self.dp[0][self.n - 1]
```

### Historical Context
The optimal binary search tree problem is a classic dynamic programming problem that aims to minimize the expected search cost based on access frequencies. It has applications in compiler design and database indexing.

---

## Versión en Español

### Descripción del Reto
Dadas las frecuencias de búsqueda para diferentes elementos, implementa un algoritmo de programación dinámica para construir un árbol binario de búsqueda óptimo que minimice el costo promedio de búsqueda. Usa programación orientada a objetos y sigue el principio DRY.

### Explicación del Código
La clase `OptimalBST` usa programación dinámica para calcular el costo mínimo del árbol binario de búsqueda construido a partir de las claves y sus frecuencias de búsqueda.

Puntos clave:
- `dp[i][j]` almacena el costo mínimo del árbol BST que se puede construir con las claves de i a j.
- El costo para cada raíz se calcula sumando el costo de los subárboles izquierdo y derecho más la suma de frecuencias en el rango.
- El algoritmo prueba todas las raíces posibles para cada subárbol y elige el costo mínimo.

### Fragmento de Código Relevante

```python
from typing import List

class OptimalBST:
    def __init__(self, keys: List[int], freq: List[int]):
        self.keys = keys
        self.freq = freq
        self.n = len(keys)
        self.dp = [[0] * self.n for _ in range(self.n)]

    def optimal_cost(self) -> int:
        prefix_sum = [0] * (self.n + 1)
        for i in range(self.n):
            prefix_sum[i + 1] = prefix_sum[i] + self.freq[i]

        def get_sum(i, j):
            return prefix_sum[j + 1] - prefix_sum[i]

        def cost_for_root(i, j, r):
            left = self.dp[i][r - 1] if r > i else 0
            right = self.dp[r + 1][j] if r < j else 0
            return left + right + get_sum(i, j)

        for i in range(self.n):
            self.dp[i][i] = self.freq[i]

        for length in range(2, self.n + 1):
            for i in range(self.n - length + 1):
                j = i + length - 1
                self.dp[i][j] = min(
                    cost_for_root(i, j, r) for r in range(i, j + 1)
                )

        return self.dp[0][self.n - 1]
```

### Contexto Histórico
El problema del árbol binario de búsqueda óptimo es un problema clásico de programación dinámica que busca minimizar el costo esperado de búsqueda basado en las frecuencias de acceso. Tiene aplicaciones en diseño de compiladores e indexación de bases de datos.
