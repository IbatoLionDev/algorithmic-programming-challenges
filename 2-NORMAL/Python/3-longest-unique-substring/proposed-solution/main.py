# Challenge: Given a string, find the length of the longest substring without repeating characters.
# Use sliding window techniques to optimize the solution's performance.

def length_of_longest_substring(s):
    char_index_map = {}
    left = 0
    max_length = 0
    max_substring = ""

    for right in range(len(s)):
        if s[right] in char_index_map and char_index_map[s[right]] >= left:
            left = char_index_map[s[right]] + 1
        char_index_map[s[right]] = right
        if right - left + 1 > max_length:
            max_length = right - left + 1
            max_substring = s[left:right+1]

    return max_length, max_substring

# Example usage
if __name__ == "__main__":
    test_string = "abcabcbb"
    length, substring = length_of_longest_substring(test_string)
    print(f"Length of longest substring without repeating characters: {length}")
    print(f"Longest substring without repeating characters: {substring}")
