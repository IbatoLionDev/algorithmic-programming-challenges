# Challenge Description and Solution

## English Version

### Challenge Description
Given a string and a dictionary, return all possible valid sentences that can be formed. This challenge requires recursion with memoization to avoid redundant solutions and explore multiple paths. Use object-oriented programming and follow the DRY principle.

### Code Explanation
The `WordBreak` class uses recursion with memoization to find all valid sentences that can be formed from the input string using words from the dictionary.

Key points:
- The `word_break` method recursively explores all substrings starting from the current index.
- Memoization stores results for each start index to avoid redundant computations.
- Sentences are constructed by concatenating valid words with results from recursive calls.

### Relevant Code Snippet

```python
from typing import List, Set, Dict

class WordBreak:
    def __init__(self, s: str, word_dict: Set[str]):
        self.s = s
        self.word_dict = word_dict
        self.memo: Dict[int, List[str]] = {}

    def word_break(self, start: int = 0) -> List[str]:
        if start == len(self.s):
            return [""]

        if start in self.memo:
            return self.memo[start]

        sentences = []
        for end in range(start + 1, len(self.s) + 1):
            word = self.s[start:end]
            if word in self.word_dict:
                for subsentence in self.word_break(end):
                    sentence = word + (" " + subsentence if subsentence else "")
                    sentences.append(sentence)

        self.memo[start] = sentences
        return sentences
```

### Historical Context
The word break problem is a classic example of recursion with memoization, commonly used in natural language processing and text segmentation tasks. It efficiently explores multiple segmentation paths while avoiding redundant computations.

---

## Versión en Español

### Descripción del Reto
Dada una cadena y un diccionario, devuelve todas las posibles oraciones válidas que se pueden formar. Este reto requiere recursión con memoización para evitar soluciones redundantes y explorar múltiples caminos. Usa programación orientada a objetos y sigue el principio DRY.

### Explicación del Código
La clase `WordBreak` usa recursión con memoización para encontrar todas las oraciones válidas que se pueden formar a partir de la cadena de entrada usando palabras del diccionario.

Puntos clave:
- El método `word_break` explora recursivamente todos los subcadenas desde el índice actual.
- La memoización almacena resultados para cada índice de inicio para evitar cálculos redundantes.
- Las oraciones se construyen concatenando palabras válidas con resultados de llamadas recursivas.

### Fragmento de Código Relevante

```python
from typing import List, Set, Dict

class WordBreak:
    def __init__(self, s: str, word_dict: Set[str]):
        self.s = s
        self.word_dict = word_dict
        self.memo: Dict[int, List[str]] = {}

    def word_break(self, start: int = 0) -> List[str]:
        if start == len(self.s):
            return [""]

        if start in self.memo:
            return self.memo[start]

        sentences = []
        for end in range(start + 1, len(self.s) + 1):
            word = self.s[start:end]
            if word in self.word_dict:
                for subsentence in self.word_break(end):
                    sentence = word + (" " + subsentence if subsentence else "")
                    sentences.append(sentence)

        self.memo[start] = sentences
        return sentences
```

### Contexto Histórico
El problema de segmentación de palabras es un ejemplo clásico de recursión con memoización, comúnmente usado en procesamiento de lenguaje natural y tareas de segmentación de texto. Explora eficientemente múltiples caminos de segmentación evitando cálculos redundantes.
