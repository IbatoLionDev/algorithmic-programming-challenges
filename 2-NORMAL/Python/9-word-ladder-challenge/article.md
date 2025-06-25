# Challenge Description and Solution

## English Version

### Challenge Description
Given two words (start and end) and a dictionary, implement an algorithm to find the shortest transformation sequence where each word differs by exactly one character from the previous one. This challenge requires applying search techniques like BFS.

### Code Explanation
The solution uses a breadth-first search (BFS) approach to explore all possible one-character transformations from the current word. It uses a queue to keep track of the current word and the path taken to reach it. The search continues until the end word is found or all possibilities are exhausted.

### Relevant Code Snippet

```python
from collections import deque

def word_ladder(begin_word, end_word, word_list):
    word_set = set(word_list)
    if end_word not in word_set:
        return []

    queue = deque([(begin_word, [begin_word])])
    visited = set([begin_word])

    while queue:
        current_word, path = queue.popleft()
        if current_word == end_word:
            return path

        for i in range(len(current_word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                next_word = current_word[:i] + c + current_word[i+1:]
                if next_word in word_set and next_word not in visited:
                    visited.add(next_word)
                    queue.append((next_word, path + [next_word]))

    return []
```

### Historical Context
The word ladder problem is a classic puzzle popularized by Lewis Carroll. It is often used to illustrate graph traversal algorithms and shortest path problems in computer science.

---

## Versión en Español

### Descripción del Reto
Dadas dos palabras (inicio y fin) y un diccionario, implementa un algoritmo para encontrar la secuencia de transformación más corta donde cada palabra difiere en exactamente un carácter de la anterior. Este reto requiere aplicar técnicas de búsqueda como BFS.

### Explicación del Código
La solución usa un enfoque de búsqueda en anchura (BFS) para explorar todas las posibles transformaciones de un carácter desde la palabra actual. Usa una cola para llevar el seguimiento de la palabra actual y el camino tomado para llegar a ella. La búsqueda continúa hasta encontrar la palabra final o agotar todas las posibilidades.

### Fragmento de Código Relevante

```python
from collections import deque

def word_ladder(begin_word, end_word, word_list):
    word_set = set(word_list)
    if end_word not in word_set:
        return []

    queue = deque([(begin_word, [begin_word])])
    visited = set([begin_word])

    while queue:
        current_word, path = queue.popleft()
        if current_word == end_word:
            return path

        for i in range(len(current_word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                next_word = current_word[:i] + c + current_word[i+1:]
                if next_word in word_set and next_word not in visited:
                    visited.add(next_word)
                    queue.append((next_word, path + [next_word]))

    return []
```

### Contexto Histórico
El problema del word ladder es un rompecabezas clásico popularizado por Lewis Carroll. Se usa frecuentemente para ilustrar algoritmos de recorrido de grafos y problemas de camino más corto en informática.
