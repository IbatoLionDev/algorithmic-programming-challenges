# Challenge Description and Solution

## English Version

### Challenge Description
Create a function that determines if a string is a palindrome, meaning it reads the same forwards and backwards.

### Code Explanation
The `isPalindrome` function converts the string to lowercase and removes spaces for comparison. It then compares the string with its reverse to determine if it is a palindrome.

### Relevant Code Snippet

```javascript
function isPalindrome(s) {
    const normalized = s.toLowerCase().replace(/\s+/g, '');
    return normalized === normalized.split('').reverse().join('');
}
```

### Example Usage

```javascript
const testStrings = ["radar", "hello", "level", "world"];
testStrings.forEach(str => {
    console.log(`'${str}' is palindrome: ${isPalindrome(str)}`);
});
```

---

## Versión en Español

### Descripción del Reto
Crea una función que determine si una cadena es un palíndromo, es decir, que se lee igual de izquierda a derecha y de derecha a izquierda.

### Explicación del Código
La función `isPalindrome` convierte la cadena a minúsculas y elimina espacios para hacer la comparación. Luego compara la cadena con su reverso para determinar si es un palíndromo.

### Fragmento de Código Relevante

```javascript
function isPalindrome(s) {
    const normalized = s.toLowerCase().replace(/\s+/g, '');
    return normalized === normalized.split('').reverse().join('');
}
```

### Ejemplo de Uso

```javascript
const testStrings = ["radar", "hello", "level", "world"];
testStrings.forEach(str => {
    console.log(`'${str}' es palíndromo: ${isPalindrome(str)}`);
});
