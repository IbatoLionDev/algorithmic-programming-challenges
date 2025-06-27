# Challenge Description and Solution

## English Version

### Challenge Description
Given two words (start and end) and a dictionary, implement an algorithm to find the shortest transformation sequence where each word differs by exactly one character from the previous one. This challenge requires applying search techniques like BFS.

### Code Explanation
The solution uses a breadth-first search (BFS) approach to explore all possible one-character transformations from the current word. It uses a queue to keep track of the current word and the path taken to reach it. The search continues until the end word is found or all possibilities are exhausted.

### Relevant Code Snippet

```javascript
function wordLadder(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) {
    return [];
  }

  const queue = [[beginWord, [beginWord]]];
  const visited = new Set([beginWord]);

  while (queue.length > 0) {
    const [currentWord, path] = queue.shift();
    if (currentWord === endWord) {
      return path;
    }

    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c <= 122; c++) { // 'a' to 'z'
        const char = String.fromCharCode(c);
        const nextWord = currentWord.slice(0, i) + char + currentWord.slice(i + 1);
        if (wordSet.has(nextWord) && !visited.has(nextWord)) {
          visited.add(nextWord);
          queue.push([nextWord, [...path, nextWord]]);
        }
      }
    }
  }

  return [];
}
```

### Example Usage

```javascript
import wordLadder from './wordLadder.js';

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
const path = wordLadder(beginWord, endWord, wordList);
console.log("Shortest transformation sequence:", path);
```

---

## Versión en Español

### Descripción del Reto
Dadas dos palabras (inicio y fin) y un diccionario, implementa un algoritmo para encontrar la secuencia de transformación más corta donde cada palabra difiere en exactamente un carácter de la anterior. Este reto requiere aplicar técnicas de búsqueda como BFS.

### Explicación del Código
La solución usa un enfoque de búsqueda en anchura (BFS) para explorar todas las posibles transformaciones de un carácter desde la palabra actual. Usa una cola para llevar el seguimiento de la palabra actual y el camino tomado para llegar a ella. La búsqueda continúa hasta encontrar la palabra final o agotar todas las posibilidades.

### Fragmento de Código Relevante

```javascript
function wordLadder(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) {
    return [];
  }

  const queue = [[beginWord, [beginWord]]];
  const visited = new Set([beginWord]);

  while (queue.length > 0) {
    const [currentWord, path] = queue.shift();
    if (currentWord === endWord) {
      return path;
    }

    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c <= 122; c++) { // 'a' to 'z'
        const char = String.fromCharCode(c);
        const nextWord = currentWord.slice(0, i) + char + currentWord.slice(i + 1);
        if (wordSet.has(nextWord) && !visited.has(nextWord)) {
          visited.add(nextWord);
          queue.push([nextWord, [...path, nextWord]]);
        }
      }
    }
  }

  return [];
}
```

### Ejemplo de Uso

```javascript
import wordLadder from './wordLadder.js';

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
const path = wordLadder(beginWord, endWord, wordList);
console.log("Secuencia de transformación más corta:", path);
