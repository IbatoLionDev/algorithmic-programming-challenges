# Challenge Description and Solution

## English Version

### Challenge Description
Given an array of numbers, create a function that returns the k elements that appear most frequently. Consider using data structures like hash maps and heaps to efficiently manage frequency. Provide two variants using OOP: one with hash map and sorting, and another with hash map and heap.

### Code Explanation
The solution provides two classes:

- `TopKFrequentHashMap`: Uses a hash map (Counter) to count frequencies and sorts the items by frequency in descending order to return the top k elements.
- `TopKFrequentHeap`: Uses a hash map (Counter) and a heap (priority queue) to efficiently retrieve the top k elements with the highest frequency.

### Relevant Code Snippets

```python
from collections import Counter

class TopKFrequentHashMap:
    def __init__(self, nums):
        self.nums = nums

    def top_k_frequent(self, k):
        count = Counter(self.nums)
        sorted_items = sorted(count.items(), key=lambda x: x[1], reverse=True)
        return [item[0] for item in sorted_items[:k]]
```

```python
from collections import Counter
import heapq

class TopKFrequentHeap:
    def __init__(self, nums):
        self.nums = nums

    def top_k_frequent(self, k):
        count = Counter(self.nums)
        return [item for item, freq in heapq.nlargest(k, count.items(), key=lambda x: x[1])]
```

### Historical Context
Finding the top k frequent elements is a common problem in data analysis and information retrieval. Using hash maps for frequency counting and heaps for efficient retrieval are standard techniques in algorithm design.

---

## Versión en Español

### Descripción del Reto
Dado un arreglo de números, crea una función que devuelva los k elementos que aparecen con mayor frecuencia. Considera usar estructuras de datos como mapas hash y montículos para gestionar eficientemente la frecuencia. Proporciona dos variantes usando POO: una con mapa hash y ordenamiento, y otra con mapa hash y montículo.

### Explicación del Código
La solución proporciona dos clases:

- `TopKFrequentHashMap`: Usa un mapa hash (Counter) para contar frecuencias y ordena los elementos por frecuencia en orden descendente para devolver los k elementos principales.
- `TopKFrequentHeap`: Usa un mapa hash (Counter) y un montículo (cola de prioridad) para obtener eficientemente los k elementos con mayor frecuencia.

### Fragmentos de Código Relevantes

```python
from collections import Counter

class TopKFrequentHashMap:
    def __init__(self, nums):
        self.nums = nums

    def top_k_frequent(self, k):
        count = Counter(self.nums)
        sorted_items = sorted(count.items(), key=lambda x: x[1], reverse=True)
        return [item[0] for item in sorted_items[:k]]
```

```python
from collections import Counter
import heapq

class TopKFrequentHeap:
    def __init__(self, nums):
        self.nums = nums

    def top_k_frequent(self, k):
        count = Counter(self.nums)
        return [item for item, freq in heapq.nlargest(k, count.items(), key=lambda x: x[1])]
```

### Contexto Histórico
Encontrar los k elementos más frecuentes es un problema común en análisis de datos y recuperación de información. Usar mapas hash para contar frecuencias y montículos para recuperación eficiente son técnicas estándar en el diseño de algoritmos.
