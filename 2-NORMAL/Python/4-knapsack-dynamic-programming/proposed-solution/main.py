# Challenge: Solve the 0/1 knapsack problem using dynamic programming.
# Given a set of items with weights and values, determine the combination that maximizes value without exceeding the capacity.

from knapsack import knapsack

def main():
    weights = [2, 3, 4, 5]
    values = [3, 4, 5, 6]
    capacity = 5
    max_value = knapsack(weights, values, capacity)
    print(f"Maximum value in knapsack with capacity {capacity}: {max_value}")

if __name__ == "__main__":
    main()
