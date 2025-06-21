from typing import List
from collections import Counter

class TopKFrequentHashMap:
    def __init__(self, nums: List[int]):
        self.nums = nums

    def top_k_frequent(self, k: int) -> List[int]:
        count = Counter(self.nums)
        # Sort elements by frequency in descending order
        sorted_items = sorted(count.items(), key=lambda x: x[1], reverse=True)
        return [item[0] for item in sorted_items[:k]]
