# Challenge: Create a function that, given a string composed of parentheses and possibly other opening and closing symbols, verifies if the sequence is valid (i.e., each open symbol has its corresponding closing symbol in the correct order). Use a stack data structure to solve it.

from parentheses import is_valid_parentheses

def main():
    test_strings = ["()", "()[]{}", "(]", "([)]", "{[]}"]
    for s in test_strings:
        print(f"Is '{s}' valid? {is_valid_parentheses(s)}")

if __name__ == "__main__":
    main()
