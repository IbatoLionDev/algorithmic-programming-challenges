/*
Challenge:  
Implement the Edmonds-Karp algorithm to find the maximum flow in a flow network.  
Given a directed graph where each edge has a capacity, find the maximum flow from a source node to a sink node.

This solution uses Object-Oriented Programming (OOP) principles and follows DRY (Don't Repeat Yourself) best practices.
*/

import MaximumFlow from "./MaximumFlow.js";

function main() {
  // Example graph represented as an adjacency matrix of capacities
  const graph = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0],
  ];

  const maxFlowSolver = new MaximumFlow(graph);
  const maxFlow = maxFlowSolver.edmondsKarp(0, 5);
  console.log("The maximum possible flow is:", maxFlow);
}

main();
