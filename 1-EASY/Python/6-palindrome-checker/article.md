# Challenge Description and Solution

## English Version

### Challenge Description
Create a function that determines if a string is a palindrome, meaning it reads the same forwards and backwards.

### Code Explanation
The `is_palindrome` function converts the string to lowercase and removes spaces for comparison. It then compares the string with its reverse to determine if it is a palindrome.

Relevant code:

```python
def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]
```

The `if __name__ == "__main__":` block contains an example usage that tests several strings and prints whether they are palindromes or not.

```python
if __name__ == "__main__":
    test_strings = ["radar", "hello", "level", "world"]
    for string in test_strings:
        print(f"'{string}' is palindrome: {is_palindrome(string)}")
```

## Versión en Español

### Descripción del Reto
Crea una función que determine si una cadena es un palíndromo, es decir, que se lee igual de izquierda a derecha y de derecha a izquierda.

### Explicación del Código
La función `is_palindrome` convierte la cadena a minúsculas y elimina espacios para hacer la comparación. Luego compara la cadena con su reverso para determinar si es un palíndromo.

Código relevante:

```python
def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]
```

El bloque `if __name__ == "__main__":` contiene un ejemplo de uso que prueba varias cadenas y muestra si son palíndromos o no.

```python
if __name__ == "__main__":
    test_strings = ["radar", "hello", "level", "world"]
    for string in test_strings:
        print(f"'{string}' is palindrome: {is_palindrome(string)}")
