# Challenge: Create a generator that returns the Fibonacci sequence up to n terms.
# You can explore iterative and recursive approaches to solve the problem.

def fibonacci_iterative(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

def fibonacci_recursive(n, a=0, b=1):
    if n == 0:
        return
    yield a
    yield from fibonacci_recursive(n-1, b, a + b)

# Example usage
if __name__ == "__main__":
    n = 10
    print("Iterative Fibonacci sequence:")
    for num in fibonacci_iterative(n):
        print(num, end=" ")
    print("\nRecursive Fibonacci sequence:")
    for num in fibonacci_recursive(n):
        print(num, end=" ")
    print()
