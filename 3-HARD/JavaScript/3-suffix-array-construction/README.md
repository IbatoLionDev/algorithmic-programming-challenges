# Suffix Array Construction

## English

The suffix array is a powerful data structure used in string processing to enable efficient pattern searches and substring queries. This challenge involves constructing the suffix array and the LCP (Longest Common Prefix) array for a given string.

The suffix array is built by sorting all suffixes of the string. The LCP array stores the length of the longest common prefix between consecutive suffixes in the suffix array, which helps speed up pattern matching and other string processing tasks.

### Relevant Code Snippet

```javascript
class SuffixArray {
  constructor(text) {
    this.text = text;
    this.n = text.length;
    this.suffixArray = [];
    this.lcpArray = [];
  }

  buildSuffixArray() {
    this.suffixArray = Array.from({ length: this.n }, (_, i) => i);
    this.suffixArray.sort((a, b) => {
      const substrA = this.text.substring(a);
      const substrB = this.text.substring(b);
      if (substrA < substrB) return -1;
      if (substrA > substrB) return 1;
      return 0;
    });
    return this.suffixArray;
  }

  buildLCPArray() {
    if (this.suffixArray.length === 0) {
      this.buildSuffixArray();
    }

    this.lcpArray = new Array(this.n).fill(0);
    const invSuffix = new Array(this.n);

    for (let i = 0; i < this.n; i++) {
      invSuffix[this.suffixArray[i]] = i;
    }

    let k = 0;
    for (let i = 0; i < this.n; i++) {
      if (invSuffix[i] === this.n - 1) {
        k = 0;
        continue;
      }
      const j = this.suffixArray[invSuffix[i] + 1];
      while (i + k < this.n && j + k < this.n && this.text[i + k] === this.text[j + k]) {
        k++;
      }
      this.lcpArray[invSuffix[i]] = k;
      if (k > 0) k--;
    }

    return this.lcpArray;
  }
}
```

### History

Suffix arrays and LCP arrays are fundamental data structures in string processing, enabling efficient pattern matching, substring queries, and bioinformatics applications. They are a space-efficient alternative to suffix trees.

---

## Español

El arreglo de sufijos es una estructura de datos poderosa utilizada en el procesamiento de cadenas para permitir búsquedas eficientes de patrones y consultas de subcadenas. Este reto consiste en construir el arreglo de sufijos y el arreglo LCP (Longest Common Prefix) para una cadena dada.

El arreglo de sufijos se construye ordenando todos los sufijos de la cadena. El arreglo LCP almacena la longitud del prefijo común más largo entre sufijos consecutivos en el arreglo de sufijos, lo que ayuda a acelerar la búsqueda de patrones y otras tareas de procesamiento de cadenas.

### Fragmento de Código Relevante

```javascript
class SuffixArray {
  constructor(text) {
    this.text = text;
    this.n = text.length;
    this.suffixArray = [];
    this.lcpArray = [];
  }

  buildSuffixArray() {
    this.suffixArray = Array.from({ length: this.n }, (_, i) => i);
    this.suffixArray.sort((a, b) => {
      const substrA = this.text.substring(a);
      const substrB = this.text.substring(b);
      if (substrA < substrB) return -1;
      if (substrA > substrB) return 1;
      return 0;
    });
    return this.suffixArray;
  }

  buildLCPArray() {
    if (this.suffixArray.length === 0) {
      this.buildSuffixArray();
    }

    this.lcpArray = new Array(this.n).fill(0);
    const invSuffix = new Array(this.n);

    for (let i = 0; i < this.n; i++) {
      invSuffix[this.suffixArray[i]] = i;
    }

    let k = 0;
    for (let i = 0; i < this.n; i++) {
      if (invSuffix[i] === this.n - 1) {
        k = 0;
        continue;
      }
      const j = this.suffixArray[invSuffix[i] + 1];
      while (i + k < this.n && j + k < this.n && this.text[i + k] === this.text[j + k]) {
        k++;
      }
      this.lcpArray[invSuffix[i]] = k;
      if (k > 0) k--;
    }

    return this.lcpArray;
  }
}
```

### Historia

Los arreglos de sufijos y los arreglos LCP son estructuras de datos fundamentales en el procesamiento de cadenas, que permiten búsquedas eficientes de patrones, consultas de subcadenas y aplicaciones en bioinformática. Son una alternativa eficiente en espacio a los árboles de sufijos.
