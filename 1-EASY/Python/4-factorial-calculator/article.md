# Challenge Description and Solution

## English Version

### Challenge Description
Develop a recursive or iterative function to calculate the factorial of a non-negative integer. Consider handling special cases.

### Code Explanation
The code presents two functions to calculate the factorial:

- `factorial_recursive(n)`: Calculates the factorial recursively. If `n` is negative, it raises an error. If `n` is 0 or 1, it returns 1. Otherwise, it returns `n` multiplied by the factorial of `n-1`.

- `factorial_iterative(n)`: Calculates the factorial iteratively. If `n` is negative, it raises an error. It initializes `result` to 1 and successively multiplies by each number from 2 to `n`.

Relevant code:

```python
def factorial_recursive(n):
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n - 1)

def factorial_iterative(n):
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result
```

The `if __name__ == "__main__":` block contains an example usage that calculates the factorial of several values using both methods.

```python
if __name__ == "__main__":
    test_values = [0, 1, 5, 7]
    for val in test_values:
        print(f"Factorial of {val} (recursive): {factorial_recursive(val)}")
        print(f"Factorial of {val} (iterative): {factorial_iterative(val)}")
```

## Versión en Español

### Descripción del Reto
Desarrolla una función recursiva o iterativa para calcular el factorial de un número entero no negativo. Considera el manejo de casos especiales como números negativos.

### Explicación del Código
El código presenta dos funciones para calcular el factorial:

- `factorial_recursive(n)`: Calcula el factorial de forma recursiva. Si `n` es negativo, lanza un error. Si `n` es 0 o 1, retorna 1. En otro caso, retorna `n` multiplicado por el factorial de `n-1`.

- `factorial_iterative(n)`: Calcula el factorial de forma iterativa. Si `n` es negativo, lanza un error. Inicializa `result` en 1 y multiplica sucesivamente por cada número desde 2 hasta `n`.

Código relevante:

```python
def factorial_recursive(n):
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n - 1)

def factorial_iterative(n):
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result
```

El bloque `if __name__ == "__main__":` contiene un ejemplo de uso que calcula el factorial de varios valores usando ambos métodos.

```python
if __name__ == "__main__":
    test_values = [0, 1, 5, 7]
    for val in test_values:
        print(f"Factorial of {val} (recursive): {factorial_recursive(val)}")
        print(f"Factorial of {val} (iterative): {factorial_iterative(val)}")
