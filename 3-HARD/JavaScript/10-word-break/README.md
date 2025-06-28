# Word Break

## English

The word break problem is a classic example of recursion with memoization, commonly used in natural language processing and text segmentation tasks. It efficiently explores multiple segmentation paths while avoiding redundant computations.

This challenge involves returning all possible valid sentences that can be formed from a string using words from a dictionary.

### Relevant Code Snippet

```javascript
class WordBreak {
  constructor(s, wordDict) {
    this.s = s;
    this.wordDict = new Set(wordDict);
    this.memo = new Map();
  }

  wordBreak(start = 0) {
    if (start === this.s.length) {
      return [""];
    }

    if (this.memo.has(start)) {
      return this.memo.get(start);
    }

    const sentences = [];
    for (let end = start + 1; end <= this.s.length; end++) {
      const word = this.s.substring(start, end);
      if (this.wordDict.has(word)) {
        const subsentences = this.wordBreak(end);
        for (const subsentence of subsentences) {
          const sentence = word + (subsentence ? " " + subsentence : "");
          sentences.push(sentence);
        }
      }
    }

    this.memo.set(start, sentences);
    return sentences;
  }
}
```

### History

The word break problem has been widely studied in computer science and is commonly used in natural language processing and text segmentation.

---

## Español

Segmentación de Palabras

El problema de segmentación de palabras es un ejemplo clásico de recursión con memoización, comúnmente usado en procesamiento de lenguaje natural y tareas de segmentación de texto. Explora eficientemente múltiples caminos de segmentación evitando cálculos redundantes.

Este reto consiste en devolver todas las posibles oraciones válidas que se pueden formar a partir de una cadena usando palabras de un diccionario.

### Fragmento de Código Relevante

```javascript
class WordBreak {
  constructor(s, wordDict) {
    this.s = s;
    this.wordDict = new Set(wordDict);
    this.memo = new Map();
  }

  wordBreak(start = 0) {
    if (start === this.s.length) {
      return [""];
    }

    if (this.memo.has(start)) {
      return this.memo.get(start);
    }

    const sentences = [];
    for (let end = start + 1; end <= this.s.length; end++) {
      const word = this.s.substring(start, end);
      if (this.wordDict.has(word)) {
        const subsentences = this.wordBreak(end);
        for (const subsentence of subsentences) {
          const sentence = word + (subsentence ? " " + subsentence : "");
          sentences.push(sentence);
        }
      }
    }

    this.memo.set(start, sentences);
    return sentences;
  }
}
```

### Historia

El problema de segmentación de palabras ha sido ampliamente estudiado en ciencias de la computación y es comúnmente usado en procesamiento de lenguaje natural y segmentación de texto.
