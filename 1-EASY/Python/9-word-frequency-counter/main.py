# Challenge: Implement a function that, given a paragraph or a long string, returns a dictionary with the frequency of each word.
# Handle case differences and punctuation correctly.

import string

def word_frequency_counter(text):
    # Normalize text: lowercase and remove punctuation
    translator = str.maketrans('', '', string.punctuation)
    normalized = text.lower().translate(translator)
    words = normalized.split()
    frequency = {}
    for word in words:
        frequency[word] = frequency.get(word, 0) + 1
    return frequency

# Example usage
if __name__ == "__main__":
    sample_text = "Hello, hello! How are you? Are you doing well? Hello!"
    freq = word_frequency_counter(sample_text)
    for word, count in freq.items():
        print(f"'{word}': {count}")
