# Challenge Description and Solution

## English Version

### Challenge Description
Implement a function that determines if a number is prime. Pay attention to edge cases such as negative values and the number 1.

### Code Explanation
The `isPrime` function checks if a number `n` is prime. It first excludes numbers less than or equal to 1, which are not prime. Then, it considers 2 and 3 as prime numbers. Next, it eliminates multiples of 2 and 3. Finally, it uses a loop that checks divisors starting from 5, skipping multiples of 6, to optimize the search. If a divisor is found, it returns `false`; otherwise, it returns `true`.

### Relevant Code Snippet

```javascript
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}
```

### Example Usage

```javascript
const testNumbers = [-1, 0, 1, 2, 3, 4, 5, 29, 35];
testNumbers.forEach(num => {
    console.log(`${num} is prime: ${isPrime(num)}`);
});
```

---

## Versión en Español

### Descripción del Reto
Implementa una función que determine si un número es primo. Presta atención a casos especiales como valores negativos y el número 1.

### Explicación del Código
La función `isPrime` verifica si un número `n` es primo. Primero descarta números menores o iguales a 1, que no son primos. Luego, considera los números 2 y 3 como primos. Después, elimina múltiplos de 2 y 3. Finalmente, utiliza un bucle que verifica divisores desde 5 en adelante, saltando múltiplos de 6, para optimizar la búsqueda. Si encuentra un divisor, retorna `false`; si no, retorna `true`.

### Fragmento de Código Relevante

```javascript
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}
```

### Ejemplo de Uso

```javascript
const testNumbers = [-1, 0, 1, 2, 3, 4, 5, 29, 35];
testNumbers.forEach(num => {
    console.log(`${num} es primo: ${isPrime(num)}`);
});
