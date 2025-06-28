# Line Sweep Algorithm - Closest Pair of Points

## English

The line sweep algorithm is a powerful technique in computational geometry for solving proximity problems efficiently. It reduces the complexity of finding the closest pair of points from O(n^2) to O(n log n) by sweeping a line across the plane and maintaining a dynamic set of candidate points.

This challenge involves using the line sweep algorithm to find the closest pair of points in a set of 2D coordinates.

### Relevant Code Snippet

```javascript
class ClosestPoints {
  constructor(points) {
    this.points = points.slice().sort((a, b) => a[0] - b[0]);
  }

  distance(p1, p2) {
    return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
  }

  findClosestPair() {
    const active = [];
    let bestPair = [null, null];
    let bestDist = Infinity;
    let left = 0;

    const bisectLeft = (arr, x) => {
      let low = 0, high = arr.length;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < x) low = mid + 1;
        else high = mid;
      }
      return low;
    };

    const bisectRight = (arr, x) => {
      let low = 0, high = arr.length;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] <= x) low = mid + 1;
        else high = mid;
      }
      return low;
    };

    for (const point of this.points) {
      while (active.length > 0 && point[0] - this.points[left][0] > bestDist) {
        const idx = bisectLeft(active, this.points[left][1]);
        if (idx < active.length && active[idx] === this.points[left][1]) {
          active.splice(idx, 1);
        }
        left++;
      }

      const yLower = point[1] - bestDist;
      const yUpper = point[1] + bestDist;
      const i = bisectLeft(active, yLower);
      const j = bisectRight(active, yUpper);

      for (let k = i; k < j; k++) {
        const candidate = [point[0], active[k]];
        const dist = this.distance(point, candidate);
        if (dist < bestDist) {
          bestDist = dist;
          bestPair = [point, candidate];
        }
      }

      const pos = bisectLeft(active, point[1]);
      active.splice(pos, 0, point[1]);
    }

    return { pair: bestPair, distance: bestDist };
  }
}
```

### History

The line sweep algorithm has been widely used in computational geometry for efficient proximity queries and spatial optimization problems.

---

## Español

Algoritmo de Barrido Lineal - Par de Puntos Más Cercanos

El algoritmo de barrido lineal es una técnica poderosa en geometría computacional para resolver problemas de proximidad eficientemente. Reduce la complejidad de encontrar el par de puntos más cercanos de O(n^2) a O(n log n) al barrer una línea a través del plano y mantener un conjunto dinámico de puntos candidatos.

Este reto consiste en usar el algoritmo de barrido lineal para encontrar el par de puntos más cercanos en un conjunto de coordenadas 2D.

### Fragmento de Código Relevante

```javascript
class ClosestPoints {
  constructor(points) {
    this.points = points.slice().sort((a, b) => a[0] - b[0]);
  }

  distance(p1, p2) {
    return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
  }

  findClosestPair() {
    const active = [];
    let bestPair = [null, null];
    let bestDist = Infinity;
    let left = 0;

    const bisectLeft = (arr, x) => {
      let low = 0, high = arr.length;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < x) low = mid + 1;
        else high = mid;
      }
      return low;
    };

    const bisectRight = (arr, x) => {
      let low = 0, high = arr.length;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] <= x) low = mid + 1;
        else high = mid;
      }
      return low;
    };

    for (const point of this.points) {
      while (active.length > 0 && point[0] - this.points[left][0] > bestDist) {
        const idx = bisectLeft(active, this.points[left][1]);
        if (idx < active.length && active[idx] === this.points[left][1]) {
          active.splice(idx, 1);
        }
        left++;
      }

      const yLower = point[1] - bestDist;
      const yUpper = point[1] + bestDist;
      const i = bisectLeft(active, yLower);
      const j = bisectRight(active, yUpper);

      for (let k = i; k < j; k++) {
        const candidate = [point[0], active[k]];
        const dist = this.distance(point, candidate);
        if (dist < bestDist) {
          bestDist = dist;
          bestPair = [point, candidate];
        }
      }

      const pos = bisectLeft(active, point[1]);
      active.splice(pos, 0, point[1]);
    }

    return { pair: bestPair, distance: bestDist };
  }
}
```

### Historia

El algoritmo de barrido lineal ha sido ampliamente usado en geometría computacional para consultas de proximidad eficientes y problemas de optimización espacial.
