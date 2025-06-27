# Challenge Description and Solution

## English Version

### Challenge Description
Develop a function that implements the Merge Sort algorithm to sort an array. Evaluate the efficiency of your implementation and consider cases with large arrays.

### Code Explanation
Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts each half, and then merges the sorted halves.

The `mergeSort` static method recursively splits the array until subarrays have one element. The `merge` static method then combines two sorted arrays into one sorted array.

### Relevant Code Snippet

```javascript
class MergeSort {
    static mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = MergeSort.mergeSort(arr.slice(0, mid));
        const right = MergeSort.mergeSort(arr.slice(mid));
        return MergeSort.merge(left, right);
    }

    static merge(left, right) {
        const result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}
```

### Example Usage

```javascript
import MergeSort from './mergeSort.js';

const sampleArray = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", sampleArray);
const sortedArray = MergeSort.mergeSort(sampleArray);
console.log("Sorted array:", sortedArray);
```

---

## Versión en Español

### Descripción del Reto
Desarrolla una función que implemente el algoritmo Merge Sort para ordenar un arreglo. Evalúa la eficiencia de tu implementación y considera casos con arreglos grandes.

### Explicación del Código
Merge Sort es un algoritmo de divide y vencerás que divide el arreglo en mitades, ordena recursivamente cada mitad y luego combina las mitades ordenadas.

El método estático `mergeSort` divide recursivamente el arreglo hasta que los subarreglos tienen un elemento. El método estático `merge` combina dos arreglos ordenados en uno solo ordenado.

### Fragmento de Código Relevante

```javascript
class MergeSort {
    static mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = MergeSort.mergeSort(arr.slice(0, mid));
        const right = MergeSort.mergeSort(arr.slice(mid));
        return MergeSort.merge(left, right);
    }

    static merge(left, right) {
        const result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}
```

### Ejemplo de Uso

```javascript
import MergeSort from './mergeSort.js';

const sampleArray = [38, 27, 43, 3, 9, 82, 10];
console.log("Arreglo original:", sampleArray);
const sortedArray = MergeSort.mergeSort(sampleArray);
console.log("Arreglo ordenado:", sortedArray);
