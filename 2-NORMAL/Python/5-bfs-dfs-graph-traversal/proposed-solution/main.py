# Challenge: Implement breadth-first search (BFS) and depth-first search (DFS) algorithms to traverse a graph represented by adjacency lists.
# Ensure coverage of both connected and disconnected graphs.

from graph import Graph

def main():
    g = Graph(7)
    edges = [(0, 1), (0, 2), (1, 3), (1, 4), (2, 5), (5, 6)]
    for u, v in edges:
        g.add_edge(u, v)

    print("BFS starting from vertex 0:")
    print(g.bfs(0))

    print("DFS starting from vertex 0:")
    print(g.dfs(0))

    print("BFS for disconnected graph:")
    print(g.bfs_disconnected())

    print("DFS for disconnected graph:")
    print(g.dfs_disconnected())

if __name__ == "__main__":
    main()
