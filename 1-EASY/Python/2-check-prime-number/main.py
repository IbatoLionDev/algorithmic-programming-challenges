# Challenge: Implement a function that determines if a number is prime.
# Pay attention to edge cases such as negative values and the number 1.

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

# Example usage
if __name__ == "__main__":
    test_numbers = [-1, 0, 1, 2, 3, 4, 5, 29, 35]
    for num in test_numbers:
        print(f"{num} is prime: {is_prime(num)}")
