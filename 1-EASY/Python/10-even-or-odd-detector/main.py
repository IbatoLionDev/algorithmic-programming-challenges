# Challenge: Write a function that determines if a number is even or odd.
# Test with different types of inputs (positive numbers, negative numbers, and zero) to ensure robustness.

def is_even(n):
    return n % 2 == 0

# Example usage
if __name__ == "__main__":
    test_values = [0, 1, -1, 2, -2, 15, -15]
    for val in test_values:
        result = "even" if is_even(val) else "odd"
        print(f"{val} is {result}")
