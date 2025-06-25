# Challenge Description and Solution

## English Version

### Challenge Description
Implement a segment tree that supports range queries and updates efficiently, using lazy propagation to handle deferred updates without sacrificing performance. Use object-oriented programming and follow the DRY principle.

### Code Explanation
The `SegmentTree` class builds a segment tree for range sum queries. It uses a lazy propagation array to defer updates to child nodes, improving efficiency for range updates.

Key methods:
- `_build`: Recursively builds the tree from the input data.
- `_update_range` and `update_range`: Update values in a range with lazy propagation.
- `_query_range` and `query_range`: Query the sum of values in a range, applying any pending updates.

### Relevant Code Snippet

```python
from typing import List

class SegmentTree:
    def __init__(self, data: List[int]):
        self.n = len(data)
        self.tree = [0] * (4 * self.n)
        self.lazy = [0] * (4 * self.n)
        self._build(data, 0, 0, self.n - 1)

    def _build(self, data: List[int], node: int, start: int, end: int):
        if start == end:
            self.tree[node] = data[start]
        else:
            mid = (start + end) // 2
            self._build(data, 2 * node + 1, start, mid)
            self._build(data, 2 * node + 2, mid + 1, end)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]

    def _update_range(self, node: int, start: int, end: int, l: int, r: int, val: int):
        if self.lazy[node] != 0:
            self.tree[node] += (end - start + 1) * self.lazy[node]
            if start != end:
                self.lazy[2 * node + 1] += self.lazy[node]
                self.lazy[2 * node + 2] += self.lazy[node]
            self.lazy[node] = 0

        if start > r or end < l:
            return

        if l <= start and end <= r:
            self.tree[node] += (end - start + 1) * val
            if start != end:
                self.lazy[2 * node + 1] += val
                self.lazy[2 * node + 2] += val
            return

        mid = (start + end) // 2
        self._update_range(2 * node + 1, start, mid, l, r, val)
        self._update_range(2 * node + 2, mid + 1, end, l, r, val)
        self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]

    def update_range(self, l: int, r: int, val: int):
        self._update_range(0, 0, self.n - 1, l, r, val)

    def _query_range(self, node: int, start: int, end: int, l: int, r: int) -> int:
        if start > r or end < l:
            return 0

        if self.lazy[node] != 0:
            self.tree[node] += (end - start + 1) * self.lazy[node]
            if start != end:
                self.lazy[2 * node + 1] += self.lazy[node]
                self.lazy[2 * node + 2] += self.lazy[node]
            self.lazy[node] = 0

        if l <= start and end <= r:
            return self.tree[node]

        mid = (start + end) // 2
        left_sum = self._query_range(2 * node + 1, start, mid, l, r)
        right_sum = self._query_range(2 * node + 2, mid + 1, end, l, r)
        return left_sum + right_sum

    def query_range(self, l: int, r: int) -> int:
        return self._query_range(0, 0, self.n - 1, l, r)
```

### Historical Context
Segment trees are advanced data structures used for efficient range queries and updates. Lazy propagation optimizes updates by deferring them, making segment trees suitable for scenarios with frequent range modifications.

---

## Versión en Español

### Descripción del Reto
Implementa un árbol de segmentos que soporte consultas y actualizaciones en rangos de manera eficiente, usando propagación perezosa para manejar actualizaciones diferidas sin sacrificar rendimiento. Usa programación orientada a objetos y sigue el principio DRY.

### Explicación del Código
La clase `SegmentTree` construye un árbol de segmentos para consultas de suma en rangos. Usa un arreglo de propagación perezosa para diferir actualizaciones a nodos hijos, mejorando la eficiencia en actualizaciones de rangos.

Métodos clave:
- `_build`: Construye recursivamente el árbol a partir de los datos de entrada.
- `_update_range` y `update_range`: Actualizan valores en un rango con propagación perezosa.
- `_query_range` y `query_range`: Consultan la suma de valores en un rango, aplicando actualizaciones pendientes.

### Fragmento de Código Relevante

```python
from typing import List

class SegmentTree:
    def __init__(self, data: List[int]):
        self.n = len(data)
        self.tree = [0] * (4 * self.n)
        self.lazy = [0] * (4 * self.n)
        self._build(data, 0, 0, self.n - 1)

    def _build(self, data: List[int], node: int, start: int, end: int):
        if start == end:
            self.tree[node] = data[start]
        else:
            mid = (start + end) // 2
            self._build(data, 2 * node + 1, start, mid)
            self._build(data, 2 * node + 2, mid + 1, end)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]

    def _update_range(self, node: int, start: int, end: int, l: int, r: int, val: int):
        if self.lazy[node] != 0:
            self.tree[node] += (end - start + 1) * self.lazy[node]
            if start != end:
                self.lazy[2 * node + 1] += self.lazy[node]
                self.lazy[2 * node + 2] += self.lazy[node]
            self.lazy[node] = 0

        if start > r or end < l:
            return

        if l <= start and end <= r:
            self.tree[node] += (end - start + 1) * val
            if start != end:
                self.lazy[2 * node + 1] += val
                self.lazy[2 * node + 2] += val
            return

        mid = (start + end) // 2
        self._update_range(2 * node + 1, start, mid, l, r, val)
        self._update_range(2 * node + 2, mid + 1, end, l, r, val)
        self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]

    def update_range(self, l: int, r: int, val: int):
        self._update_range(0, 0, self.n - 1, l, r, val)

    def _query_range(self, node: int, start: int, end: int, l: int, r: int) -> int:
        if start > r or end < l:
            return 0

        if self.lazy[node] != 0:
            self.tree[node] += (end - start + 1) * self.lazy[node]
            if start != end:
                self.lazy[2 * node + 1] += self.lazy[node]
                self.lazy[2 * node + 2] += self.lazy[node]
            self.lazy[node] = 0

        if l <= start and end <= r:
            return self.tree[node]

        mid = (start + end) // 2
        left_sum = self._query_range(2 * node + 1, start, mid, l, r)
        right_sum = self._query_range(2 * node + 2, mid + 1, end, l, r)
        return left_sum + right_sum

    def query_range(self, l: int, r: int) -> int:
        return self._query_range(0, 0, self.n - 1, l, r)
```

### Contexto Histórico
Los árboles de segmentos son estructuras de datos avanzadas usadas para consultas y actualizaciones eficientes en rangos. La propagación perezosa optimiza las actualizaciones al diferirlas, haciendo que los árboles de segmentos sean adecuados para escenarios con modificaciones frecuentes en rangos.
