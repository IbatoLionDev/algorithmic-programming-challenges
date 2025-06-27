# Challenge Description and Solution

## English Version

### Challenge Description
Develop the Edmonds-Karp algorithm to calculate the maximum flow in a network. This challenge deepens advanced graph handling and data structures to improve efficiency. Use object-oriented programming and follow the DRY principle.

### Code Explanation
The `EdmondsKarp` class implements the Edmonds-Karp algorithm using a residual graph and BFS to find augmenting paths. The `max_flow` method repeatedly finds paths from source to sink with available capacity, updates the residual graph, and accumulates the flow until no more augmenting paths exist.

### Relevant Code Snippet

```python
from collections import deque
from typing import List

class EdmondsKarp:
    def __init__(self, graph: List[List[int]]):
        self.graph = graph
        self.n = len(graph)
        self.residual_graph = [row[:] for row in graph]

    def bfs(self, source: int, sink: int, parent: List[int]) -> bool:
        visited = [False] * self.n
        queue = deque([source])
        visited[source] = True

        while queue:
            u = queue.popleft()
            for v, capacity in enumerate(self.residual_graph[u]):
                if not visited[v] and capacity > 0:
                    queue.append(v)
                    visited[v] = True
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    def max_flow(self, source: int, sink: int) -> int:
        parent = [-1] * self.n
        max_flow = 0

        while self.bfs(source, sink, parent):
            path_flow = float('inf')
            s = sink
            while s != source:
                path_flow = min(path_flow, self.residual_graph[parent[s]][s])
                s = parent[s]

            max_flow += path_flow

            v = sink
            while v != source:
                u = parent[v]
                self.residual_graph[u][v] -= path_flow
                self.residual_graph[v][u] += path_flow
                v = parent[v]

        return max_flow
```

### Historical Context
The Edmonds-Karp algorithm is an implementation of the Ford-Fulkerson method for computing the maximum flow in a flow network. It uses BFS to find shortest augmenting paths, improving efficiency and guaranteeing polynomial time complexity.

---

## Versión en Español

### Descripción del Reto
Desarrolla el algoritmo de Edmonds-Karp para calcular el flujo máximo en una red. Este reto profundiza en el manejo avanzado de grafos y estructuras de datos para mejorar la eficiencia. Usa programación orientada a objetos y sigue el principio DRY.

### Explicación del Código
La clase `EdmondsKarp` implementa el algoritmo de Edmonds-Karp usando un grafo residual y BFS para encontrar caminos aumentantes. El método `max_flow` encuentra repetidamente caminos desde la fuente al sumidero con capacidad disponible, actualiza el grafo residual y acumula el flujo hasta que no existan más caminos aumentantes.

### Fragmento de Código Relevante

```python
from collections import deque
from typing import List

class EdmondsKarp:
    def __init__(self, graph: List[List[int]]):
        self.graph = graph
        self.n = len(graph)
        self.residual_graph = [row[:] for row in graph]

    def bfs(self, source: int, sink: int, parent: List[int]) -> bool:
        visited = [False] * self.n
        queue = deque([source])
        visited[source] = True

        while queue:
            u = queue.popleft()
            for v, capacity in enumerate(self.residual_graph[u]):
                if not visited[v] and capacity > 0:
                    queue.append(v)
                    visited[v] = True
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    def max_flow(self, source: int, sink: int) -> int:
        parent = [-1] * self.n
        max_flow = 0

        while self.bfs(source, sink, parent):
            path_flow = float('inf')
            s = sink
            while s != source:
                path_flow = min(path_flow, self.residual_graph[parent[s]][s])
                s = parent[s]

            max_flow += path_flow

            v = sink
            while v != source:
                u = parent[v]
                self.residual_graph[u][v] -= path_flow
                self.residual_graph[v][u] += path_flow
                v = parent[v]

        return max_flow
```

### Contexto Histórico
El algoritmo de Edmonds-Karp es una implementación del método de Ford-Fulkerson para calcular el flujo máximo en una red de flujo. Usa BFS para encontrar los caminos aumentantes más cortos, mejorando la eficiencia y garantizando complejidad polinómica.
