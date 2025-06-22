# Challenge: Implement a solution for the travelling salesman problem using dynamic programming with bitmasking.
# This challenge requires optimizing the search in an exponential state space.
# Use object-oriented programming and follow the DRY principle.

from tsp import TravellingSalesman

def main():
    graph = [
        [0, 10, 15, 20],
        [10, 0, 35, 25],
        [15, 35, 0, 30],
        [20, 25, 30, 0]
    ]
    tsp_solver = TravellingSalesman(graph)
    min_cost = tsp_solver.tsp(0, 1 << 0)
    print(f"Minimum travelling salesman cost: {min_cost}")

if __name__ == "__main__":
    main()
