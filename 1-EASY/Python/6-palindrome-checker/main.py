# Challenge: Write a function that determines if a string is a palindrome (reads the same forwards and backwards).
# Consider ignoring spaces, capitalization, and punctuation.

import string

def is_palindrome(s):
    # Normalize the string: remove spaces, punctuation, and convert to lowercase
    translator = str.maketrans('', '', string.punctuation + " ")
    normalized = s.translate(translator).lower()
    return normalized == normalized[::-1]

# Example usage
if __name__ == "__main__":
    test_strings = [
        "A man, a plan, a canal, Panama",
        "racecar",
        "hello",
        "No lemon, no melon"
    ]
    for s in test_strings:
        print(f"'{s}' is palindrome: {is_palindrome(s)}")
