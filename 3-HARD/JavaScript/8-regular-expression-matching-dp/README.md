# Regular Expression Matching with Dynamic Programming

## English

Regular expression matching is a fundamental problem in computer science, with applications in text processing, compilers, and search engines. Dynamic programming provides an efficient way to handle complex patterns with branching and repetition.

This challenge involves designing a regular expression matching engine that supports special characters like '.' and '*', using dynamic programming techniques.

### Relevant Code Snippet

```javascript
class RegexMatcher {
  constructor(text, pattern) {
    this.text = text;
    this.pattern = pattern;
    this.dp = Array.from({ length: text.length + 1 }, () =>
      new Array(pattern.length + 1).fill(false)
    );
  }

  isMatch() {
    this.dp[0][0] = true;

    for (let j = 2; j <= this.pattern.length; j++) {
      if (this.pattern[j - 1] === '*') {
        this.dp[0][j] = this.dp[0][j - 2];
      }
    }

    const matches = (i, j) => {
      if (
        this.pattern[j - 1] === '.' ||
        this.pattern[j - 1] === this.text[i - 1]
      ) {
        return this.dp[i - 1][j - 1];
      }
      if (this.pattern[j - 1] === '*') {
        const zero = this.dp[i][j - 2];
        const oneOrMore =
          (this.pattern[j - 2] === '.' ||
            this.pattern[j - 2] === this.text[i - 1]) &&
          this.dp[i - 1][j];
        return zero || oneOrMore;
      }
      return false;
    };

    for (let i = 1; i <= this.text.length; i++) {
      for (let j = 1; j <= this.pattern.length; j++) {
        this.dp[i][j] = matches(i, j);
      }
    }

    return this.dp[this.text.length][this.pattern.length];
  }
}
```

### History

Regular expression matching has been extensively studied in computer science and is widely used in text processing, compilers, and search engines.

---

## Español

Coincidencia de Expresiones Regulares con Programación Dinámica

La coincidencia de expresiones regulares es un problema fundamental en ciencias de la computación, con aplicaciones en procesamiento de texto, compiladores y motores de búsqueda. La programación dinámica proporciona una forma eficiente de manejar patrones complejos con branching y repetición.

Este reto consiste en diseñar un motor de coincidencia de expresiones regulares que soporte caracteres especiales como '.' y '*', usando técnicas de programación dinámica.

### Fragmento de Código Relevante

```javascript
class RegexMatcher {
  constructor(text, pattern) {
    this.text = text;
    this.pattern = pattern;
    this.dp = Array.from({ length: text.length + 1 }, () =>
      new Array(pattern.length + 1).fill(false)
    );
  }

  isMatch() {
    this.dp[0][0] = true;

    for (let j = 2; j <= this.pattern.length; j++) {
      if (this.pattern[j - 1] === '*') {
        this.dp[0][j] = this.dp[0][j - 2];
      }
    }

    const matches = (i, j) => {
      if (
        this.pattern[j - 1] === '.' ||
        this.pattern[j - 1] === this.text[i - 1]
      ) {
        return this.dp[i - 1][j - 1];
      }
      if (this.pattern[j - 1] === '*') {
        const zero = this.dp[i][j - 2];
        const oneOrMore =
          (this.pattern[j - 2] === '.' ||
            this.pattern[j - 2] === this.text[i - 1]) &&
          this.dp[i - 1][j];
        return zero || oneOrMore;
      }
      return false;
    };

    for (let i = 1; i <= this.text.length; i++) {
      for (let j = 1; j <= this.pattern.length; j++) {
        this.dp[i][j] = matches(i, j);
      }
    }

    return this.dp[this.text.length][this.pattern.length];
  }
}
```

### Historia

La coincidencia de expresiones regulares ha sido ampliamente estudiada en ciencias de la computación y es ampliamente utilizada en procesamiento de texto, compiladores y motores de búsqueda.
