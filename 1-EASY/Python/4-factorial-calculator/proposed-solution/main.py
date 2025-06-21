# Challenge: Develop a recursive or iterative function to calculate the factorial of a non-negative integer.
# Consider handling special cases.

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

# Example usage
if __name__ == "__main__":
    test_values = [0, 1, 5, 7]
    for val in test_values:
        print(f"Factorial of {val} (recursive): {factorial_recursive(val)}")
        print(f"Factorial of {val} (iterative): {factorial_iterative(val)}")
