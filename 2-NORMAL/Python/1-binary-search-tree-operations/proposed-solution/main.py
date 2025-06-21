# Challenge: Implement a binary search tree (BST) that supports insertions, searches, and deletions.
# Test different traversals (in-order, pre-order, and post-order) to ensure the tree updates correctly.

from bst import BinarySearchTree

def main():
    bst = BinarySearchTree()
    # Insert nodes
    for key in [50, 30, 20, 40, 70, 60, 80]:
        bst.insert(key)

    print("Inorder traversal:")
    print(bst.inorder())

    print("Preorder traversal:")
    print(bst.preorder())

    print("Postorder traversal:")
    print(bst.postorder())

    # Search for a key
    key = 40
    found = bst.search(key)
    print(f"Search for {key}: {'Found' if found else 'Not found'}")

    # Delete a key
    bst.delete(20)
    print("Inorder traversal after deleting 20:")
    print(bst.inorder())

    bst.delete(30)
    print("Inorder traversal after deleting 30:")
    print(bst.inorder())

    bst.delete(50)
    print("Inorder traversal after deleting 50:")
    print(bst.inorder())

if __name__ == "__main__":
    main()
