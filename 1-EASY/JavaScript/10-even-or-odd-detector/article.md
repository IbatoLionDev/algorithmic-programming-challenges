# Challenge Description and Solution

## English Version

### Challenge Description
Write a function that determines if a number is even or odd. Test with different types of inputs (positive numbers, negative numbers, and zero) to ensure robustness.

### Code Explanation
The `isEven` function uses the modulo operator `%` to determine if a number is even. If the remainder of the division of the number by 2 is zero, the number is even; otherwise, it is odd.

### Relevant Code Snippet

```javascript
function isEven(n) {
    return n % 2 === 0;
}
```

### Example Usage

```javascript
const testValues = [0, 1, -1, 2, -2, 15, -15];
testValues.forEach(val => {
    const result = isEven(val) ? "even" : "odd";
    console.log(`${val} is ${result}`);
});
```

---

## Versión en Español

### Descripción del Reto
Escribe una función que determine si un número es par o impar. Prueba con diferentes tipos de entradas (números positivos, negativos y cero) para asegurar la robustez.

### Explicación del Código
La función `isEven` utiliza el operador módulo `%` para determinar si un número es par. Si el residuo de la división entre el número y 2 es cero, el número es par; de lo contrario, es impar.

### Fragmento de Código Relevante

```javascript
function isEven(n) {
    return n % 2 === 0;
}
```

### Ejemplo de Uso

```javascript
const testValues = [0, 1, -1, 2, -2, 15, -15];
testValues.forEach(val => {
    const result = isEven(val) ? "even" : "odd";
    console.log(`${val} is ${result}`);
});
