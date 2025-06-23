# Challenge Description and Solution

## English Version

### Challenge Description
Write a function that determines if a number is even or odd. Test with different types of inputs (positive numbers, negative numbers, and zero) to ensure robustness.

### Code Explanation
The `is_even` function uses the modulo operator `%` to determine if a number is even. If the remainder of the division of the number by 2 is zero, the number is even; otherwise, it is odd.

Relevant code:

```python
def is_even(n):
    return n % 2 == 0
```

The `if __name__ == "__main__":` block contains an example usage that tests several values and prints whether they are even or odd.

```python
if __name__ == "__main__":
    test_values = [0, 1, -1, 2, -2, 15, -15]
    for val in test_values:
        result = "even" if is_even(val) else "odd"
        print(f"{val} is {result}")
```

## Versión en Español

### Descripción del Reto
Escribe una función que determine si un número es par o impar. Prueba con diferentes tipos de entradas (números positivos, negativos y cero) para asegurar la robustez.

### Explicación del Código
La función `is_even` utiliza el operador módulo `%` para determinar si un número es par. Si el residuo de la división entre el número y 2 es cero, el número es par; de lo contrario, es impar.

Código relevante:

```python
def is_even(n):
    return n % 2 == 0
```

El bloque `if __name__ == "__main__":` contiene un ejemplo de uso que prueba varios valores y muestra si son pares o impares.

```python
if __name__ == "__main__":
    test_values = [0, 1, -1, 2, -2, 15, -15]
    for val in test_values:
        result = "even" if is_even(val) else "odd"
        print(f"{val} is {result}")
