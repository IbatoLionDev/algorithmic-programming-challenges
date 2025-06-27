# Challenge Description and Solution

## English Version

### Challenge Description
Given an array of numbers, write a function that finds and returns the maximum value without using predefined sorting functions.

### Code Explanation
The `findMax` function first checks if the array is empty and throws an error in that case. It then initializes `maxVal` with the first element of the array and iterates over the rest of the elements comparing each with `maxVal`. If it finds a greater value, it updates `maxVal`. Finally, it returns the maximum value found.

### Relevant Code Snippet

```javascript
function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}
```

### Example Usage

```javascript
const testArray = [3, 5, 1, 8, 2, 9, 4];
console.log("Array:", testArray);
console.log("Maximum value:", findMax(testArray));
```

---

## Versión en Español

### Descripción del Reto
Dado un arreglo de números, escribe una función que encuentre y retorne el valor máximo sin usar funciones de ordenamiento predefinidas.

### Explicación del Código
La función `findMax` primero verifica si el arreglo está vacío y lanza un error en ese caso. Luego inicializa `maxVal` con el primer elemento del arreglo y recorre el resto de los elementos comparando cada uno con `maxVal`. Si encuentra un valor mayor, actualiza `maxVal`. Finalmente, retorna el valor máximo encontrado.

### Fragmento de Código Relevante

```javascript
function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}
```

### Ejemplo de Uso

```javascript
const testArray = [3, 5, 1, 8, 2, 9, 4];
console.log("Arreglo:", testArray);
console.log("Valor máximo:", findMax(testArray));
