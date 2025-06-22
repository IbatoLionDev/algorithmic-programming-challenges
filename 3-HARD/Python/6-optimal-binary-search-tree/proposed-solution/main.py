# Challenge: Given search frequencies for different elements, implement a dynamic programming algorithm
# to construct an optimal binary search tree minimizing the average search cost.
# Use object-oriented programming and follow the DRY principle.

from optimal_bst import OptimalBST

def main():
    keys = [10, 12, 20]
    freq = [34, 8, 50]
    optimal_bst = OptimalBST(keys, freq)
    cost = optimal_bst.optimal_cost()
    print(f"Optimal BST cost: {cost}")

if __name__ == "__main__":
    main()
