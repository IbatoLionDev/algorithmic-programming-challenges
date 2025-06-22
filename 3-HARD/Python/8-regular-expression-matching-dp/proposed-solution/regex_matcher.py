class RegexMatcher:
    def __init__(self, text: str, pattern: str):
        self.text = text
        self.pattern = pattern
        self.dp = [[False] * (len(pattern) + 1) for _ in range(len(text) + 1)]

    def is_match(self) -> bool:
        self.dp[0][0] = True

        for j in range(2, len(self.pattern) + 1):
            if self.pattern[j - 1] == '*':
                self.dp[0][j] = self.dp[0][j - 2]

        def matches(i, j):
            if self.pattern[j - 1] == '.' or self.pattern[j - 1] == self.text[i - 1]:
                return self.dp[i - 1][j - 1]
            if self.pattern[j - 1] == '*':
                zero = self.dp[i][j - 2]
                one_or_more = (
                    (self.pattern[j - 2] == '.' or self.pattern[j - 2] == self.text[i - 1])
                    and self.dp[i - 1][j]
                )
                return zero or one_or_more
            return False

        for i in range(1, len(self.text) + 1):
            for j in range(1, len(self.pattern) + 1):
                self.dp[i][j] = matches(i, j)

        return self.dp[len(self.text)][len(self.pattern)]
