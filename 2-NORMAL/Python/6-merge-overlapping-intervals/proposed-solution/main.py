# Challenge: Given a list of intervals (e.g., [[1, 3], [2, 6], [8, 10]]), implement a function that merges all overlapping intervals and returns an array with the resulting intervals.

from intervals import merge_intervals

def main():
    intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
    merged = merge_intervals(intervals)
    print("Merged intervals:", merged)

if __name__ == "__main__":
    main()
