/*
Challenge:
Combine maximum flow and cost optimization concepts to implement an algorithm that finds the maximum flow with the minimum cost in a network.

This solution follows DRY principles and is implemented in JavaScript.
*/

import MinCostMaxFlow from "./MinCostMaxFlow.js";

function main() {
  const n = 4;
  const mcmf = new MinCostMaxFlow(n);

  // Example edges: addEdge(u, v, capacity, cost)
  mcmf.addEdge(0, 1, 3, 1);
  mcmf.addEdge(0, 2, 2, 2);
  mcmf.addEdge(1, 2, 2, 1);
  mcmf.addEdge(1, 3, 2, 3);
  mcmf.addEdge(2, 3, 3, 1);

  const source = 0;
  const sink = 3;

  const result = mcmf.minCostMaxFlow(source, sink);
  console.log("Maximum flow:", result.flow);
  console.log("Minimum cost:", result.cost);
}

main();
