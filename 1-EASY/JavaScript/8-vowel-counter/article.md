# Challenge Description and Solution

## English Version

### Challenge Description
Create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase letters.

### Code Explanation
The `countVowels` function converts the string to lowercase and then counts how many characters are vowels using a loop and checking membership in the vowels string.

### Relevant Code Snippet

```javascript
function countVowels(s) {
    const vowels = "aeiou";
    s = s.toLowerCase();
    let count = 0;
    for (const char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
```

### Example Usage

```javascript
const testStrings = ["Hello", "World", "Python", "OpenAI"];
testStrings.forEach(str => {
    console.log(`Number of vowels in '${str}': ${countVowels(str)}`);
});
```

---

## Versión en Español

### Descripción del Reto
Crea una función que cuente el número de vocales en una cadena dada. Considera tanto mayúsculas como minúsculas.

### Explicación del Código
La función `countVowels` convierte la cadena a minúsculas y luego cuenta cuántos caracteres son vocales utilizando un bucle y comprobando la pertenencia en la cadena de vocales.

### Fragmento de Código Relevante

```javascript
function countVowels(s) {
    const vowels = "aeiou";
    s = s.toLowerCase();
    let count = 0;
    for (const char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
```

### Ejemplo de Uso

```javascript
const testStrings = ["Hello", "World", "Python", "OpenAI"];
testStrings.forEach(str => {
    console.log(`Número de vocales en '${str}': ${countVowels(str)}`);
});
