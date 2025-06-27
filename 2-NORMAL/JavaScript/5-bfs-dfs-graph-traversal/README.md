# Challenge Description and Solution

## English Version

### Challenge Description
Implement breadth-first search (BFS) and depth-first search (DFS) algorithms to traverse a graph represented by adjacency lists. Ensure coverage of both connected and disconnected graphs.

### Code Explanation
The `Graph` class represents an undirected graph using adjacency lists. It supports:
- `addEdge(u, v)`: Adds an undirected edge between vertices `u` and `v`.
- `bfs(start)`: Performs BFS traversal starting from a given vertex.
- `dfs(start)`: Performs DFS traversal starting from a given vertex.
- `bfsDisconnected()`: Performs BFS traversal covering all vertices, including disconnected components.
- `dfsDisconnected()`: Performs DFS traversal covering all vertices, including disconnected components.

### Relevant Code Snippet

```javascript
class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.adj = Array.from({ length: vertices }, () => []);
  }

  addEdge(u, v) {
    this.adj[u].push(v);
    this.adj[v].push(u); // Undirected graph
  }

  bfs(start) {
    const visited = new Array(this.V).fill(false);
    const queue = [];
    const result = [];

    visited[start] = true;
    queue.push(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      for (const neighbor of this.adj[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return result;
  }

  dfsUtil(v, visited, result) {
    visited[v] = true;
    result.push(v);

    for (const neighbor of this.adj[v]) {
      if (!visited[neighbor]) {
        this.dfsUtil(neighbor, visited, result);
      }
    }
  }

  dfs(start) {
    const visited = new Array(this.V).fill(false);
    const result = [];
    this.dfsUtil(start, visited, result);
    return result;
  }

  bfsDisconnected() {
    const visited = new Array(this.V).fill(false);
    const result = [];

    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        const queue = [];
        visited[i] = true;
        queue.push(i);

        while (queue.length > 0) {
          const vertex = queue.shift();
          result.push(vertex);

          for (const neighbor of this.adj[vertex]) {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              queue.push(neighbor);
            }
          }
        }
      }
    }
    return result;
  }

  dfsDisconnected() {
    const visited = new Array(this.V).fill(false);
    const result = [];

    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.dfsUtil(i, visited, result);
      }
    }
    return result;
  }
}
```

### Example Usage

```javascript
import Graph from './graph.js';

const g = new Graph(7);
const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [5, 6]];
for (const [u, v] of edges) {
  g.addEdge(u, v);
}

console.log('BFS starting from vertex 0:');
console.log(g.bfs(0));

console.log('DFS starting from vertex 0:');
console.log(g.dfs(0));

console.log('BFS for disconnected graph:');
console.log(g.bfsDisconnected());

console.log('DFS for disconnected graph:');
console.log(g.dfsDisconnected());
```

---

## Versión en Español

### Descripción del Reto
Implementa los algoritmos de búsqueda en anchura (BFS) y búsqueda en profundidad (DFS) para recorrer un grafo representado por listas de adyacencia. Asegura la cobertura de grafos conectados y desconectados.

### Explicación del Código
La clase `Graph` representa un grafo no dirigido usando listas de adyacencia. Soporta:
- `addEdge(u, v)`: Añade una arista no dirigida entre los vértices `u` y `v`.
- `bfs(start)`: Realiza un recorrido BFS comenzando desde un vértice dado.
- `dfs(start)`: Realiza un recorrido DFS comenzando desde un vértice dado.
- `bfsDisconnected()`: Realiza un recorrido BFS cubriendo todos los vértices, incluyendo componentes desconectados.
- `dfsDisconnected()`: Realiza un recorrido DFS cubriendo todos los vértices, incluyendo componentes desconectados.

### Fragmento de Código Relevante

```javascript
class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.adj = Array.from({ length: vertices }, () => []);
  }

  addEdge(u, v) {
    this.adj[u].push(v);
    this.adj[v].push(u); // Grafo no dirigido
  }

  bfs(start) {
    const visited = new Array(this.V).fill(false);
    const queue = [];
    const result = [];

    visited[start] = true;
    queue.push(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      for (const neighbor of this.adj[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return result;
  }

  dfsUtil(v, visited, result) {
    visited[v] = true;
    result.push(v);

    for (const neighbor of this.adj[v]) {
      if (!visited[neighbor]) {
        this.dfsUtil(neighbor, visited, result);
      }
    }
  }

  dfs(start) {
    const visited = new Array(this.V).fill(false);
    const result = [];
    this.dfsUtil(start, visited, result);
    return result;
  }

  bfsDisconnected() {
    const visited = new Array(this.V).fill(false);
    const result = [];

    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        const queue = [];
        visited[i] = true;
        queue.push(i);

        while (queue.length > 0) {
          const vertex = queue.shift();
          result.push(vertex);

          for (const neighbor of this.adj[vertex]) {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              queue.push(neighbor);
            }
          }
        }
      }
    }
    return result;
  }

  dfsDisconnected() {
    const visited = new Array(this.V).fill(false);
    const result = [];

    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.dfsUtil(i, visited, result);
      }
    }
    return result;
  }
}
```

### Ejemplo de Uso

```javascript
import Graph from './graph.js';

const g = new Graph(7);
const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [5, 6]];
for (const [u, v] of edges) {
  g.addEdge(u, v);
}

console.log('BFS starting from vertex 0:');
console.log(g.bfs(0));

console.log('DFS starting from vertex 0:');
console.log(g.dfs(0));

console.log('BFS for disconnected graph:');
console.log(g.bfsDisconnected());

console.log('DFS for disconnected graph:');
console.log(g.dfsDisconnected());
