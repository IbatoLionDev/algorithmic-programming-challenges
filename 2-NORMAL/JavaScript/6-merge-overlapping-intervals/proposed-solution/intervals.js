// intervals.js - Merge overlapping intervals

function mergeIntervals(intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }

  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) { // Overlapping intervals
      merged[merged.length - 1] = [last[0], Math.max(last[1], current[1])];
    } else {
      merged.push(current);
    }
  }

  return merged;
}

export default mergeIntervals;
