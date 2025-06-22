from collections import deque
from typing import List

class EdmondsKarp:
    def __init__(self, graph: List[List[int]]):
        self.graph = graph
        self.n = len(graph)
        self.residual_graph = [row[:] for row in graph]

    def bfs(self, source: int, sink: int, parent: List[int]) -> bool:
        visited = [False] * self.n
        queue = deque([source])
        visited[source] = True

        while queue:
            u = queue.popleft()
            for v, capacity in enumerate(self.residual_graph[u]):
                if not visited[v] and capacity > 0:
                    queue.append(v)
                    visited[v] = True
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    def max_flow(self, source: int, sink: int) -> int:
        parent = [-1] * self.n
        max_flow = 0

        while self.bfs(source, sink, parent):
            path_flow = float('inf')
            s = sink
            while s != source:
                path_flow = min(path_flow, self.residual_graph[parent[s]][s])
                s = parent[s]

            max_flow += path_flow

            v = sink
            while v != source:
                u = parent[v]
                self.residual_graph[u][v] -= path_flow
                self.residual_graph[v][u] += path_flow
                v = parent[v]

        return max_flow
