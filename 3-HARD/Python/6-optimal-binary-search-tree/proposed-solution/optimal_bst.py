from typing import List

class OptimalBST:
    def __init__(self, keys: List[int], freq: List[int]):
        self.keys = keys
        self.freq = freq
        self.n = len(keys)
        self.dp = [[0] * self.n for _ in range(self.n)]

    def optimal_cost(self) -> int:
        # Precompute prefix sums for frequencies
        prefix_sum = [0] * (self.n + 1)
        for i in range(self.n):
            prefix_sum[i + 1] = prefix_sum[i] + self.freq[i]

        def get_sum(i, j):
            return prefix_sum[j + 1] - prefix_sum[i]

        def cost_for_root(i, j, r):
            left = self.dp[i][r - 1] if r > i else 0
            right = self.dp[r + 1][j] if r < j else 0
            return left + right + get_sum(i, j)

        for i in range(self.n):
            self.dp[i][i] = self.freq[i]

        for length in range(2, self.n + 1):
            for i in range(self.n - length + 1):
                j = i + length - 1
                self.dp[i][j] = min(
                    cost_for_root(i, j, r) for r in range(i, j + 1)
                )

        return self.dp[0][self.n - 1]
