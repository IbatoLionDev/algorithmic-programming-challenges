# Challenge Description and Solution

## English Version

### Challenge Description
Given a matrix of integers, determine the minimum sum to reach from the top-left corner to the bottom-right corner, moving only right or down. Use dynamic programming to optimize the solution.

### Code Explanation
The solution uses a 2D dynamic programming table `dp` where `dp[i][j]` represents the minimum path sum to reach cell `(i, j)`.

The first row and first column are initialized by accumulating sums from the start. For other cells, the minimum path sum is the cell's value plus the minimum of the sums from the top or left neighbor.

### Relevant Code Snippet

```python
def min_path_sum(grid):
    if not grid or not grid[0]:
        return 0

    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]

    dp[0][0] = grid[0][0]

    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]

    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]

    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

    return dp[m-1][n-1]
```

### Historical Context
The minimum path sum problem is a classic example of dynamic programming, illustrating how to break down a problem into overlapping subproblems and build up solutions efficiently. It has applications in robotics, pathfinding, and grid-based games.

---

## Versión en Español

### Descripción del Reto
Dada una matriz de enteros, determina la suma mínima para llegar desde la esquina superior izquierda hasta la esquina inferior derecha, moviéndote solo a la derecha o hacia abajo. Usa programación dinámica para optimizar la solución.

### Explicación del Código
La solución utiliza una tabla 2D de programación dinámica `dp` donde `dp[i][j]` representa la suma mínima del camino para llegar a la celda `(i, j)`.

La primera fila y la primera columna se inicializan acumulando sumas desde el inicio. Para otras celdas, la suma mínima del camino es el valor de la celda más el mínimo de las sumas del vecino superior o izquierdo.

### Fragmento de Código Relevante

```python
def min_path_sum(grid):
    if not grid or not grid[0]:
        return 0

    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]

    dp[0][0] = grid[0][0]

    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]

    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]

    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

    return dp[m-1][n-1]
```

### Contexto Histórico
El problema de la suma mínima de camino es un ejemplo clásico de programación dinámica, que ilustra cómo descomponer un problema en subproblemas superpuestos y construir soluciones de manera eficiente. Tiene aplicaciones en robótica, búsqueda de caminos y juegos basados en cuadrículas.
