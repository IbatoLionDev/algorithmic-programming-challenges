// MaximumFlow.js - Edmonds-Karp algorithm implementation using OOP and DRY principles

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

export default MaximumFlow;
