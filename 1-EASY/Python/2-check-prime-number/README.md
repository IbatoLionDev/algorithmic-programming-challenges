# Challenge Description and Solution

## English Version

### Challenge Description
Implement a function that determines if a number is prime. Pay attention to edge cases such as negative values and the number 1.

### Code Explanation
The `is_prime` function checks if a number `n` is prime. It first excludes numbers less than or equal to 1, which are not prime. Then, it considers 2 and 3 as prime numbers. Next, it eliminates multiples of 2 and 3. Finally, it uses a loop that checks divisors starting from 5, skipping multiples of 6, to optimize the search. If a divisor is found, it returns `False`; otherwise, it returns `True`.

Relevant code:

```python
def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True
```

The `if __name__ == "__main__":` block contains an example usage that tests several numbers and prints whether they are prime or not.

```python
if __name__ == "__main__":
    test_numbers = [-1, 0, 1, 2, 3, 4, 5, 29, 35]
    for num in test_numbers:
        print(f"{num} is prime: {is_prime(num)}")
```

## Versión en Español

### Descripción del Reto
Implementa una función que determine si un número es primo. Presta atención a casos especiales como valores negativos y el número 1.

### Explicación del Código
La función `is_prime` verifica si un número `n` es primo. Primero descarta números menores o iguales a 1, que no son primos. Luego, considera los números 2 y 3 como primos. Después, elimina múltiplos de 2 y 3. Finalmente, utiliza un bucle que verifica divisores desde 5 en adelante, saltando múltiplos de 6, para optimizar la búsqueda. Si encuentra un divisor, retorna `False`; si no, retorna `True`.

Código relevante:

```python
def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True
```

El bloque `if __name__ == "__main__":` contiene un ejemplo de uso que prueba varios números y muestra si son primos o no.

```python
if __name__ == "__main__":
    test_numbers = [-1, 0, 1, 2, 3, 4, 5, 29, 35]
    for num in test_numbers:
        print(f"{num} is prime: {is_prime(num)}")
