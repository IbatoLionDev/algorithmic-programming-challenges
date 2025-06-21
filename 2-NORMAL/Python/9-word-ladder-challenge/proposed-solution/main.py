# Challenge: Given two words (start and end) and a dictionary, implement an algorithm to find the shortest transformation sequence where each word differs by exactly one character from the previous one. This challenge requires applying search techniques like BFS.

from word_ladder import word_ladder

def main():
    begin_word = "hit"
    end_word = "cog"
    word_list = ["hot", "dot", "dog", "lot", "log", "cog"]
    path = word_ladder(begin_word, end_word, word_list)
    print("Shortest transformation sequence:", path)

if __name__ == "__main__":
    main()
