# Challenge Description and Solution

## English Version

### Challenge Description
Given a string, find the length of the longest substring without repeating characters. Use sliding window techniques to optimize the solution's performance.

### Code Explanation
The solution uses a sliding window approach with two pointers (`left` and `right`) and a map to track the last index of each character. When a repeated character is found within the current window, the left pointer moves to the right of the previous occurrence to maintain a substring without duplicates.

The function returns both the length and the longest substring without repeating characters.

### Relevant Code Snippet

```javascript
class LongestUniqueSubstring {
    static lengthOfLongestSubstring(s) {
        const charIndexMap = new Map();
        let left = 0;
        let maxLength = 0;
        let maxSubstring = "";

        for (let right = 0; right < s.length; right++) {
            if (charIndexMap.has(s[right]) && charIndexMap.get(s[right]) >= left) {
                left = charIndexMap.get(s[right]) + 1;
            }
            charIndexMap.set(s[right], right);
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                maxSubstring = s.substring(left, right + 1);
            }
        }
        return { maxLength, maxSubstring };
    }
}
```

### Example Usage

```javascript
import LongestUniqueSubstring from './longestUniqueSubstring.js';

const testString = "abcabcbb";
const { maxLength, maxSubstring } = LongestUniqueSubstring.lengthOfLongestSubstring(testString);
console.log(`Length of longest substring without repeating characters: ${maxLength}`);
console.log(`Longest substring without repeating characters: ${maxSubstring}`);
```

---

## Versión en Español

### Descripción del Reto
Dada una cadena, encuentra la longitud de la subcadena más larga sin caracteres repetidos. Usa técnicas de ventana deslizante para optimizar el rendimiento de la solución.

### Explicación del Código
La solución utiliza un enfoque de ventana deslizante con dos punteros (`left` y `right`) y un mapa para rastrear el último índice de cada carácter. Cuando se encuentra un carácter repetido dentro de la ventana actual, el puntero izquierdo se mueve a la derecha de la ocurrencia previa para mantener una subcadena sin duplicados.

La función retorna tanto la longitud como la subcadena más larga sin caracteres repetidos.

### Fragmento de Código Relevante

```javascript
class LongestUniqueSubstring {
    static lengthOfLongestSubstring(s) {
        const charIndexMap = new Map();
        let left = 0;
        let maxLength = 0;
        let maxSubstring = "";

        for (let right = 0; right < s.length; right++) {
            if (charIndexMap.has(s[right]) && charIndexMap.get(s[right]) >= left) {
                left = charIndexMap.get(s[right]) + 1;
            }
            charIndexMap.set(s[right], right);
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                maxSubstring = s.substring(left, right + 1);
            }
        }
        return { maxLength, maxSubstring };
    }
}
```

### Ejemplo de Uso

```javascript
import LongestUniqueSubstring from './longestUniqueSubstring.js';

const testString = "abcabcbb";
const { maxLength, maxSubstring } = LongestUniqueSubstring.lengthOfLongestSubstring(testString);
console.log(`Longitud de la subcadena más larga sin caracteres repetidos: ${maxLength}`);
console.log(`Subcadena más larga sin caracteres repetidos: ${maxSubstring}`);
