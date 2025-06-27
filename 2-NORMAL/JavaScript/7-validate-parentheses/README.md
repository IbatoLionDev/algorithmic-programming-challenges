# Challenge Description and Solution

## English Version

### Challenge Description
Create a function that, given a string composed of parentheses and possibly other opening and closing symbols, verifies if the sequence is valid (i.e., each open symbol has its corresponding closing symbol in the correct order). Use a stack data structure to solve it.

### Code Explanation
The solution uses a stack to track opening symbols. For each character:
- If it is an opening symbol, push it onto the stack.
- If it is a closing symbol, check if the top of the stack matches the corresponding opening symbol.
- If not, the sequence is invalid.
- Ignore other characters.

The sequence is valid if the stack is empty at the end.

### Relevant Code Snippet

```javascript
function isValidParentheses(s) {
  const stack = [];
  const mapping = { ')': '(', ']': '[', '}': '{' };

  for (const char of s) {
    if (Object.values(mapping).includes(char)) {
      stack.push(char);
    } else if (char in mapping) {
      if (stack.length === 0 || stack.pop() !== mapping[char]) {
        return false;
      }
    } else {
      // Ignore other characters
      continue;
    }
  }

  return stack.length === 0;
}
```

### Example Usage

```javascript
import isValidParentheses from './parentheses.js';

const testStrings = ["()", "()[]{}", "(]", "([)]", "{[]}"];
testStrings.forEach(s => {
  console.log(`Is '${s}' valid?`, isValidParentheses(s));
});
```

---

## Versión en Español

### Descripción del Reto
Crea una función que, dada una cadena compuesta por paréntesis y posiblemente otros símbolos de apertura y cierre, verifique si la secuencia es válida (es decir, que cada símbolo de apertura tenga su correspondiente símbolo de cierre en el orden correcto). Usa una estructura de datos pila para resolverlo.

### Explicación del Código
La solución usa una pila para rastrear los símbolos de apertura. Para cada carácter:
- Si es un símbolo de apertura, se agrega a la pila.
- Si es un símbolo de cierre, se verifica si el tope de la pila coincide con el símbolo de apertura correspondiente.
- Si no, la secuencia es inválida.
- Se ignoran otros caracteres.

La secuencia es válida si la pila está vacía al final.

### Fragmento de Código Relevante

```javascript
function isValidParentheses(s) {
  const stack = [];
  const mapping = { ')': '(', ']': '[', '}': '{' };

  for (const char of s) {
    if (Object.values(mapping).includes(char)) {
      stack.push(char);
    } else if (char in mapping) {
      if (stack.length === 0 || stack.pop() !== mapping[char]) {
        return false;
      }
    } else {
      // Ignorar otros caracteres
      continue;
    }
  }

  return stack.length === 0;
}
```

### Ejemplo de Uso

```javascript
import isValidParentheses from './parentheses.js';

const testStrings = ["()", "()[]{}", "(]", "([)]", "{[]}"];
testStrings.forEach(s => {
  console.log(`¿Es '${s}' válido?`, isValidParentheses(s));
});
