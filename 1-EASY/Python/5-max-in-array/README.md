# Challenge Description and Solution

## English Version

### Challenge Description
Given an array of numbers, write a function that finds and returns the maximum value without using predefined sorting functions.

### Code Explanation
The `find_max` function first checks if the array is empty and raises an error in that case. It then initializes `max_val` with the first element of the array and iterates over the rest of the elements comparing each with `max_val`. If it finds a greater value, it updates `max_val`. Finally, it returns the maximum value found.

Relevant code:

```python
def find_max(arr):
    if not arr:
        raise ValueError("Array is empty")
    max_val = arr[0]
    for num in arr[1:]:
        if num > max_val:
            max_val = num
    return max_val
```

The `if __name__ == "__main__":` block contains an example usage that shows an array and the maximum value found.

```python
if __name__ == "__main__":
    test_array = [3, 5, 1, 8, 2, 9, 4]
    print("Array:", test_array)
    print("Maximum value:", find_max(test_array))
```

## Versión en Español

### Descripción del Reto
Dado un arreglo de números, escribe una función que encuentre y retorne el valor máximo sin usar funciones de ordenamiento predefinidas.

### Explicación del Código
La función `find_max` primero verifica si el arreglo está vacío y lanza un error en ese caso. Luego inicializa `max_val` con el primer elemento del arreglo y recorre el resto de los elementos comparando cada uno con `max_val`. Si encuentra un valor mayor, actualiza `max_val`. Finalmente, retorna el valor máximo encontrado.

Código relevante:

```python
def find_max(arr):
    if not arr:
        raise ValueError("Array is empty")
    max_val = arr[0]
    for num in arr[1:]:
        if num > max_val:
            max_val = num
    return max_val
```

El bloque `if __name__ == "__main__":` contiene un ejemplo de uso que muestra un arreglo y el valor máximo encontrado.

```python
if __name__ == "__main__":
    test_array = [3, 5, 1, 8, 2, 9, 4]
    print("Array:", test_array)
    print("Maximum value:", find_max(test_array))
