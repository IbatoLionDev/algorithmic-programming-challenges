from collections import deque

class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.adj = [[] for _ in range(vertices)]

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)  # Assuming undirected graph

    def bfs(self, start):
        visited = [False] * self.V
        queue = deque([start])
        visited[start] = True
        result = []

        while queue:
            vertex = queue.popleft()
            result.append(vertex)
            for neighbor in self.adj[vertex]:
                if not visited[neighbor]:
                    visited[neighbor] = True
                    queue.append(neighbor)
        return result

    def dfs_util(self, v, visited, result):
        visited[v] = True
        result.append(v)
        for neighbor in self.adj[v]:
            if not visited[neighbor]:
                self.dfs_util(neighbor, visited, result)

    def dfs(self, start):
        visited = [False] * self.V
        result = []
        self.dfs_util(start, visited, result)
        return result

    def bfs_disconnected(self):
        visited = [False] * self.V
        result = []
        for i in range(self.V):
            if not visited[i]:
                queue = deque([i])
                visited[i] = True
                while queue:
                    vertex = queue.popleft()
                    result.append(vertex)
                    for neighbor in self.adj[vertex]:
                        if not visited[neighbor]:
                            visited[neighbor] = True
                            queue.append(neighbor)
        return result

    def dfs_disconnected(self):
        visited = [False] * self.V
        result = []
        for i in range(self.V):
            if not visited[i]:
                self.dfs_util(i, visited, result)
        return result
