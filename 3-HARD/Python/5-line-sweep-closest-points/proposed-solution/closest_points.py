from typing import List, Tuple
import math
import bisect

class ClosestPoints:
    def __init__(self, points: List[Tuple[int, int]]):
        self.points = sorted(points, key=lambda x: x[0])

    def distance(self, p1: Tuple[int, int], p2: Tuple[int, int]) -> float:
        return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)

    def find_closest_pair(self) -> Tuple[Tuple[int, int], Tuple[int, int], float]:
        active = []
        best_pair = (None, None)
        best_dist = float('inf')
        left = 0

        for point in self.points:
            while active and point[0] - self.points[left][0] > best_dist:
                bisect.insort_left(active, self.points[left][1])
                left += 1

            y_lower = point[1] - best_dist
            y_upper = point[1] + best_dist
            i = bisect.bisect_left(active, y_lower)
            j = bisect.bisect_right(active, y_upper)

            for y in active[i:j]:
                candidate = (point[0], y)
                dist = self.distance(point, candidate)
                if dist < best_dist:
                    best_dist = dist
                    best_pair = (point, candidate)

            bisect.insort(active, point[1])

        return best_pair[0], best_pair[1], best_dist
