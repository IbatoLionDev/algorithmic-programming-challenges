from typing import List

class TextJustifier:
    def __init__(self, words: List[str], max_width: int):
        self.words = words
        self.max_width = max_width
        self.n = len(words)
        self.dp = [float('inf')] * (self.n + 1)
        self.dp[self.n] = 0
        self.breaks = [-1] * (self.n + 1)

    def _cost(self, i: int, j: int) -> float:
        length = sum(len(self.words[k]) for k in range(i, j + 1)) + (j - i)
        if length > self.max_width:
            return float('inf')
        return (self.max_width - length) ** 3

    def justify(self) -> List[str]:
        for i in range(self.n - 1, -1, -1):
            for j in range(i, self.n):
                cost = self._cost(i, j)
                if cost == float('inf'):
                    break
                if self.dp[j + 1] + cost < self.dp[i]:
                    self.dp[i] = self.dp[j + 1] + cost
                    self.breaks[i] = j

        lines = []
        i = 0
        while i < self.n:
            j = self.breaks[i]
            line_words = self.words[i:j + 1]
            line = self._justify_line(line_words)
            lines.append(line)
            i = j + 1
        return lines

    def _justify_line(self, line_words: List[str]) -> str:
        if len(line_words) == 1:
            return line_words[0] + ' ' * (self.max_width - len(line_words[0]))

        total_spaces = self.max_width - sum(len(word) for word in line_words)
        spaces_between_words = len(line_words) - 1
        space, extra = divmod(total_spaces, spaces_between_words)

        line = ''
        for i, word in enumerate(line_words[:-1]):
            line += word + ' ' * (space + (1 if i < extra else 0))
        line += line_words[-1]
        return line
