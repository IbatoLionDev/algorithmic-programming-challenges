// MinCostMaxFlow.js - Minimum Cost Maximum Flow algorithm using Bellman-Ford in JavaScript

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
        const [v, capacity, cost] = this.graph[u][i];
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

export default MinCostMaxFlow;
