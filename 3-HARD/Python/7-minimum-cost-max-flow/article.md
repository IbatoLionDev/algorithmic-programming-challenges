# Challenge Description and Solution

## English Version

### Challenge Description
Combine maximum flow and cost optimization concepts to implement an algorithm that finds the maximum flow with the minimum cost in a network. This is a classic combinatorial optimization challenge. Use object-oriented programming and follow the DRY principle.

### Code Explanation
The `MinCostMaxFlow` class implements the minimum cost maximum flow algorithm using the Bellman-Ford algorithm to find shortest augmenting paths with respect to cost.

Key methods:
- `add_edge`: Adds edges to the graph with capacity and cost.
- `bellman_ford`: Finds shortest paths from source to all nodes considering edge costs.
- `min_cost_max_flow`: Repeatedly finds augmenting paths to increase flow while minimizing cost.

### Relevant Code Snippet

```python
from collections import deque
from typing import List, Tuple

class MinCostMaxFlow:
    def __init__(self, n: int):
        self.n = n
        self.graph = [[] for _ in range(n)]

    def add_edge(self, u: int, v: int, capacity: int, cost: int):
        self.graph[u].append([v, capacity, cost, len(self.graph[v])])
        self.graph[v].append([u, 0, -cost, len(self.graph[u]) - 1])

    def bellman_ford(self, source: int, dist: List[int], parent: List[Tuple[int, int]]):
        dist[:] = [float('inf')] * self.n
        dist[source] = 0
        in_queue = [False] * self.n
        queue = deque([source])
        in_queue[source] = True

        while queue:
            u = queue.popleft()
            in_queue[u] = False
            for i, (v, capacity, cost, rev) in enumerate(self.graph[u]):
                if capacity > 0 and dist[u] + cost < dist[v]:
                    dist[v] = dist[u] + cost
                    parent[v] = (u, i)
                    if not in_queue[v]:
                        queue.append(v)
                        in_queue[v] = True

    def min_cost_max_flow(self, source: int, sink: int) -> Tuple[int, int]:
        flow = 0
        cost = 0
        dist = [0] * self.n
        parent = [(-1, -1)] * self.n

        while True:
            self.bellman_ford(source, dist, parent)
            if dist[sink] == float('inf'):
                break

            path_flow = float('inf')
            v = sink
            while v != source:
                u, i = parent[v]
                path_flow = min(path_flow, self.graph[u][i][1])
                v = u

            flow += path_flow
            cost += path_flow * dist[sink]

            v = sink
            while v != source:
                u, i = parent[v]
                self.graph[u][i][1] -= path_flow
                rev = self.graph[u][i][3]
                self.graph[v][rev][1] += path_flow
                v = u

        return flow, cost
```

### Historical Context
The minimum cost maximum flow problem is a fundamental problem in network flow theory, combining flow maximization with cost minimization. The Bellman-Ford algorithm is used to find shortest paths in graphs with negative edge weights, enabling efficient cost optimization.

---

## Versión en Español

### Descripción del Reto
Combina conceptos de flujo máximo y optimización de costos para implementar un algoritmo que encuentre el flujo máximo con el costo mínimo en una red. Este es un reto clásico de optimización combinatoria. Usa programación orientada a objetos y sigue el principio DRY.

### Explicación del Código
La clase `MinCostMaxFlow` implementa el algoritmo de flujo máximo de costo mínimo usando el algoritmo de Bellman-Ford para encontrar caminos aumentantes más cortos respecto al costo.

Métodos clave:
- `add_edge`: Añade aristas al grafo con capacidad y costo.
- `bellman_ford`: Encuentra caminos más cortos desde la fuente a todos los nodos considerando los costos de las aristas.
- `min_cost_max_flow`: Encuentra repetidamente caminos aumentantes para incrementar el flujo mientras minimiza el costo.

### Fragmento de Código Relevante

```python
from collections import deque
from typing import List, Tuple

class MinCostMaxFlow:
    def __init__(self, n: int):
        self.n = n
        self.graph = [[] for _ in range(n)]

    def add_edge(self, u: int, v: int, capacity: int, cost: int):
        self.graph[u].append([v, capacity, cost, len(self.graph[v])])
        self.graph[v].append([u, 0, -cost, len(self.graph[u]) - 1])

    def bellman_ford(self, source: int, dist: List[int], parent: List[Tuple[int, int]]):
        dist[:] = [float('inf')] * self.n
        dist[source] = 0
        in_queue = [False] * self.n
        queue = deque([source])
        in_queue[source] = True

        while queue:
            u = queue.popleft()
            in_queue[u] = False
            for i, (v, capacity, cost, rev) in enumerate(self.graph[u]):
                if capacity > 0 and dist[u] + cost < dist[v]:
                    dist[v] = dist[u] + cost
                    parent[v] = (u, i)
                    if not in_queue[v]:
                        queue.append(v)
                        in_queue[v] = True

    def min_cost_max_flow(self, source: int, sink: int) -> Tuple[int, int]:
        flow = 0
        cost = 0
        dist = [0] * self.n
        parent = [(-1, -1)] * self.n

        while True:
            self.bellman_ford(source, dist, parent)
            if dist[sink] == float('inf'):
                break

            path_flow = float('inf')
            v = sink
            while v != source:
                u, i = parent[v]
                path_flow = min(path_flow, self.graph[u][i][1])
                v = u

            flow += path_flow
            cost += path_flow * dist[sink]

            v = sink
            while v != source:
                u, i = parent[v]
                self.graph[u][i][1] -= path_flow
                rev = self.graph[u][i][3]
                self.graph[v][rev][1] += path_flow
                v = u

        return flow, cost
```

### Contexto Histórico
El problema de flujo máximo de costo mínimo es un problema fundamental en la teoría de flujos en redes, que combina la maximización del flujo con la minimización del costo. El algoritmo de Bellman-Ford se usa para encontrar caminos más cortos en grafos con pesos negativos, permitiendo una optimización eficiente del costo.
