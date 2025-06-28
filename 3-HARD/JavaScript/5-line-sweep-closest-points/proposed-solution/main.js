/*
Challenge:
Use the line sweep algorithm to find the closest pair of points in a set of 2D coordinates.

This solution follows DRY principles and is implemented in JavaScript.
*/

import ClosestPoints from "./ClosestPoints.js";

function main() {
  const points = [
    [2, 3],
    [12, 30],
    [40, 50],
    [5, 1],
    [12, 10],
    [3, 4],
  ];

  const closestPoints = new ClosestPoints(points);
  const result = closestPoints.findClosestPair();

  console.log("Closest pair of points:", result.pair);
  console.log("Distance between closest points:", result.distance);
}

main();
