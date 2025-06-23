# Challenge Description and Solution

## English Version

### Challenge Description
Create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase letters.

### Code Explanation
The `count_vowels` function converts the string to lowercase and then counts how many characters are vowels using a list comprehension and the `sum` function.

Relevant code:

```python
def count_vowels(s):
    s = s.lower()
    return sum(1 for char in s if char in "aeiou")
```

The `if __name__ == "__main__":` block contains an example usage that counts vowels in several strings and prints the result.

```python
if __name__ == "__main__":
    test_strings = ["Hello", "World", "Python", "OpenAI"]
    for string in test_strings:
        print(f"Number of vowels in '{string}': {count_vowels(string)}")
```

## Versión en Español

### Descripción del Reto
Crea una función que cuente el número de vocales en una cadena dada. Considera tanto mayúsculas como minúsculas.

### Explicación del Código
La función `count_vowels` convierte la cadena a minúsculas y luego cuenta cuántos caracteres son vocales utilizando una comprensión de lista y la función `sum`.

Código relevante:

```python
def count_vowels(s):
    s = s.lower()
    return sum(1 for char in s if char in "aeiou")
```

El bloque `if __name__ == "__main__":` contiene un ejemplo de uso que cuenta las vocales en varias cadenas y muestra el resultado.

```python
if __name__ == "__main__":
    test_strings = ["Hello", "World", "Python", "OpenAI"]
    for string in test_strings:
        print(f"Número de vocales en '{string}': {count_vowels(string)}")
