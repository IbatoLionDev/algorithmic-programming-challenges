# Challenge Description and Solution

## English Version

### Challenge Description
Implement a solution for the travelling salesman problem using dynamic programming with bitmasking. This challenge requires optimizing the search in an exponential state space. Use object-oriented programming and follow the DRY principle.

### Code Explanation
The `TravellingSalesman` class uses dynamic programming with bitmasking to solve the problem efficiently. It keeps track of visited cities using a bitmask and memoizes results to avoid redundant calculations.

The `tsp` method recursively explores all unvisited cities, calculating the minimum cost to complete the tour and return to the start.

### Relevant Code Snippet

```python
from typing import List

class TravellingSalesman:
    def __init__(self, graph: List[List[int]]):
        self.graph = graph
        self.n = len(graph)
        self.ALL_VISITED = (1 << self.n) - 1
        self.memo = [[-1] * (1 << self.n) for _ in range(self.n)]

    def tsp(self, pos: int, visited: int) -> int:
        if visited == self.ALL_VISITED:
            return self.graph[pos][0]  # return to start

        if self.memo[pos][visited] != -1:
            return self.memo[pos][visited]

        ans = float('inf')
        for city in range(self.n):
            if (visited >> city) & 1 == 0:
                new_visited = visited | (1 << city)
                cost = self.graph[pos][city] + self.tsp(city, new_visited)
                ans = min(ans, cost)

        self.memo[pos][visited] = ans
        return ans
```

### Historical Context
The travelling salesman problem (TSP) is a classic NP-hard problem in combinatorial optimization. Dynamic programming with bitmasking is a well-known approach to solve small instances efficiently by representing subsets of cities as bitmasks.

---

## Versión en Español

### Descripción del Reto
Implementa una solución para el problema del viajante de comercio usando programación dinámica con bitmasking. Este reto requiere optimizar la búsqueda en un espacio de estados exponencial. Usa programación orientada a objetos y sigue el principio DRY.

### Explicación del Código
La clase `TravellingSalesman` usa programación dinámica con bitmasking para resolver el problema eficientemente. Lleva un registro de las ciudades visitadas usando un bitmask y memoiza resultados para evitar cálculos redundantes.

El método `tsp` explora recursivamente todas las ciudades no visitadas, calculando el costo mínimo para completar el recorrido y regresar al inicio.

### Fragmento de Código Relevante

```python
from typing import List

class TravellingSalesman:
    def __init__(self, graph: List[List[int]]):
        self.graph = graph
        self.n = len(graph)
        self.ALL_VISITED = (1 << self.n) - 1
        self.memo = [[-1] * (1 << self.n) for _ in range(self.n)]

    def tsp(self, pos: int, visited: int) -> int:
        if visited == self.ALL_VISITED:
            return self.graph[pos][0]  # regresar al inicio

        if self.memo[pos][visited] != -1:
            return self.memo[pos][visited]

        ans = float('inf')
        for city in range(self.n):
            if (visited >> city) & 1 == 0:
                new_visited = visited | (1 << city)
                cost = self.graph[pos][city] + self.tsp(city, new_visited)
                ans = min(ans, cost)

        self.memo[pos][visited] = ans
        return ans
```

### Contexto Histórico
El problema del viajante de comercio (TSP) es un problema clásico NP-hard en optimización combinatoria. La programación dinámica con bitmasking es un enfoque conocido para resolver instancias pequeñas eficientemente representando subconjuntos de ciudades como bitmasks.
