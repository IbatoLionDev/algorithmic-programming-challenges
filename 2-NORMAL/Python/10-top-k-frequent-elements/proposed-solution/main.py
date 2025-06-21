# Challenge: Given an array of numbers, create a function that returns the k elements that appear most frequently.
# Consider using data structures like hash maps and heaps to efficiently manage frequency.
# Provide two variants using OOP: one with hash map and sorting, and another with hash map and heap.

from top_k_hashmap import TopKFrequentHashMap
from top_k_heap import TopKFrequentHeap

def main():
    nums = [1,1,1,2,2,3,3,3,3,4,4,5]
    k = 3

    print("Using HashMap and Sorting:")
    top_k_hashmap = TopKFrequentHashMap(nums)
    print(top_k_hashmap.top_k_frequent(k))

    print("Using HashMap and Heap:")
    top_k_heap = TopKFrequentHeap(nums)
    print(top_k_heap.top_k_frequent(k))

if __name__ == "__main__":
    main()
