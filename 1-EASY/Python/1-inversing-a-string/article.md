# Challenge Description and Solution

## English Version

### Challenge Description
Given a string, create a function that reverses it without using built-in reverse methods. This challenge helps you practice loops and index handling in Python.

### Code Explanation
The function `reverse_string` takes a string `s` as input and creates a new string `reversed_str` containing the characters of `s` in reverse order. It uses a `for` loop that iterates from the last character to the first, appending each character to `reversed_str`. Finally, the function returns the reversed string.

Relevant code:

```python
def reverse_string(s):
    reversed_str = ""
    for i in range(len(s) - 1, -1, -1):
        reversed_str += s[i]
    return reversed_str
```

The `if __name__ == "__main__":` block contains an example usage where the string `"hello"` is reversed and the result is printed.

```python
if __name__ == "__main__":
    test_string = "hello"
    print("Original string:", test_string)
    print("Reversed string:", reverse_string(test_string))
```

## Versión en Español

### Descripción del Reto
Dada una cadena de caracteres, crea una función que la invierta sin usar métodos integrados de inversión. Este reto te ayudará a practicar el uso de bucles y el manejo de índices en Python.

### Explicación del Código
La función `reverse_string` toma una cadena `s` como entrada y crea una nueva cadena `reversed_str` que contiene los caracteres de `s` en orden inverso. Para ello, se utiliza un bucle `for` que recorre la cadena desde el último carácter hasta el primero, agregando cada carácter a `reversed_str`. Finalmente, la función retorna la cadena invertida.

Código relevante:

```python
def reverse_string(s):
    reversed_str = ""
    for i in range(len(s) - 1, -1, -1):
        reversed_str += s[i]
    return reversed_str
```

El bloque `if __name__ == "__main__":` contiene un ejemplo de uso donde se invierte la cadena `"hello"` y se imprime el resultado.

```python
if __name__ == "__main__":
    test_string = "hello"
    print("Cadena original:", test_string)
    print("Cadena invertida:", reverse_string(test_string))
