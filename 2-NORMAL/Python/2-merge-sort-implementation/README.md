# Challenge Description and Solution

## English Version

### Challenge Description
Develop a function that implements the Merge Sort algorithm to sort an array. Evaluate the efficiency of your implementation and consider cases with large arrays.

### Code Explanation
Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts each half, and then merges the sorted halves.

The `merge_sort` function recursively splits the array until subarrays have one element. The `merge` function then combines two sorted arrays into one sorted array.

### Relevant Code Snippets

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result
```

### Historical Context
Merge Sort was invented by John von Neumann in 1945. It is one of the earliest sorting algorithms and is notable for its stable sorting and O(n log n) time complexity, making it efficient for large datasets.

---

## Versión en Español

### Descripción del Reto
Desarrolla una función que implemente el algoritmo Merge Sort para ordenar un arreglo. Evalúa la eficiencia de tu implementación y considera casos con arreglos grandes.

### Explicación del Código
Merge Sort es un algoritmo de divide y vencerás que divide el arreglo en mitades, ordena recursivamente cada mitad y luego combina las mitades ordenadas.

La función `merge_sort` divide recursivamente el arreglo hasta que los subarreglos tienen un elemento. La función `merge` combina dos arreglos ordenados en uno solo ordenado.

### Fragmentos de Código Relevantes

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result
```

### Contexto Histórico
Merge Sort fue inventado por John von Neumann en 1945. Es uno de los algoritmos de ordenamiento más antiguos y es conocido por su ordenamiento estable y complejidad temporal O(n log n), lo que lo hace eficiente para grandes conjuntos de datos.
