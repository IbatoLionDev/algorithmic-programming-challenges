/*
Challenge: Implement a binary search tree (BST) that supports insertions, searches, and deletions.
Test different traversals (in-order, pre-order, and post-order) to ensure the tree updates correctly.
*/

// main.js - Example usage of BinarySearchTree

import { BinarySearchTree } from './bst.js';

function main() {
  const bst = new BinarySearchTree();
  [50, 30, 20, 40, 70, 60, 80].forEach((key) => bst.insert(key));

  console.log("Inorder traversal:");
  console.log(bst.inorder());

  console.log("Preorder traversal:");
  console.log(bst.preorder());

  console.log("Postorder traversal:");
  console.log(bst.postorder());

  const key = 40;
  const found = bst.search(key);
  console.log(`Search for ${key}: ${found ? "Found" : "Not found"}`);

  bst.delete(20);
  console.log("Inorder traversal after deleting 20:");
  console.log(bst.inorder());

  bst.delete(30);
  console.log("Inorder traversal after deleting 30:");
  console.log(bst.inorder());

  bst.delete(50);
  console.log("Inorder traversal after deleting 50:");
  console.log(bst.inorder());
}

main();
