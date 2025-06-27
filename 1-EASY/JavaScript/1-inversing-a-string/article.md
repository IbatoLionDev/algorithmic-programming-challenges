# Challenge Description and Solution

## English Version

### Challenge Description
Given a string, create a function that reverses it without using built-in reverse methods. This will help you practice loops and index handling.

### Code Explanation
The `reverseString` function iterates over the input string from the end to the beginning, concatenating characters to build the reversed string.

### Relevant Code Snippet

```javascript
function reverseString(s) {
    let reversedStr = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversedStr += s[i];
    }
    return reversedStr;
}
```

### Example Usage

```javascript
const testString = "hello";
console.log("Original string:", testString);
console.log("Reversed string:", reverseString(testString));
```

---

## Versión en Español

### Descripción del Reto
Dada una cadena, crea una función que la invierta sin usar métodos integrados de inversión. Esto te ayudará a practicar bucles y manejo de índices.

### Explicación del Código
La función `reverseString` itera sobre la cadena de entrada desde el final hasta el principio, concatenando caracteres para construir la cadena invertida.

### Fragmento de Código Relevante

```javascript
function reverseString(s) {
    let reversedStr = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversedStr += s[i];
    }
    return reversedStr;
}
```

### Ejemplo de Uso

```javascript
const testString = "hello";
console.log("Original string:", testString);
console.log("Reversed string:", reverseString(testString));
