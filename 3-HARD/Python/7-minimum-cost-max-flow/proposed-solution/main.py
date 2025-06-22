# Challenge: Combine maximum flow and cost optimization concepts to implement an algorithm
# that finds the maximum flow with the minimum cost in a network.
# This is a classic combinatorial optimization challenge.
# Use object-oriented programming and follow the DRY principle.

from min_cost_max_flow import MinCostMaxFlow

def main():
    n = 4
    mcmf = MinCostMaxFlow(n)
    mcmf.add_edge(0, 1, 3, 1)
    mcmf.add_edge(0, 2, 2, 2)
    mcmf.add_edge(1, 2, 2, 1)
    mcmf.add_edge(1, 3, 2, 3)
    mcmf.add_edge(2, 3, 3, 1)

    flow, cost = mcmf.min_cost_max_flow(0, 3)
    print(f"Maximum flow: {flow}")
    print(f"Minimum cost: {cost}")

if __name__ == "__main__":
    main()
