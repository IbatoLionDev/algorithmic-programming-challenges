// topKFrequent.js - Class-based solution to find the top k frequent elements using hashmap and heap

class TopKFrequent {
  constructor(nums, k) {
    this.nums = nums;
    this.k = k;
    this.frequencyMap = new Map();
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(index) {
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[index][1] < this.heap[parent][1]) {
      this.swap(index, parent);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown(index) {
    const length = this.heap.length;
    let smallest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
      smallest = left;
    }
    if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  buildFrequencyMap() {
    for (const num of this.nums) {
      this.frequencyMap.set(num, (this.frequencyMap.get(num) || 0) + 1);
    }
  }

  findTopK() {
    this.buildFrequencyMap();

    for (const [num, freq] of this.frequencyMap.entries()) {
      this.heap.push([num, freq]);
      this.heapifyUp(this.heap.length - 1);
      if (this.heap.length > this.k) {
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
      }
    }

    return this.heap.map(item => item[0]);
  }
}

export default TopKFrequent;
