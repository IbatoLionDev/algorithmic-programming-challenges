# Challenge Description and Solution

## English Version

### Challenge Description
Given an array of integers, return the k most frequent elements. Use a class `TopKFrequent` that encapsulates the logic for counting frequencies and maintaining a min heap to find the top k frequent elements.

### Code Explanation
The solution uses a class `TopKFrequent` that encapsulates the logic for counting frequencies and maintaining a min heap to find the top k frequent elements.

The class builds a frequency map from the input array, then uses heap operations (`heapifyUp` and `heapifyDown`) to maintain a min heap of size k.

### Relevant Code Snippet

```javascript
class TopKFrequent {
  constructor(nums, k) {
    this.nums = nums;
    this.k = k;
    this.frequencyMap = new Map();
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(index) {
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[index][1] < this.heap[parent][1]) {
      this.swap(index, parent);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown(index) {
    const length = this.heap.length;
    let smallest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
      smallest = left;
    }
    if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  buildFrequencyMap() {
    for (const num of this.nums) {
      this.frequencyMap.set(num, (this.frequencyMap.get(num) || 0) + 1);
    }
  }

  findTopK() {
    this.buildFrequencyMap();

    for (const [num, freq] of this.frequencyMap.entries()) {
      this.heap.push([num, freq]);
      this.heapifyUp(this.heap.length - 1);
      if (this.heap.length > this.k) {
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
      }
    }

    return this.heap.map(item => item[0]);
  }
}
```

### Example Usage

```javascript
import TopKFrequent from './topKFrequent.js';

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
const topK = new TopKFrequent(nums, k);
const result = topK.findTopK();
console.log('Top k frequent elements:', result);
```

---

## Versión en Español

### Descripción del Reto
Dado un arreglo de enteros, devuelve los k elementos más frecuentes. Usa una clase `TopKFrequent` que encapsula la lógica para contar frecuencias y mantener un heap mínimo para encontrar los k elementos más frecuentes.

### Explicación del Código
La solución usa una clase `TopKFrequent` que encapsula la lógica para contar frecuencias y mantener un heap mínimo para encontrar los k elementos más frecuentes.

La clase construye un mapa de frecuencias a partir del arreglo de entrada, luego usa operaciones de heap (`heapifyUp` y `heapifyDown`) para mantener un heap mínimo de tamaño k.

### Fragmento de Código Relevante

```javascript
class TopKFrequent {
  constructor(nums, k) {
    this.nums = nums;
    this.k = k;
    this.frequencyMap = new Map();
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(index) {
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[index][1] < this.heap[parent][1]) {
      this.swap(index, parent);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown(index) {
    const length = this.heap.length;
    let smallest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
      smallest = left;
    }
    if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  buildFrequencyMap() {
    for (const num of this.nums) {
      this.frequencyMap.set(num, (this.frequencyMap.get(num) || 0) + 1);
    }
  }

  findTopK() {
    this.buildFrequencyMap();

    for (const [num, freq] of this.frequencyMap.entries()) {
      this.heap.push([num, freq]);
      this.heapifyUp(this.heap.length - 1);
      if (this.heap.length > this.k) {
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
      }
    }

    return this.heap.map(item => item[0]);
  }
}
```

### Ejemplo de Uso

```javascript
import TopKFrequent from './topKFrequent.js';

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
const topK = new TopKFrequent(nums, k);
const result = topK.findTopK();
console.log('Elementos más frecuentes:', result);
```
console.log('Elementos más frecuentes:', result);
