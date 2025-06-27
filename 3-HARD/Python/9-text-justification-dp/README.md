# Challenge Description and Solution

## English Version

### Challenge Description
Given a set of words and a maximum width, implement a dynamic programming algorithm to justify text optimally, minimizing penalties for irregular spaces. Use object-oriented programming and follow the DRY principle.

### Code Explanation
The `TextJustifier` class uses dynamic programming to find the optimal way to break lines minimizing the cubic penalty of extra spaces. It stores the minimum cost for justifying from each word to the end and the breaks to reconstruct the lines.

Key methods:
- `_cost`: Calculates the penalty cost for a line.
- `justify`: Computes the optimal breaks and returns justified lines.
- `_justify_line`: Distributes spaces evenly between words in a line.

### Relevant Code Snippet

```python
from typing import List

class TextJustifier:
    def __init__(self, words: List[str], max_width: int):
        self.words = words
        self.max_width = max_width
        self.n = len(words)
        self.dp = [float('inf')] * (self.n + 1)
        self.dp[self.n] = 0
        self.breaks = [-1] * (self.n + 1)

    def _cost(self, i: int, j: int) -> float:
        length = sum(len(self.words[k]) for k in range(i, j + 1)) + (j - i)
        if length > self.max_width:
            return float('inf')
        return (self.max_width - length) ** 3

    def justify(self) -> List[str]:
        for i in range(self.n - 1, -1, -1):
            for j in range(i, self.n):
                cost = self._cost(i, j)
                if cost == float('inf'):
                    break
                if self.dp[j + 1] + cost < self.dp[i]:
                    self.dp[i] = self.dp[j + 1] + cost
                    self.breaks[i] = j

        lines = []
        i = 0
        while i < self.n:
            j = self.breaks[i]
            line_words = self.words[i:j + 1]
            line = self._justify_line(line_words)
            lines.append(line)
            i = j + 1
        return lines

    def _justify_line(self, line_words: List[str]) -> str:
        if len(line_words) == 1:
            return line_words[0] + ' ' * (self.max_width - len(line_words[0]))

        total_spaces = self.max_width - sum(len(word) for word in line_words)
        spaces_between_words = len(line_words) - 1
        space, extra = divmod(total_spaces, spaces_between_words)

        line = ''
        for i, word in enumerate(line_words[:-1]):
            line += word + ' ' * (space + (1 if i < extra else 0))
        line += line_words[-1]
        return line
```

### Historical Context
Text justification is a classic problem in document formatting and typesetting. Dynamic programming provides an optimal solution by minimizing the penalty of uneven spacing, improving readability and aesthetics.

---

## Versión en Español

### Descripción del Reto
Dado un conjunto de palabras y un ancho máximo, implementa un algoritmo de programación dinámica para justificar texto de manera óptima, minimizando penalizaciones por espacios irregulares. Usa programación orientada a objetos y sigue el principio DRY.

### Explicación del Código
La clase `TextJustifier` usa programación dinámica para encontrar la mejor forma de dividir líneas minimizando la penalización cúbica de espacios extra. Almacena el costo mínimo para justificar desde cada palabra hasta el final y las divisiones para reconstruir las líneas.

Métodos clave:
- `_cost`: Calcula el costo de penalización para una línea.
- `justify`: Calcula las divisiones óptimas y devuelve las líneas justificadas.
- `_justify_line`: Distribuye espacios uniformemente entre las palabras de una línea.

### Fragmento de Código Relevante

```python
from typing import List

class TextJustifier:
    def __init__(self, words: List[str], max_width: int):
        self.words = words
        self.max_width = max_width
        self.n = len(words)
        self.dp = [float('inf')] * (self.n + 1)
        self.dp[self.n] = 0
        self.breaks = [-1] * (self.n + 1)

    def _cost(self, i: int, j: int) -> float:
        length = sum(len(self.words[k]) for k in range(i, j + 1)) + (j - i)
        if length > self.max_width:
            return float('inf')
        return (self.max_width - length) ** 3

    def justify(self) -> List[str]:
        for i in range(self.n - 1, -1, -1):
            for j in range(i, self.n):
                cost = self._cost(i, j)
                if cost == float('inf'):
                    break
                if self.dp[j + 1] + cost < self.dp[i]:
                    self.dp[i] = self.dp[j + 1] + cost
                    self.breaks[i] = j

        lines = []
        i = 0
        while i < self.n:
            j = self.breaks[i]
            line_words = self.words[i:j + 1]
            line = self._justify_line(line_words)
            lines.append(line)
            i = j + 1
        return lines

    def _justify_line(self, line_words: List[str]) -> str:
        if len(line_words) == 1:
            return line_words[0] + ' ' * (self.max_width - len(line_words[0]))

        total_spaces = self.max_width - sum(len(word) for word in line_words)
        spaces_between_words = len(line_words) - 1
        space, extra = divmod(total_spaces, spaces_between_words)

        line = ''
        for i, word in enumerate(line_words[:-1]):
            line += word + ' ' * (space + (1 if i < extra else 0))
        line += line_words[-1]
        return line
```

### Contexto Histórico
La justificación de texto es un problema clásico en el formateo y composición de documentos. La programación dinámica proporciona una solución óptima al minimizar la penalización por espacios desiguales, mejorando la legibilidad y estética.
