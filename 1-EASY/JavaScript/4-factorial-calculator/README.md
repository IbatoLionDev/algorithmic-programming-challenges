# Challenge Description and Solution

## English Version

### Challenge Description
Develop a recursive or iterative function to calculate the factorial of a non-negative integer. Consider handling special cases such as negative numbers.

### Code Explanation
The code presents two functions to calculate the factorial:

- `factorialRecursive(n)`: Calculates the factorial recursively. If `n` is negative, it throws an error. If `n` is 0 or 1, it returns 1. Otherwise, it returns `n` multiplied by the factorial of `n-1`.

- `factorialIterative(n)`: Calculates the factorial iteratively. If `n` is negative, it throws an error. It initializes `result` to 1 and successively multiplies by each number from 2 to `n`.

### Relevant Code Snippet

```javascript
function factorialRecursive(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

function factorialIterative(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

### Example Usage

```javascript
const testValues = [0, 1, 5, 7];
testValues.forEach(val => {
    console.log(`Factorial of ${val} (recursive): ${factorialRecursive(val)}`);
    console.log(`Factorial of ${val} (iterative): ${factorialIterative(val)}`);
});
```

---

## Versión en Español

### Descripción del Reto
Desarrolla una función recursiva o iterativa para calcular el factorial de un número entero no negativo. Considera el manejo de casos especiales como números negativos.

### Explicación del Código
El código presenta dos funciones para calcular el factorial:

- `factorialRecursive(n)`: Calcula el factorial de forma recursiva. Si `n` es negativo, lanza un error. Si `n` es 0 o 1, retorna 1. En otro caso, retorna `n` multiplicado por el factorial de `n-1`.

- `factorialIterative(n)`: Calcula el factorial de forma iterativa. Si `n` es negativo, lanza un error. Inicializa `result` en 1 y multiplica sucesivamente por cada número desde 2 hasta `n`.

### Fragmento de Código Relevante

```javascript
function factorialRecursive(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

function factorialIterative(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

### Ejemplo de Uso

```javascript
const testValues = [0, 1, 5, 7];
testValues.forEach(val => {
    console.log(`Factorial de ${val} (recursivo): ${factorialRecursive(val)}`);
    console.log(`Factorial de ${val} (iterativo): ${factorialIterative(val)}`);
});
