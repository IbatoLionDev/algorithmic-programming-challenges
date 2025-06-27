// main.js - Example usage of Knapsack

import Knapsack from "./knapsack.js";

/*
Challenge: Solve the 0/1 knapsack problem using dynamic programming.
Given a set of items with weights and values, determine the combination that maximizes value without exceeding the capacity.
*/

function main() {
  const weights = [2, 3, 4, 5];
  const values = [3, 4, 5, 6];
  const capacity = 5;
  const maxValue = Knapsack.knapsack(weights, values, capacity);
  console.log(
    `Maximum value in knapsack with capacity ${capacity}: ${maxValue}`
  );
}

main();
