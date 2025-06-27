// main.js - Example usage of Graph with BFS and DFS traversals

import Graph from './graph.js';

/*
Challenge: Implement breadth-first search (BFS) and depth-first search (DFS) algorithms to traverse a graph represented by adjacency lists.
Ensure coverage of both connected and disconnected graphs.
*/

function main() {
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
}

main();
