# Challenge Description and Solution

## English Version

### Challenge Description
Create a function that, given an integer, returns the sum of its digits. Make sure to handle negative numbers and the special case of zero.

### Code Explanation
The `sumOfDigits` function first converts the number to its absolute value to handle negative numbers. If the number is zero, it returns 0. Then, it uses a `while` loop to sum each digit of the number, obtaining the least significant digit with the modulo operator `%` and removing it with integer division.

### Relevant Code Snippet

```javascript
function sumOfDigits(n) {
    n = Math.abs(n);
    if (n === 0) {
        return 0;
    }
    let total = 0;
    while (n > 0) {
        total += n % 10;
        n = Math.floor(n / 10);
    }
    return total;
}
```

### Example Usage

```javascript
const testValues = [0, 123, -456, 7890];
testValues.forEach(val => {
    console.log(`Sum of digits of ${val}: ${sumOfDigits(val)}`);
});
```

---

## Versión en Español

### Descripción del Reto
Crea una función que, dado un número entero, retorne la suma de sus dígitos. Asegúrate de manejar números negativos y el caso especial del cero.

### Explicación del Código
La función `sumOfDigits` primero convierte el número a su valor absoluto para manejar números negativos. Si el número es cero, retorna 0. Luego, utiliza un bucle `while` para sumar cada dígito del número, obteniendo el dígito menos significativo con el operador módulo `%` y eliminándolo con la división entera.

### Fragmento de Código Relevante

```javascript
function sumOfDigits(n) {
    n = Math.abs(n);
    if (n === 0) {
        return 0;
    }
    let total = 0;
    while (n > 0) {
        total += n % 10;
        n = Math.floor(n / 10);
    }
    return total;
}
```

### Ejemplo de Uso

```javascript
const testValues = [0, 123, -456, 7890];
testValues.forEach(val => {
    console.log(`Suma de dígitos de ${val}: ${sumOfDigits(val)}`);
});
