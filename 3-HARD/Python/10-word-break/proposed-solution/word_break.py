from typing import List, Set, Dict

class WordBreak:
    def __init__(self, s: str, word_dict: Set[str]):
        self.s = s
        self.word_dict = word_dict
        self.memo: Dict[int, List[str]] = {}

    def word_break(self, start: int = 0) -> List[str]:
        if start == len(self.s):
            return [""]

        if start in self.memo:
            return self.memo[start]

        sentences = []
        for end in range(start + 1, len(self.s) + 1):
            word = self.s[start:end]
            if word in self.word_dict:
                for subsentence in self.word_break(end):
                    sentence = word + (" " + subsentence if subsentence else "")
                    sentences.append(sentence)

        self.memo[start] = sentences
        return sentences
