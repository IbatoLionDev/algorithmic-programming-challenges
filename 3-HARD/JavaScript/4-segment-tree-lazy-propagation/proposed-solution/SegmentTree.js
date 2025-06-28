// SegmentTree.js - Segment Tree with Lazy Propagation in JavaScript

class SegmentTree {
  constructor(data) {
    this.n = data.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.lazy = new Array(4 * this.n).fill(0);
    this._build(data, 0, 0, this.n - 1);
  }

  _build(data, node, start, end) {
    if (start === end) {
      this.tree[node] = data[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      this._build(data, 2 * node + 1, start, mid);
      this._build(data, 2 * node + 2, mid + 1, end);
      this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }
  }

  _updateRange(node, start, end, l, r, val) {
    if (this.lazy[node] !== 0) {
      this.tree[node] += (end - start + 1) * this.lazy[node];
      if (start !== end) {
        this.lazy[2 * node + 1] += this.lazy[node];
        this.lazy[2 * node + 2] += this.lazy[node];
      }
      this.lazy[node] = 0;
    }

    if (start > r || end < l) {
      return;
    }

    if (l <= start && end <= r) {
      this.tree[node] += (end - start + 1) * val;
      if (start !== end) {
        this.lazy[2 * node + 1] += val;
        this.lazy[2 * node + 2] += val;
      }
      return;
    }

    const mid = Math.floor((start + end) / 2);
    this._updateRange(2 * node + 1, start, mid, l, r, val);
    this._updateRange(2 * node + 2, mid + 1, end, l, r, val);
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
  }

  updateRange(l, r, val) {
    this._updateRange(0, 0, this.n - 1, l, r, val);
  }

  _queryRange(node, start, end, l, r) {
    if (start > r || end < l) {
      return 0;
    }

    if (this.lazy[node] !== 0) {
      this.tree[node] += (end - start + 1) * this.lazy[node];
      if (start !== end) {
        this.lazy[2 * node + 1] += this.lazy[node];
        this.lazy[2 * node + 2] += this.lazy[node];
      }
      this.lazy[node] = 0;
    }

    if (l <= start && end <= r) {
      return this.tree[node];
    }

    const mid = Math.floor((start + end) / 2);
    const leftSum = this._queryRange(2 * node + 1, start, mid, l, r);
    const rightSum = this._queryRange(2 * node + 2, mid + 1, end, l, r);
    return leftSum + rightSum;
  }

  queryRange(l, r) {
    return this._queryRange(0, 0, this.n - 1, l, r);
  }
}

export default SegmentTree;
