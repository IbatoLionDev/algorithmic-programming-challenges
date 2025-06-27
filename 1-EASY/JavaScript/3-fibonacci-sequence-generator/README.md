# Challenge Description and Solution

## English Version

### Challenge Description
Create a generator that returns the Fibonacci sequence up to n terms. You can explore iterative and recursive approaches to solve the problem.

### Code Explanation
The code presents two generator functions for the Fibonacci sequence:

- `fibonacciIterative(n)`: Uses a `for` loop to generate the first n terms of the Fibonacci sequence iteratively. It initializes two variables `a` and `b` with 0 and 1 respectively, and in each iteration yields the current value of `a` and updates `a` and `b`.

- `fibonacciRecursive(n, a=0, b=1)`: Generates the Fibonacci sequence recursively. If `n` is 0, it ends the recursion. Otherwise, it yields the current value `a` and recursively calls itself with `n-1`, `b`, and `a+b`.

### Relevant Code Snippet

```javascript
function* fibonacciIterative(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

function* fibonacciRecursive(n, a = 0, b = 1) {
    if (n === 0) return;
    yield a;
    yield* fibonacciRecursive(n - 1, b, a + b);
}
```

### Example Usage

```javascript
const n = 10;
console.log("Iterative Fibonacci sequence:");
for (const num of fibonacciIterative(n)) {
    process.stdout.write(num + " ");
}
console.log("\nRecursive Fibonacci sequence:");
for (const num of fibonacciRecursive(n)) {
    process.stdout.write(num + " ");
}
console.log();
```

---

## Versión en Español

### Descripción del Reto
Crea un generador que devuelva la secuencia de Fibonacci hasta n términos. Puedes explorar enfoques iterativos y recursivos para resolver el problema.

### Explicación del Código
El código presenta dos funciones generadoras para la secuencia de Fibonacci:

- `fibonacciIterative(n)`: Utiliza un bucle `for` para generar los primeros n términos de la secuencia de Fibonacci de manera iterativa. Inicializa dos variables `a` y `b` con 0 y 1 respectivamente, y en cada iteración produce el valor actual de `a` y actualiza `a` y `b`.

- `fibonacciRecursive(n, a=0, b=1)`: Genera la secuencia de Fibonacci de forma recursiva. Si `n` es 0, termina la recursión. De lo contrario, produce el valor actual `a` y llama recursivamente a sí misma con `n-1`, `b` y `a+b`.

### Fragmento de Código Relevante

```javascript
function* fibonacciIterative(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

function* fibonacciRecursive(n, a = 0, b = 1) {
    if (n === 0) return;
    yield a;
    yield* fibonacciRecursive(n - 1, b, a + b);
}
```

### Ejemplo de Uso

```javascript
const n = 10;
console.log("Secuencia de Fibonacci iterativa:");
for (const num of fibonacciIterative(n)) {
    process.stdout.write(num + " ");
}
console.log("\nSecuencia de Fibonacci recursiva:");
for (const num of fibonacciRecursive(n)) {
    process.stdout.write(num + " ");
}
console.log();
