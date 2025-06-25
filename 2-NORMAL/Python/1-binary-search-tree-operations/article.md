# Challenge Description and Solution

## English Version

### Challenge Description
Implement a binary search tree (BST) that supports insertions, searches, and deletions. Test different traversals (in-order, pre-order, and post-order) to ensure the tree updates correctly.

### Code Explanation
The BST is implemented with a `Node` class representing each node and a `BinarySearchTree` class managing the tree. The tree supports:
- `insert(key)`: Inserts a key into the BST.
- `search(key)`: Searches for a key in the BST.
- `delete(key)`: Deletes a key from the BST.
- Traversal methods: `inorder()`, `preorder()`, and `postorder()` return lists of keys in respective traversal orders.

The deletion handles three cases:
- Node with no children.
- Node with one child.
- Node with two children (replaces with inorder successor).

### Relevant Code Snippets

```python
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, key):
        if self.root is None:
            self.root = Node(key)
        else:
            self._insert(self.root, key)

    def _insert(self, root, key):
        if key < root.key:
            if root.left is None:
                root.left = Node(key)
            else:
                self._insert(root.left, key)
        else:
            if root.right is None:
                root.right = Node(key)
            else:
                self._insert(root.right, key)
```

### Historical Context
Binary Search Trees are fundamental data structures in computer science, used to maintain sorted data and allow efficient insertion, deletion, and lookup operations. They form the basis for more advanced balanced trees like AVL and Red-Black trees.

---

## Versión en Español

### Descripción del Reto
Implementa un árbol binario de búsqueda (BST) que soporte inserciones, búsquedas y eliminaciones. Prueba diferentes recorridos (inorden, preorden y postorden) para asegurar que el árbol se actualice correctamente.

### Explicación del Código
El BST se implementa con una clase `Node` que representa cada nodo y una clase `BinarySearchTree` que maneja el árbol. El árbol soporta:
- `insert(key)`: Inserta una clave en el BST.
- `search(key)`: Busca una clave en el BST.
- `delete(key)`: Elimina una clave del BST.
- Métodos de recorrido: `inorder()`, `preorder()` y `postorder()` que retornan listas de claves en los respectivos órdenes de recorrido.

La eliminación maneja tres casos:
- Nodo sin hijos.
- Nodo con un hijo.
- Nodo con dos hijos (se reemplaza con el sucesor en inorden).

### Fragmentos de Código Relevantes

```python
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, key):
        if self.root is None:
            self.root = Node(key)
        else:
            self._insert(self.root, key)

    def _insert(self, root, key):
        if key < root.key:
            if root.left is None:
                root.left = Node(key)
            else:
                self._insert(root.left, key)
        else:
            if root.right is None:
                root.right = Node(key)
            else:
                self._insert(root.right, key)
```

### Contexto Histórico
Los árboles binarios de búsqueda son estructuras de datos fundamentales en la informática, utilizadas para mantener datos ordenados y permitir inserciones, eliminaciones y búsquedas eficientes. Forman la base para árboles balanceados más avanzados como AVL y Red-Black.
