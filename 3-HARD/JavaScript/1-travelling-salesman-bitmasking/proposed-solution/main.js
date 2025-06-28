/*
Challenge:  
Given a set of cities and the distances between every pair of cities, find the shortest possible route that visits each city exactly once and returns to the origin city.  
This challenge requires implementing the Travelling Salesman Problem (TSP) using bitmasking and dynamic programming to optimize the solution.
*/

import TravellingSalesman from "./TravellingSalesman.js";

function main() {
  const distanceMatrix = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
  ];

  const tspSolver = new TravellingSalesman(distanceMatrix);
  const minCost = tspSolver.tsp();
  console.log("Minimum cost to visit all cities:", minCost);
}

main();
