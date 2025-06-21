from typing import List
from collections import Counter
import heapq

class TopKFrequentHeap:
    def __init__(self, nums: List[int]):
        self.nums = nums

    def top_k_frequent(self, k: int) -> List[int]:
        count = Counter(self.nums)
        # Use a heap to get the k elements with highest frequency
        return [item for item, freq in heapq.nlargest(k, count.items(), key=lambda x: x[1])]
