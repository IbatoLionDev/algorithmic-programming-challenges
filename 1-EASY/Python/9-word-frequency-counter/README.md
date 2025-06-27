# Challenge Description and Solution

## English Version

### Challenge Description
Create a function that counts the frequency of each word in a given text. Consider normalization of case and removal of punctuation.

### Code Explanation
The `word_frequency` function converts the text to lowercase, removes punctuation, and then counts the frequency of each word using a dictionary.

Relevant code:

```python
import string

def word_frequency(text):
    text = text.lower()
    for punct in string.punctuation:
        text = text.replace(punct, "")
    words = text.split()
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    return freq
```

The `if __name__ == "__main__":` block contains an example usage that shows the word frequency in a sample text.

```python
if __name__ == "__main__":
    sample_text = "Hello world! Hello everyone. Welcome to the world of Python."
    frequencies = word_frequency(sample_text)
    for word, count in frequencies.items():
        print(f"'{word}': {count}")
```

## Versión en Español

### Descripción del Reto
Crea una función que cuente la frecuencia de cada palabra en un texto dado. Considera la normalización de mayúsculas y minúsculas y la eliminación de signos de puntuación.

### Explicación del Código
La función `word_frequency` convierte el texto a minúsculas, elimina signos de puntuación y luego cuenta la frecuencia de cada palabra utilizando un diccionario.

Código relevante:

```python
import string

def word_frequency(text):
    text = text.lower()
    for punct in string.punctuation:
        text = text.replace(punct, "")
    words = text.split()
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    return freq
```

El bloque `if __name__ == "__main__":` contiene un ejemplo de uso que muestra la frecuencia de palabras en un texto de ejemplo.

```python
if __name__ == "__main__":
    sample_text = "Hello world! Hello everyone. Welcome to the world of Python."
    frequencies = word_frequency(sample_text)
    for word, count in frequencies.items():
        print(f"'{word}': {count}")
