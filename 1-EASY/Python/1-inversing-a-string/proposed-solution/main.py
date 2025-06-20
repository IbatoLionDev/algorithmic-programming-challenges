# Challenge: Given a string, create a function that reverses it without using built-in reverse methods.
# This will help you practice loops and index handling.

def reverse_string(s):
    reversed_str = ""
    for i in range(len(s) - 1, -1, -1):
        reversed_str += s[i]
    return reversed_str

# Example usage
if __name__ == "__main__":
    test_string = "hello"
    print("Original string:", test_string)
    print("Reversed string:", reverse_string(test_string))
