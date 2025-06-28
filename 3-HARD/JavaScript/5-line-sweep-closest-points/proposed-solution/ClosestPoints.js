// ClosestPoints.js - Line Sweep Algorithm to find closest pair of points in JavaScript

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
      let low = 0,
        high = arr.length;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < x) low = mid + 1;
        else high = mid;
      }
      return low;
    };

    const bisectRight = (arr, x) => {
      let low = 0,
        high = arr.length;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] <= x) low = mid + 1;
        else high = mid;
      }
      return low;
    };

    for (const point of this.points) {
      while (active.length > 0 && point[0] - this.points[left][0] > bestDist) {
        // Remove points[left][1] from active using binary search
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

      // Insert point[1] into active in sorted order
      const pos = bisectLeft(active, point[1]);
      active.splice(pos, 0, point[1]);
    }

    return { pair: bestPair, distance: bestDist };
  }
}

export default ClosestPoints;
