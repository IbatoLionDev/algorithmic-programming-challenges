# Challenge: Given a set of words and a maximum width, implement a dynamic programming algorithm
# to justify text optimally, minimizing penalties for irregular spaces.
# Use object-oriented programming and follow the DRY principle.

from text_justifier import TextJustifier

def main():
    words = ["This", "is", "an", "example", "of", "text", "justification."]
    max_width = 16
    justifier = TextJustifier(words, max_width)
    justified_text = justifier.justify()
    for line in justified_text:
        print(f'"{line}"')

if __name__ == "__main__":
    main()
