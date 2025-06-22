# Challenge: Implement a segment tree that supports range queries and updates efficiently,
# using lazy propagation to handle deferred updates without sacrificing performance.
# Use object-oriented programming and follow the DRY principle.

from segment_tree import SegmentTree

def main():
    data = [1, 3, 5, 7, 9, 11]
    seg_tree = SegmentTree(data)

    print("Initial sum of range [1, 3]:", seg_tree.query_range(1, 3))
    seg_tree.update_range(1, 5, 10)
    print("Sum of range [1, 3] after update:", seg_tree.query_range(1, 3))
    print("Sum of range [0, 5]:", seg_tree.query_range(0, 5))

if __name__ == "__main__":
    main()
