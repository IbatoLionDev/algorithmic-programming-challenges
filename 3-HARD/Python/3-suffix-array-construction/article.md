# Challenge Description and Solution

## English Version

### Challenge Description
Construct a suffix array (and optionally an LCP array) for a given string, enabling very efficient pattern searches. This is an advanced challenge in string processing. Use object-oriented programming and follow the DRY principle.

### Code Explanation
The `SuffixArray` class builds the suffix array by sorting all suffixes of the string. The LCP (Longest Common Prefix) array is constructed to store the length of the longest common prefix between consecutive suffixes in the suffix array.

The LCP array is useful for speeding up pattern matching and other string processing tasks.

### Relevant Code Snippet

```python
from typing import List

class SuffixArray:
    def __init__(self, text: str):
        self.text = text
        self.n = len(text)
        self.suffix_array = []
        self.lcp_array = []

    def build_suffix_array(self) -> List[int]:
        self.suffix_array = sorted(range(self.n), key=lambda i: self.text[i:])
        return self.suffix_array

    def build_lcp_array(self) -> List[int]:
        if not self.suffix_array:
            self.build_suffix_array()

        self.lcp_array = [0] * self.n
        inv_suffix = [0] * self.n

        for i, suffix in enumerate(self.suffix_array):
            inv_suffix[suffix] = i

        k = 0
        for i in range(self.n):
            if inv_suffix[i] == self.n - 1:
                k = 0
                continue
            j = self.suffix_array[inv_suffix[i] + 1]
            while i + k < self.n and j + k < self.n and self.text[i + k] == self.text[j + k]:
                k += 1
            self.lcp_array[inv_suffix[i]] = k
            if k:
                k -= 1

        return self.lcp_array
```

### Historical Context
Suffix arrays and LCP arrays are fundamental data structures in string processing, enabling efficient pattern matching, substring queries, and bioinformatics applications. They are a space-efficient alternative to suffix trees.

---

## Versión en Español

### Descripción del Reto
Construye un arreglo de sufijos (y opcionalmente un arreglo LCP) para una cadena dada, permitiendo búsquedas de patrones muy eficientes. Este es un reto avanzado en procesamiento de cadenas. Usa programación orientada a objetos y sigue el principio DRY.

### Explicación del Código
La clase `SuffixArray` construye el arreglo de sufijos ordenando todos los sufijos de la cadena. El arreglo LCP (Longest Common Prefix) se construye para almacenar la longitud del prefijo común más largo entre sufijos consecutivos en el arreglo de sufijos.

El arreglo LCP es útil para acelerar la búsqueda de patrones y otras tareas de procesamiento de cadenas.

### Fragmento de Código Relevante

```python
from typing import List

class SuffixArray:
    def __init__(self, text: str):
        self.text = text
        self.n = len(text)
        self.suffix_array = []
        self.lcp_array = []

    def build_suffix_array(self) -> List[int]:
        self.suffix_array = sorted(range(self.n), key=lambda i: self.text[i:])
        return self.suffix_array

    def build_lcp_array(self) -> List[int]:
        if not self.suffix_array:
            self.build_suffix_array()

        self.lcp_array = [0] * self.n
        inv_suffix = [0] * self.n

        for i, suffix in enumerate(self.suffix_array):
            inv_suffix[suffix] = i

        k = 0
        for i in range(self.n):
            if inv_suffix[i] == self.n - 1:
                k = 0
                continue
            j = self.suffix_array[inv_suffix[i] + 1]
            while i + k < self.n and j + k < self.n and self.text[i + k] == self.text[j + k]:
                k += 1
            self.lcp_array[inv_suffix[i]] = k
            if k:
                k -= 1

        return self.lcp_array
```

### Contexto Histórico
Los arreglos de sufijos y los arreglos LCP son estructuras de datos fundamentales en el procesamiento de cadenas, que permiten búsquedas eficientes de patrones, consultas de subcadenas y aplicaciones en bioinformática. Son una alternativa eficiente en espacio a los árboles de sufijos.
