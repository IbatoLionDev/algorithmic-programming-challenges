# Travelling Salesman Problem - Bitmasking Approach

## English

The Travelling Salesman Problem (TSP) is a classic algorithmic problem in the field of computer science and operations research. It focuses on optimization. In this problem, a salesman is given a list of cities and must determine the shortest possible route that visits each city exactly once and returns to the origin city.

This challenge requires implementing the TSP using bitmasking and dynamic programming to efficiently explore all possible routes without redundant calculations. The solution is implemented in JavaScript using Object-Oriented Programming (OOP) principles and follows DRY (Don't Repeat Yourself) best practices.

### Relevant Code Snippet

```javascript
class TravellingSalesman {
  constructor(distanceMatrix) {
    this.distanceMatrix = distanceMatrix;
    this.n = distanceMatrix.length;
    this.memo = Array.from({ length: this.n }, () => []);
  }

  tsp(mask = 1, pos = 0) {
    if (mask === (1 << this.n) - 1) {
      return this.distanceMatrix[pos][0];
    }
    if (this.memo[pos][mask] !== undefined) {
      return this.memo[pos][mask];
    }

    let minCost = Infinity;
    for (let city = 0; city < this.n; city++) {
      if ((mask & (1 << city)) === 0) {
        const newCost = this.distanceMatrix[pos][city] + this.tsp(mask | (1 << city), city);
        if (newCost < minCost) {
          minCost = newCost;
        }
      }
    }
    this.memo[pos][mask] = minCost;
    return minCost;
  }
}
```

---

## Español

El Problema del Viajante de Comercio (TSP) es un problema clásico en el campo de la informática y la investigación operativa. Se centra en la optimización. En este problema, un viajante debe determinar la ruta más corta posible que visite cada ciudad exactamente una vez y regrese a la ciudad de origen.

Este reto requiere implementar el TSP usando bitmasking y programación dinámica para explorar eficientemente todas las rutas posibles sin cálculos redundantes. La solución está implementada en JavaScript usando principios de Programación Orientada a Objetos (POO) y siguiendo las mejores prácticas de DRY (No te repitas).

### Fragmento de Código Relevante

```javascript
class TravellingSalesman {
  constructor(distanceMatrix) {
    this.distanceMatrix = distanceMatrix;
    this.n = distanceMatrix.length;
    this.memo = Array.from({ length: this.n }, () => []);
  }

  tsp(mask = 1, pos = 0) {
    if (mask === (1 << this.n) - 1) {
      return this.distanceMatrix[pos][0];
    }
    if (this.memo[pos][mask] !== undefined) {
      return this.memo[pos][mask];
    }

    let minCost = Infinity;
    for (let city = 0; city < this.n; city++) {
      if ((mask & (1 << city)) === 0) {
        const newCost = this.distanceMatrix[pos][city] + this.tsp(mask | (1 << city), city);
        if (newCost < minCost) {
          minCost = newCost;
        }
      }
    }
    this.memo[pos][mask] = minCost;
    return minCost;
  }
}
