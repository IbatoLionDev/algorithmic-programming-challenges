# Challenge: Given a string and a dictionary, return all possible valid sentences that can be formed.
# This challenge requires recursion with memoization to avoid redundant solutions and explore multiple paths.
# Use object-oriented programming and follow the DRY principle.

from word_break import WordBreak

def main():
    s = "catsanddog"
    word_dict = {"cat", "cats", "and", "sand", "dog"}
    wb = WordBreak(s, word_dict)
    sentences = wb.word_break()
    print("Possible sentences:")
    for sentence in sentences:
        print(sentence)

if __name__ == "__main__":
    main()
