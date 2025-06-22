# Challenge: Develop the Edmonds-Karp algorithm to calculate the maximum flow in a network.
# This challenge deepens advanced graph handling and data structures to improve efficiency.
# Use object-oriented programming and follow the DRY principle.

from edmonds_karp import EdmondsKarp

def main():
    graph = [
        [0, 16, 13, 0, 0, 0],
        [0, 0, 10, 12, 0, 0],
        [0, 4, 0, 0, 14, 0],
        [0, 0, 9, 0, 0, 20],
        [0, 0, 0, 7, 0, 4],
        [0, 0, 0, 0, 0, 0]
    ]
    ek = EdmondsKarp(graph)
    max_flow = ek.max_flow(0, 5)
    print(f"Maximum flow: {max_flow}")

if __name__ == "__main__":
    main()
