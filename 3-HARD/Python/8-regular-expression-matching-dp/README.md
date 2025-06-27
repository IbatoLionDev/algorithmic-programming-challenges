# Challenge Description and Solution

## English Version

### Challenge Description
Design a regular expression matching engine that supports special characters like '.' and '*', using dynamic programming techniques to efficiently handle branching and backtracking. Use object-oriented programming and follow the DRY principle.

### Code Explanation
The `RegexMatcher` class uses a 2D dynamic programming table to determine if the text matches the pattern. It handles '.' which matches any single character, and '*' which matches zero or more of the preceding element.

Key points:
- `dp[i][j]` indicates whether the first i characters of the text match the first j characters of the pattern.
- Initialization handles patterns that can match an empty string.
- The `matches` helper function checks character matches and handles '*' logic.

### Relevant Code Snippet

```python
class RegexMatcher:
    def __init__(self, text: str, pattern: str):
        self.text = text
        self.pattern = pattern
        self.dp = [[False] * (len(pattern) + 1) for _ in range(len(text) + 1)]

    def is_match(self) -> bool:
        self.dp[0][0] = True

        for j in range(2, len(self.pattern) + 1):
            if self.pattern[j - 1] == '*':
                self.dp[0][j] = self.dp[0][j - 2]

        def matches(i, j):
            if self.pattern[j - 1] == '.' or self.pattern[j - 1] == self.text[i - 1]:
                return self.dp[i - 1][j - 1]
            if self.pattern[j - 1] == '*':
                zero = self.dp[i][j - 2]
                one_or_more = (
                    (self.pattern[j - 2] == '.' or self.pattern[j - 2] == self.text[i - 1])
                    and self.dp[i - 1][j]
                )
                return zero or one_or_more
            return False

        for i in range(1, len(self.text) + 1):
            for j in range(1, len(self.pattern) + 1):
                self.dp[i][j] = matches(i, j)

        return self.dp[len(self.text)][len(self.pattern)]
```

### Historical Context
Regular expression matching is a fundamental problem in computer science, with applications in text processing, compilers, and search engines. Dynamic programming provides an efficient way to handle complex patterns with branching and repetition.

---

## Versión en Español

### Descripción del Reto
Diseña un motor de coincidencia de expresiones regulares que soporte caracteres especiales como '.' y '*', usando técnicas de programación dinámica para manejar eficientemente el branching y backtracking. Usa programación orientada a objetos y sigue el principio DRY.

### Explicación del Código
La clase `RegexMatcher` usa una tabla 2D de programación dinámica para determinar si el texto coincide con el patrón. Maneja '.' que coincide con cualquier carácter y '*' que coincide con cero o más del elemento anterior.

Puntos clave:
- `dp[i][j]` indica si los primeros i caracteres del texto coinciden con los primeros j caracteres del patrón.
- La inicialización maneja patrones que pueden coincidir con una cadena vacía.
- La función auxiliar `matches` verifica coincidencias de caracteres y maneja la lógica de '*'.

### Fragmento de Código Relevante

```python
class RegexMatcher:
    def __init__(self, text: str, pattern: str):
        self.text = text
        self.pattern = pattern
        self.dp = [[False] * (len(pattern) + 1) for _ in range(len(text) + 1)]

    def is_match(self) -> bool:
        self.dp[0][0] = True

        for j in range(2, len(self.pattern) + 1):
            if self.pattern[j - 1] == '*':
                self.dp[0][j] = self.dp[0][j - 2]

        def matches(i, j):
            if self.pattern[j - 1] == '.' or self.pattern[j - 1] == self.text[i - 1]:
                return self.dp[i - 1][j - 1]
            if self.pattern[j - 1] == '*':
                zero = self.dp[i][j - 2]
                one_or_more = (
                    (self.pattern[j - 2] == '.' or self.pattern[j - 2] == self.text[i - 1])
                    and self.dp[i - 1][j]
                )
                return zero or one_or_more
            return False

        for i in range(1, len(self.text) + 1):
            for j in range(1, len(self.pattern) + 1):
                self.dp[i][j] = matches(i, j)

        return self.dp[len(self.text)][len(self.pattern)]
```

### Contexto Histórico
La coincidencia de expresiones regulares es un problema fundamental en ciencias de la computación, con aplicaciones en procesamiento de texto, compiladores y motores de búsqueda. La programación dinámica proporciona una forma eficiente de manejar patrones complejos con branching y repetición.
