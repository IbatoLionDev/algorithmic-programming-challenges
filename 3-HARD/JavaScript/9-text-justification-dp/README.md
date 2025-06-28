# Text Justification with Dynamic Programming

## English

Text justification is a classic problem in document formatting and typesetting. Dynamic programming provides an optimal solution by minimizing the penalty of uneven spacing, improving readability and aesthetics.

This challenge involves implementing a dynamic programming algorithm to justify text optimally, minimizing penalties for irregular spaces.

### Relevant Code Snippet

```javascript
class TextJustifier {
  constructor(words, maxWidth) {
    this.words = words;
    this.maxWidth = maxWidth;
    this.n = words.length;
    this.dp = new Array(this.n + 1).fill(Infinity);
    this.dp[this.n] = 0;
    this.breaks = new Array(this.n + 1).fill(-1);
  }

  _cost(i, j) {
    const length =
      this.words.slice(i, j + 1).reduce((acc, w) => acc + w.length, 0) +
      (j - i);
    if (length > this.maxWidth) {
      return Infinity;
    }
    return Math.pow(this.maxWidth - length, 3);
  }

  justify() {
    for (let i = this.n - 1; i >= 0; i--) {
      for (let j = i; j < this.n; j++) {
        const cost = this._cost(i, j);
        if (cost === Infinity) {
          break;
        }
        if (this.dp[j + 1] + cost < this.dp[i]) {
          this.dp[i] = this.dp[j + 1] + cost;
          this.breaks[i] = j;
        }
      }
    }

    const lines = [];
    let i = 0;
    while (i < this.n) {
      const j = this.breaks[i];
      const lineWords = this.words.slice(i, j + 1);
      const line = this._justifyLine(lineWords);
      lines.push(line);
      i = j + 1;
    }
    return lines;
  }

  _justifyLine(lineWords) {
    if (lineWords.length === 1) {
      return lineWords[0] + " ".repeat(this.maxWidth - lineWords[0].length);
    }

    const totalSpaces =
      this.maxWidth - lineWords.reduce((acc, w) => acc + w.length, 0);
    const spacesBetweenWords = lineWords.length - 1;
    const space = Math.floor(totalSpaces / spacesBetweenWords);
    const extra = totalSpaces % spacesBetweenWords;

    let line = "";
    for (let i = 0; i < lineWords.length - 1; i++) {
      line += lineWords[i] + " ".repeat(space + (i < extra ? 1 : 0));
    }
    line += lineWords[lineWords.length - 1];
    return line;
  }
}
```

### History

Text justification has been extensively studied in document formatting and typesetting, with dynamic programming providing an optimal solution to improve readability and aesthetics.

---

## Español

Justificación de Texto con Programación Dinámica

La justificación de texto es un problema clásico en el formateo y composición de documentos. La programación dinámica proporciona una solución óptima al minimizar la penalización por espacios desiguales, mejorando la legibilidad y estética.

Este reto consiste en implementar un algoritmo de programación dinámica para justificar texto de manera óptima, minimizando penalizaciones por espacios irregulares.

### Fragmento de Código Relevante

```javascript
class TextJustifier {
  constructor(words, maxWidth) {
    this.words = words;
    this.maxWidth = maxWidth;
    this.n = words.length;
    this.dp = new Array(this.n + 1).fill(Infinity);
    this.dp[this.n] = 0;
    this.breaks = new Array(this.n + 1).fill(-1);
  }

  _cost(i, j) {
    const length =
      this.words.slice(i, j + 1).reduce((acc, w) => acc + w.length, 0) +
      (j - i);
    if (length > this.maxWidth) {
      return Infinity;
    }
    return Math.pow(this.maxWidth - length, 3);
  }

  justify() {
    for (let i = this.n - 1; i >= 0; i--) {
      for (let j = i; j < this.n; j++) {
        const cost = this._cost(i, j);
        if (cost === Infinity) {
          break;
        }
        if (this.dp[j + 1] + cost < this.dp[i]) {
          this.dp[i] = this.dp[j + 1] + cost;
          this.breaks[i] = j;
        }
      }
    }

    const lines = [];
    let i = 0;
    while (i < this.n) {
      const j = this.breaks[i];
      const lineWords = this.words.slice(i, j + 1);
      const line = this._justifyLine(lineWords);
      lines.push(line);
      i = j + 1;
    }
    return lines;
  }

  _justifyLine(lineWords) {
    if (lineWords.length === 1) {
      return lineWords[0] + " ".repeat(this.maxWidth - lineWords[0].length);
    }

    const totalSpaces =
      this.maxWidth - lineWords.reduce((acc, w) => acc + w.length, 0);
    const spacesBetweenWords = lineWords.length - 1;
    const space = Math.floor(totalSpaces / spacesBetweenWords);
    const extra = totalSpaces % spacesBetweenWords;

    let line = "";
    for (let i = 0; i < lineWords.length - 1; i++) {
      line += lineWords[i] + " ".repeat(space + (i < extra ? 1 : 0));
    }
    line += lineWords[lineWords.length - 1];
    return line;
  }
}
```

### Historia

La justificación de texto ha sido ampliamente estudiada en el formateo y composición de documentos, y la programación dinámica proporciona una solución óptima para mejorar la legibilidad y estética.
