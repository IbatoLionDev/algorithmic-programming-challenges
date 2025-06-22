# Challenge: Design a regular expression matching engine that supports special characters like '.' and '*',
# using dynamic programming techniques to efficiently handle branching and backtracking.
# Use object-oriented programming and follow the DRY principle.

from regex_matcher import RegexMatcher

def main():
    text = "aab"
    pattern = "c*a*b"
    matcher = RegexMatcher(text, pattern)
    result = matcher.is_match()
    print(f"Text: {text}")
    print(f"Pattern: {pattern}")
    print(f"Match result: {result}")

if __name__ == "__main__":
    main()
