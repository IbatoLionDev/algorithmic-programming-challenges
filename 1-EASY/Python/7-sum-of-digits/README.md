# Challenge Description and Solution

## English Version

### Challenge Description
Create a function that, given an integer, returns the sum of its digits. Make sure to handle negative numbers and the special case of zero.

### Code Explanation
The `sum_of_digits` function first converts the number to its absolute value to handle negative numbers. If the number is zero, it returns 0. Then, it uses a `while` loop to sum each digit of the number, obtaining the least significant digit with the modulo operator `%` and removing it with integer division `//`.

Relevant code:

```python
def sum_of_digits(n):
    n = abs(n)
    if n == 0:
        return 0
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total
```

The `if __name__ == "__main__":` block contains an example usage that calculates the sum of digits for several values, including negatives and zero.

```python
if __name__ == "__main__":
    test_values = [0, 123, -456, 7890]
    for val in test_values:
        print(f"Sum of digits of {val}: {sum_of_digits(val)}")
```

## Versión en Español

### Descripción del Reto
Crea una función que, dado un número entero, retorne la suma de sus dígitos. Asegúrate de manejar números negativos y el caso especial del cero.

### Explicación del Código
La función `sum_of_digits` primero convierte el número a su valor absoluto para manejar números negativos. Si el número es cero, retorna 0. Luego, utiliza un bucle `while` para sumar cada dígito del número, obteniendo el dígito menos significativo con el operador módulo `%` y eliminándolo con la división entera `//`.

Código relevante:

```python
def sum_of_digits(n):
    n = abs(n)
    if n == 0:
        return 0
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total
```

El bloque `if __name__ == "__main__":` contiene un ejemplo de uso que calcula la suma de dígitos para varios valores, incluyendo negativos y cero.

```python
if __name__ == "__main__":
    test_values = [0, 123, -456, 7890]
    for val in test_values:
        print(f"Suma de dígitos de {val}: {sum_of_digits(val)}")
