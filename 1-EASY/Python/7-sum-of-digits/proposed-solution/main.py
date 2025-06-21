# Challenge: Create a function that, given an integer, returns the sum of its digits.
# Make sure to handle negative numbers and the special case of zero.

def sum_of_digits(n):
    n = abs(n)
    if n == 0:
        return 0
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total

# Example usage
if __name__ == "__main__":
    test_values = [0, 123, -456, 7890]
    for val in test_values:
        print(f"Sum of digits of {val}: {sum_of_digits(val)}")
