# Challenge Description and Solution

## English Version

### Challenge Description
Given a string, find the length of the longest substring without repeating characters. Use sliding window techniques to optimize the solution's performance.

### Code Explanation
The solution uses a sliding window approach with two pointers (`left` and `right`) and a dictionary to track the last index of each character. When a repeated character is found within the current window, the left pointer moves to the right of the previous occurrence to maintain a substring without duplicates.

The function returns both the length and the longest substring without repeating characters.

### Relevant Code Snippet

```python
def length_of_longest_substring(s):
    char_index_map = {}
    left = 0
    max_length = 0
    max_substring = ""

    for right in range(len(s)):
        if s[right] in char_index_map and char_index_map[s[right]] >= left:
            left = char_index_map[s[right]] + 1
        char_index_map[s[right]] = right
        if right - left + 1 > max_length:
            max_length = right - left + 1
            max_substring = s[left:right+1]

    return max_length, max_substring
```

### Historical Context
The sliding window technique is a common approach in algorithm design to solve problems involving contiguous sequences efficiently. This problem is a classic example often asked in coding interviews to test understanding of hash maps and two-pointer techniques.

---

## Versión en Español

### Descripción del Reto
Dada una cadena, encuentra la longitud de la subcadena más larga sin caracteres repetidos. Usa técnicas de ventana deslizante para optimizar el rendimiento de la solución.

### Explicación del Código
La solución utiliza un enfoque de ventana deslizante con dos punteros (`left` y `right`) y un diccionario para rastrear el último índice de cada carácter. Cuando se encuentra un carácter repetido dentro de la ventana actual, el puntero izquierdo se mueve a la derecha de la ocurrencia previa para mantener una subcadena sin duplicados.

La función retorna tanto la longitud como la subcadena más larga sin caracteres repetidos.

### Fragmento de Código Relevante

```python
def length_of_longest_substring(s):
    char_index_map = {}
    left = 0
    max_length = 0
    max_substring = ""

    for right in range(len(s)):
        if s[right] in char_index_map and char_index_map[s[right]] >= left:
            left = char_index_map[s[right]] + 1
        char_index_map[s[right]] = right
        if right - left + 1 > max_length:
            max_length = right - left + 1
            max_substring = s[left:right+1]

    return max_length, max_substring
```

### Contexto Histórico
La técnica de ventana deslizante es un enfoque común en el diseño de algoritmos para resolver problemas que involucran secuencias contiguas de manera eficiente. Este problema es un ejemplo clásico que se pregunta frecuentemente en entrevistas técnicas para evaluar el entendimiento de mapas hash y técnicas de dos punteros.
