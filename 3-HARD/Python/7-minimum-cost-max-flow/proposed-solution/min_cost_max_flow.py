from collections import deque
from typing import List, Tuple

class MinCostMaxFlow:
    def __init__(self, n: int):
        self.n = n
        self.graph = [[] for _ in range(n)]

    def add_edge(self, u: int, v: int, capacity: int, cost: int):
        self.graph[u].append([v, capacity, cost, len(self.graph[v])])
        self.graph[v].append([u, 0, -cost, len(self.graph[u]) - 1])

    def bellman_ford(self, source: int, dist: List[int], parent: List[Tuple[int, int]]):
        dist[:] = [float('inf')] * self.n
        dist[source] = 0
        in_queue = [False] * self.n
        queue = deque([source])
        in_queue[source] = True

        while queue:
            u = queue.popleft()
            in_queue[u] = False
            for i, (v, capacity, cost, rev) in enumerate(self.graph[u]):
                if capacity > 0 and dist[u] + cost < dist[v]:
                    dist[v] = dist[u] + cost
                    parent[v] = (u, i)
                    if not in_queue[v]:
                        queue.append(v)
                        in_queue[v] = True

    def min_cost_max_flow(self, source: int, sink: int) -> Tuple[int, int]:
        flow = 0
        cost = 0
        dist = [0] * self.n
        parent = [(-1, -1)] * self.n

        while True:
            self.bellman_ford(source, dist, parent)
            if dist[sink] == float('inf'):
                break

            path_flow = float('inf')
            v = sink
            while v != source:
                u, i = parent[v]
                path_flow = min(path_flow, self.graph[u][i][1])
                v = u

            flow += path_flow
            cost += path_flow * dist[sink]

            v = sink
            while v != source:
                u, i = parent[v]
                self.graph[u][i][1] -= path_flow
                rev = self.graph[u][i][3]
                self.graph[v][rev][1] += path_flow
                v = u

        return flow, cost
