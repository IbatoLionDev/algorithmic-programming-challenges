# Maximum Flow - Edmonds-Karp Algorithm

## English

The Maximum Flow problem involves finding the greatest possible flow in a flow network from a source node to a sink node without violating capacity constraints on the edges.

This challenge requires implementing the Edmonds-Karp algorithm, which is an implementation of the Ford-Fulkerson method using BFS to find augmenting paths. The solution is implemented in JavaScript using Object-Oriented Programming (OOP) principles and follows DRY (Don't Repeat Yourself) best practices.

### Relevant Code Snippet

```javascript
class MaximumFlow {
  constructor(graph) {
    this.graph = graph;
    this.n = graph.length;
  }

  bfs(source, sink, parent) {
    const visited = new Array(this.n).fill(false);
    const queue = [];
    queue.push(source);
    visited[source] = true;
    parent[source] = -1;

    while (queue.length > 0) {
      const u = queue.shift();

      for (let v = 0; v < this.n; v++) {
        if (!visited[v] && this.graph[u][v] > 0) {
          queue.push(v);
          parent[v] = u;
          visited[v] = true;
        }
      }
    }
    return visited[sink];
  }

  edmondsKarp(source, sink) {
    const parent = new Array(this.n);
    let maxFlow = 0;

    while (this.bfs(source, sink, parent)) {
      let pathFlow = Infinity;
      for (let v = sink; v !== source; v = parent[v]) {
        const u = parent[v];
        pathFlow = Math.min(pathFlow, this.graph[u][v]);
      }

      for (let v = sink; v !== source; v = parent[v]) {
        const u = parent[v];
        this.graph[u][v] -= pathFlow;
        this.graph[v][u] += pathFlow;
      }

      maxFlow += pathFlow;
    }
    return maxFlow;
  }
}
```

### History

The Maximum Flow problem and the Edmonds-Karp algorithm have been fundamental in network flow theory since the 1950s. The Edmonds-Karp algorithm improves the Ford-Fulkerson method by using BFS to find shortest augmenting paths, ensuring polynomial time complexity.

---

## Español

El problema de Flujo Máximo consiste en encontrar el flujo máximo posible en una red de flujo desde un nodo fuente hasta un nodo sumidero sin violar las capacidades de las aristas.

Este reto requiere implementar el algoritmo de Edmonds-Karp, que es una implementación del método de Ford-Fulkerson usando BFS para encontrar caminos aumentantes. La solución está implementada en JavaScript usando principios de Programación Orientada a Objetos (POO) y siguiendo las mejores prácticas de DRY (No te repitas).

### Fragmento de Código Relevante

```javascript
class MaximumFlow {
  constructor(graph) {
    this.graph = graph;
    this.n = graph.length;
  }

  bfs(source, sink, parent) {
    const visited = new Array(this.n).fill(false);
    const queue = [];
    queue.push(source);
    visited[source] = true;
    parent[source] = -1;

    while (queue.length > 0) {
      const u = queue.shift();

      for (let v = 0; v < this.n; v++) {
        if (!visited[v] && this.graph[u][v] > 0) {
          queue.push(v);
          parent[v] = u;
          visited[v] = true;
        }
      }
    }
    return visited[sink];
  }

  edmondsKarp(source, sink) {
    const parent = new Array(this.n);
    let maxFlow = 0;

    while (this.bfs(source, sink, parent)) {
      let pathFlow = Infinity;
      for (let v = sink; v !== source; v = parent[v]) {
        const u = parent[v];
        pathFlow = Math.min(pathFlow, this.graph[u][v]);
      }

      for (let v = sink; v !== source; v = parent[v]) {
        const u = parent[v];
        this.graph[u][v] -= pathFlow;
        this.graph[v][u] += pathFlow;
      }

      maxFlow += pathFlow;
    }
    return maxFlow;
  }
}
```

### Historia

El problema de Flujo Máximo y el algoritmo de Edmonds-Karp han sido fundamentales en la teoría de flujos de red desde los años 50. El algoritmo de Edmonds-Karp mejora el método de Ford-Fulkerson usando BFS para encontrar los caminos aumentantes más cortos, asegurando una complejidad polinómica.
