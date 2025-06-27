// graph.js - Graph class with BFS and DFS traversals

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

export default Graph;
