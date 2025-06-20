# Challenge: Develop a program that counts the number of vowels in a text string.
# Consider how to optimize your solution for long texts or different formats.

def count_vowels(text):
    vowels = set("aeiouAEIOU")
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count

# Example usage
if __name__ == "__main__":
    sample_text = "This is an example sentence to count vowels."
    print(f"Number of vowels in sample text: {count_vowels(sample_text)}")
