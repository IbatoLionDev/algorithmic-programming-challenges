# Challenge Description and Solution

## English Version

### Challenge Description
Implement breadth-first search (BFS) and depth-first search (DFS) algorithms to traverse a graph represented by adjacency lists. Ensure coverage of both connected and disconnected graphs.

### Code Explanation
The `Graph` class represents an undirected graph using adjacency lists. It supports:
- `add_edge(u, v)`: Adds an undirected edge between vertices `u` and `v`.
- `bfs(start)`: Performs BFS traversal starting from a given vertex.
- `dfs(start)`: Performs DFS traversal starting from a given vertex.
- `bfs_disconnected()`: Performs BFS traversal covering all vertices, including disconnected components.
- `dfs_disconnected()`: Performs DFS traversal covering all vertices, including disconnected components.

### Relevant Code Snippet

```python
from collections import deque

class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.adj = [[] for _ in range(vertices)]

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)  # Assuming undirected graph

    def bfs(self, start):
        visited = [False] * self.V
        queue = deque([start])
        visited[start] = True
        result = []

        while queue:
            vertex = queue.popleft()
            result.append(vertex)
            for neighbor in self.adj[vertex]:
                if not visited[neighbor]:
                    visited[neighbor] = True
                    queue.append(neighbor)
        return result

    def dfs_util(self, v, visited, result):
        visited[v] = True
        result.append(v)
        for neighbor in self.adj[v]:
            if not visited[neighbor]:
                self.dfs_util(neighbor, visited, result)

    def dfs(self, start):
        visited = [False] * self.V
        result = []
        self.dfs_util(start, visited, result)
        return result

    def bfs_disconnected(self):
        visited = [False] * self.V
        result = []
        for i in range(self.V):
            if not visited[i]:
                queue = deque([i])
                visited[i] = True
                while queue:
                    vertex = queue.popleft()
                    result.append(vertex)
                    for neighbor in self.adj[vertex]:
                        if not visited[neighbor]:
                            visited[neighbor] = True
                            queue.append(neighbor)
        return result

    def dfs_disconnected(self):
        visited = [False] * self.V
        result = []
        for i in range(self.V):
            if not visited[i]:
                self.dfs_util(i, visited, result)
        return result
```

### Historical Context
BFS and DFS are fundamental graph traversal algorithms used in many applications such as shortest path finding, cycle detection, and connectivity analysis. BFS explores neighbors level by level, while DFS explores as deep as possible before backtracking.

---

## Versión en Español

### Descripción del Reto
Implementa los algoritmos de búsqueda en anchura (BFS) y búsqueda en profundidad (DFS) para recorrer un grafo representado por listas de adyacencia. Asegura la cobertura de grafos conectados y desconectados.

### Explicación del Código
La clase `Graph` representa un grafo no dirigido usando listas de adyacencia. Soporta:
- `add_edge(u, v)`: Añade una arista no dirigida entre los vértices `u` y `v`.
- `bfs(start)`: Realiza un recorrido BFS comenzando desde un vértice dado.
- `dfs(start)`: Realiza un recorrido DFS comenzando desde un vértice dado.
- `bfs_disconnected()`: Realiza un recorrido BFS cubriendo todos los vértices, incluyendo componentes desconectados.
- `dfs_disconnected()`: Realiza un recorrido DFS cubriendo todos los vértices, incluyendo componentes desconectados.

### Fragmento de Código Relevante

```python
from collections import deque

class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.adj = [[] for _ in range(vertices)]

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)  # Grafo no dirigido

    def bfs(self, start):
        visited = [False] * self.V
        queue = deque([start])
        visited[start] = True
        result = []

        while queue:
            vertex = queue.popleft()
            result.append(vertex)
            for neighbor in self.adj[vertex]:
                if not visited[neighbor]:
                    visited[neighbor] = True
                    queue.append(neighbor)
        return result

    def dfs_util(self, v, visited, result):
        visited[v] = True
        result.append(v)
        for neighbor in self.adj[v]:
            if not visited[neighbor]:
                self.dfs_util(neighbor, visited, result)

    def dfs(self, start):
        visited = [False] * self.V
        result = []
        self.dfs_util(start, visited, result)
        return result

    def bfs_disconnected(self):
        visited = [False] * self.V
        result = []
        for i in range(self.V):
            if not visited[i]:
                queue = deque([i])
                visited[i] = True
                while queue:
                    vertex = queue.popleft()
                    result.append(vertex)
                    for neighbor in self.adj[vertex]:
                        if not visited[neighbor]:
                            visited[neighbor] = True
                            queue.append(neighbor)
        return result

    def dfs_disconnected(self):
        visited = [False] * self.V
        result = []
        for i in range(self.V):
            if not visited[i]:
                self.dfs_util(i, visited, result)
        return result
```

### Contexto Histórico
BFS y DFS son algoritmos fundamentales para el recorrido de grafos usados en muchas aplicaciones como encontrar caminos más cortos, detección de ciclos y análisis de conectividad. BFS explora vecinos nivel por nivel, mientras que DFS explora tan profundo como sea posible antes de retroceder.
