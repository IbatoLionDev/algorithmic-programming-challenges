# Challenge Description and Solution

## English Version

### Challenge Description
Given a list of intervals (e.g., [[1, 3], [2, 6], [8, 10]]), implement a function that merges all overlapping intervals and returns an array with the resulting intervals.

### Code Explanation
The solution first sorts the intervals based on their start times. It then iterates through the sorted intervals, merging overlapping intervals by comparing the current interval's start with the last merged interval's end.

### Relevant Code Snippet

```javascript
function mergeIntervals(intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }

  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) { // Overlapping intervals
      merged[merged.length - 1] = [last[0], Math.max(last[1], current[1])];
    } else {
      merged.push(current);
    }
  }

  return merged;
}
```

### Example Usage

```javascript
import mergeIntervals from './intervals.js';

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const merged = mergeIntervals(intervals);
console.log('Merged intervals:', merged);
```

---

## Versión en Español

### Descripción del Reto
Dada una lista de intervalos (por ejemplo, [[1, 3], [2, 6], [8, 10]]), implementa una función que fusione todos los intervalos que se solapan y devuelva un arreglo con los intervalos resultantes.

### Explicación del Código
La solución primero ordena los intervalos según sus tiempos de inicio. Luego itera a través de los intervalos ordenados, fusionando los que se solapan comparando el inicio del intervalo actual con el final del último intervalo fusionado.

### Fragmento de Código Relevante

```javascript
function mergeIntervals(intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }

  // Ordenar intervalos según el tiempo de inicio
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) { // Intervalos que se solapan
      merged[merged.length - 1] = [last[0], Math.max(last[1], current[1])];
    } else {
      merged.push(current);
    }
  }

  return merged;
}
```

### Ejemplo de Uso

```javascript
import mergeIntervals from './intervals.js';

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const merged = mergeIntervals(intervals);
console.log('Intervalos fusionados:', merged);
