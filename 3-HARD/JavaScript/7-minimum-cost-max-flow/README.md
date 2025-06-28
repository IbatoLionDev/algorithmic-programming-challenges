# Minimum Cost Maximum Flow

## English

The minimum cost maximum flow problem is a fundamental problem in network flow theory, combining flow maximization with cost minimization. The Bellman-Ford algorithm is used to find shortest paths in graphs with negative edge weights, enabling efficient cost optimization.

This challenge involves implementing an algorithm that finds the maximum flow with the minimum cost in a network.

### Relevant Code Snippet

```javascript
class MinCostMaxFlow {
  constructor(n) {
    this.n = n;
    this.graph = Array.from({ length: n }, () => []);
  }

  addEdge(u, v, capacity, cost) {
    this.graph[u].push([v, capacity, cost, this.graph[v].length]);
    this.graph[v].push([u, 0, -cost, this.graph[u].length - 1]);
  }

  bellmanFord(source, dist, parent) {
    dist.fill(Infinity);
    dist[source] = 0;
    const inQueue = new Array(this.n).fill(false);
    const queue = [source];
    inQueue[source] = true;

    while (queue.length > 0) {
      const u = queue.shift();
      inQueue[u] = false;
      for (let i = 0; i < this.graph[u].length; i++) {
        const [v, capacity, cost, rev] = this.graph[u][i];
        if (capacity > 0 && dist[u] + cost < dist[v]) {
          dist[v] = dist[u] + cost;
          parent[v] = [u, i];
          if (!inQueue[v]) {
            queue.push(v);
            inQueue[v] = true;
          }
        }
      }
    }
  }

  minCostMaxFlow(source, sink) {
    let flow = 0;
    let cost = 0;
    const dist = new Array(this.n);
    const parent = new Array(this.n).fill([-1, -1]);

    while (true) {
      this.bellmanFord(source, dist, parent);
      if (dist[sink] === Infinity) {
        break;
      }

      let pathFlow = Infinity;
      let v = sink;
      while (v !== source) {
        const [u, i] = parent[v];
        pathFlow = Math.min(pathFlow, this.graph[u][i][1]);
        v = u;
      }

      flow += pathFlow;
      cost += pathFlow * dist[sink];

      v = sink;
      while (v !== source) {
        const [u, i] = parent[v];
        this.graph[u][i][1] -= pathFlow;
        const rev = this.graph[u][i][3];
        this.graph[v][rev][1] += pathFlow;
        v = u;
      }
    }

    return { flow, cost };
  }
}
```

### History

The minimum cost maximum flow problem is a classic combinatorial optimization problem with applications in transportation, network design, and resource allocation.

---

## Español

Flujo Máximo de Costo Mínimo

El problema de flujo máximo de costo mínimo es un problema fundamental en la teoría de flujos en redes, que combina la maximización del flujo con la minimización del costo. El algoritmo de Bellman-Ford se usa para encontrar caminos más cortos en grafos con pesos negativos, permitiendo una optimización eficiente del costo.

Este reto consiste en implementar un algoritmo que encuentre el flujo máximo con el costo mínimo en una red.

### Fragmento de Código Relevante

```javascript
class MinCostMaxFlow {
  constructor(n) {
    this.n = n;
    this.graph = Array.from({ length: n }, () => []);
  }

  addEdge(u, v, capacity, cost) {
    this.graph[u].push([v, capacity, cost, this.graph[v].length]);
    this.graph[v].push([u, 0, -cost, this.graph[u].length - 1]);
  }

  bellmanFord(source, dist, parent) {
    dist.fill(Infinity);
    dist[source] = 0;
    const inQueue = new Array(this.n).fill(false);
    const queue = [source];
    inQueue[source] = true;

    while (queue.length > 0) {
      const u = queue.shift();
      inQueue[u] = false;
      for (let i = 0; i < this.graph[u].length; i++) {
        const [v, capacity, cost, rev] = this.graph[u][i];
        if (capacity > 0 && dist[u] + cost < dist[v]) {
          dist[v] = dist[u] + cost;
          parent[v] = [u, i];
          if (!inQueue[v]) {
            queue.push(v);
            inQueue[v] = true;
          }
        }
      }
    }
  }

  minCostMaxFlow(source, sink) {
    let flow = 0;
    let cost = 0;
    const dist = new Array(this.n);
    const parent = new Array(this.n).fill([-1, -1]);

    while (true) {
      this.bellmanFord(source, dist, parent);
      if (dist[sink] === Infinity) {
        break;
      }

      let pathFlow = Infinity;
      let v = sink;
      while (v !== source) {
        const [u, i] = parent[v];
        pathFlow = Math.min(pathFlow, this.graph[u][i][1]);
        v = u;
      }

      flow += pathFlow;
      cost += pathFlow * dist[sink];

      v = sink;
      while (v !== source) {
        const [u, i] = parent[v];
        this.graph[u][i][1] -= pathFlow;
        const rev = this.graph[u][i][3];
        this.graph[v][rev][1] += pathFlow;
        v = u;
      }
    }

    return { flow, cost };
  }
}
```

### Historia

El problema de flujo máximo de costo mínimo es un problema clásico de optimización combinatoria con aplicaciones en transporte, diseño de redes y asignación de recursos.
