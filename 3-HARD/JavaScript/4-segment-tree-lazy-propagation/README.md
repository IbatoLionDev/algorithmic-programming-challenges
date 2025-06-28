# Segment Tree with Lazy Propagation

## English

Segment trees are advanced data structures used for efficient range queries and updates. Lazy propagation optimizes updates by deferring them, making segment trees suitable for scenarios with frequent range modifications.

This challenge involves implementing a segment tree that supports range sum queries and range updates efficiently using lazy propagation.

### Relevant Code Snippet

```javascript
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
```

### History

Segment trees have been widely used in competitive programming and computer science for efficient range queries and updates. Lazy propagation is a technique that defers updates to child nodes, improving performance when multiple range updates are involved.

---

## Español

Árbol de Segmentos con Propagación Perezosa

Los árboles de segmentos son estructuras de datos avanzadas usadas para consultas y actualizaciones eficientes en rangos. La propagación perezosa optimiza las actualizaciones al diferirlas, haciendo que los árboles de segmentos sean adecuados para escenarios con modificaciones frecuentes en rangos.

Este reto consiste en implementar un árbol de segmentos que soporte consultas de suma en rangos y actualizaciones en rangos de manera eficiente usando propagación perezosa.

### Fragmento de Código Relevante

```javascript
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
```

### Historia

Los árboles de segmentos han sido ampliamente usados en programación competitiva y ciencias de la computación para consultas y actualizaciones eficientes en rangos. La propagación perezosa es una técnica que difiere las actualizaciones a nodos hijos, mejorando el rendimiento cuando se involucran múltiples actualizaciones en rangos.
