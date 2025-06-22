from typing import List

class TravellingSalesman:
    def __init__(self, graph: List[List[int]]):
        self.graph = graph
        self.n = len(graph)
        self.ALL_VISITED = (1 << self.n) - 1
        self.memo = [[-1] * (1 << self.n) for _ in range(self.n)]

    def tsp(self, pos: int, visited: int) -> int:
        if visited == self.ALL_VISITED:
            return self.graph[pos][0]  # return to start

        if self.memo[pos][visited] != -1:
            return self.memo[pos][visited]

        ans = float('inf')
        for city in range(self.n):
            if (visited >> city) & 1 == 0:
                new_visited = visited | (1 << city)
                cost = self.graph[pos][city] + self.tsp(city, new_visited)
                ans = min(ans, cost)

        self.memo[pos][visited] = ans
        return ans
