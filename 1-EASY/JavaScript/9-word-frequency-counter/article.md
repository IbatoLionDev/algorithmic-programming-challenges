# Challenge Description and Solution

## English Version

### Challenge Description
Create a function that counts the frequency of each word in a given text. Consider normalization of case and removal of punctuation.

### Code Explanation
The `wordFrequency` function converts the text to lowercase, removes punctuation using a regex, and then counts the frequency of each word using an object.

### Relevant Code Snippet

```javascript
function wordFrequency(text) {
    const punctuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
    text = text.toLowerCase().replace(punctuationRegex, '');
    const words = text.split(/\s+/);
    const freq = {};
    for (const word of words) {
        if (word.length === 0) continue;
        freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
}
```

### Example Usage

```javascript
const sampleText = "Hello world! Hello everyone. Welcome to the world of Python.";
const frequencies = wordFrequency(sampleText);
for (const [word, count] of Object.entries(frequencies)) {
    console.log(`'${word}': ${count}`);
}
```

---

## Versión en Español

### Descripción del Reto
Crea una función que cuente la frecuencia de cada palabra en un texto dado. Considera la normalización de mayúsculas y minúsculas y la eliminación de signos de puntuación.

### Explicación del Código
La función `wordFrequency` convierte el texto a minúsculas, elimina signos de puntuación usando una expresión regular, y luego cuenta la frecuencia de cada palabra utilizando un objeto.

### Fragmento de Código Relevante

```javascript
function wordFrequency(text) {
    const punctuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
    text = text.toLowerCase().replace(punctuationRegex, '');
    const words = text.split(/\s+/);
    const freq = {};
    for (const word of words) {
        if (word.length === 0) continue;
        freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
}
```

### Ejemplo de Uso

```javascript
const sampleText = "Hello world! Hello everyone. Welcome to the world of Python.";
const frequencies = wordFrequency(sampleText);
for (const [word, count] of Object.entries(frequencies)) {
    console.log(`'${word}': ${count}`);
}
