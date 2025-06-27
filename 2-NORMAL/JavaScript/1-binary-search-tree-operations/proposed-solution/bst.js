// bst.js - Binary Search Tree implementation

function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    this.root = this._insertRec(this.root, key);
  }

  _insertRec(node, key) {
    if (node === null) {
      return new Node(key);
    }
    if (key < node.key) {
      node.left = this._insertRec(node.left, key);
    } else {
      node.right = this._insertRec(node.right, key);
    }
    return node;
  }

  search(key) {
    return this._searchRec(this.root, key);
  }

  _searchRec(node, key) {
    if (node === null) return false;
    if (key === node.key) return true;
    if (key < node.key) return this._searchRec(node.left, key);
    else return this._searchRec(node.right, key);
  }

  delete(key) {
    this.root = this._deleteRec(this.root, key);
  }

  _deleteRec(node, key) {
    if (node === null) return null;

    if (key < node.key) {
      node.left = this._deleteRec(node.left, key);
    } else if (key > node.key) {
      node.right = this._deleteRec(node.right, key);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      node.key = this._minValue(node.right);
      node.right = this._deleteRec(node.right, node.key);
    }
    return node;
  }

  _minValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.key;
  }

  inorder() {
    return this._traverse(this.root, []);
  }

  preorder() {
    return this._traverse(this.root, [], "preorder");
  }

  postorder() {
    return this._traverse(this.root, [], "postorder");
  }

  _traverse(node, result, order = "inorder") {
    if (node === null) return result;

    if (order === "preorder") result.push(node.key);
    this._traverse(node.left, result, order);
    if (order === "inorder") result.push(node.key);
    this._traverse(node.right, result, order);
    if (order === "postorder") result.push(node.key);

    return result;
  }
}

module.exports = { BinarySearchTree };
