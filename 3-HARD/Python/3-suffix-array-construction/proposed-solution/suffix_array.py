from typing import List

class SuffixArray:
    def __init__(self, text: str):
        self.text = text
        self.n = len(text)
        self.suffix_array = []
        self.lcp_array = []

    def build_suffix_array(self) -> List[int]:
        self.suffix_array = sorted(range(self.n), key=lambda i: self.text[i:])
        return self.suffix_array

    def build_lcp_array(self) -> List[int]:
        if not self.suffix_array:
            self.build_suffix_array()

        self.lcp_array = [0] * self.n
        inv_suffix = [0] * self.n

        for i, suffix in enumerate(self.suffix_array):
            inv_suffix[suffix] = i

        k = 0
        for i in range(self.n):
            if inv_suffix[i] == self.n - 1:
                k = 0
                continue
            j = self.suffix_array[inv_suffix[i] + 1]
            while i + k < self.n and j + k < self.n and self.text[i + k] == self.text[j + k]:
                k += 1
            self.lcp_array[inv_suffix[i]] = k
            if k:
                k -= 1

        return self.lcp_array
