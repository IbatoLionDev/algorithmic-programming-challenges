// mergeSort.js - Merge Sort implementation

class MergeSort {
    static mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = MergeSort.mergeSort(arr.slice(0, mid));
        const right = MergeSort.mergeSort(arr.slice(mid));
        return MergeSort.merge(left, right);
    }

    static merge(left, right) {
        const result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}

export default MergeSort;
