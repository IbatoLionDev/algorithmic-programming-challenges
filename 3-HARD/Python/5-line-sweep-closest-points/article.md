# Challenge Description and Solution

## English Version

### Challenge Description
Use the line sweep algorithm to find the closest pair of points in a set of 2D coordinates. This challenge requires a good understanding of geometric algorithms and spatial optimization. Use object-oriented programming and follow the DRY principle.

### Code Explanation
The `ClosestPoints` class sorts points by their x-coordinate and uses a line sweep approach with a balanced data structure to maintain active points within the current sweep line. It calculates distances between candidate points to find the closest pair efficiently.

Key methods:
- `distance`: Calculates Euclidean distance between two points.
- `find_closest_pair`: Implements the line sweep algorithm to find the closest pair of points.

### Relevant Code Snippet

```python
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
```

### Historical Context
The line sweep algorithm is a powerful technique in computational geometry for solving proximity problems efficiently. It reduces the complexity of finding the closest pair of points from O(n^2) to O(n log n) by sweeping a line across the plane and maintaining a dynamic set of candidate points.

---

## Versión en Español

### Descripción del Reto
Usa el algoritmo de barrido lineal para encontrar el par de puntos más cercanos en un conjunto de coordenadas 2D. Este reto requiere un buen entendimiento de algoritmos geométricos y optimización espacial. Usa programación orientada a objetos y sigue el principio DRY.

### Explicación del Código
La clase `ClosestPoints` ordena los puntos por su coordenada x y usa un enfoque de barrido lineal con una estructura de datos balanceada para mantener los puntos activos dentro de la línea de barrido actual. Calcula distancias entre puntos candidatos para encontrar el par más cercano eficientemente.

Métodos clave:
- `distance`: Calcula la distancia euclidiana entre dos puntos.
- `find_closest_pair`: Implementa el algoritmo de barrido lineal para encontrar el par de puntos más cercanos.

### Fragmento de Código Relevante

```python
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
```

### Contexto Histórico
El algoritmo de barrido lineal es una técnica poderosa en geometría computacional para resolver problemas de proximidad eficientemente. Reduce la complejidad de encontrar el par de puntos más cercanos de O(n^2) a O(n log n) al barrer una línea a través del plano y mantener un conjunto dinámico de puntos candidatos.
