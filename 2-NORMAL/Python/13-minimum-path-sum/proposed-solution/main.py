# Challenge: Given a matrix of integers, determine the minimum sum to reach from the top-left corner to the bottom-right corner, moving only right or down. Use dynamic programming to optimize the solution.

from min_path_sum import min_path_sum

def main():
    grid = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]
    result = min_path_sum(grid)
    print(f"Minimum path sum: {result}")

if __name__ == "__main__":
    main()
