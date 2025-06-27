# Challenge Description and Solution

## English Version

### Challenge Description
Implement a binary search tree (BST) that supports insertions, searches, and deletions. Test different traversals (in-order, pre-order, and post-order) to ensure the tree updates correctly.

### Code Explanation
The BST is implemented with a `Node` class representing each node and a `BinarySearchTree` class managing the tree. The tree supports:
- `insert(key)`: Inserts a key into the BST.
- `search(key)`: Searches for a key in the BST.
- `delete(key)`: Deletes a key from the BST.
- Traversal methods: `inorder()`, `preorder()`, and `postorder()` return arrays of keys in respective traversal orders.

The deletion handles three cases:
- Node with no children.
- Node with one child.
- Node with two children (replaces with inorder successor).

### Relevant Code Snippet

```javascript
class BinarySearchTree {
    // ... class implementation as in bst.js ...
}
```

### Example Usage

```javascript
const bst = new BinarySearchTree();
[50, 30, 20, 40, 70, 60, 80].forEach(key => bst.insert(key));

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
```

---

## Versión en Español

### Descripción del Reto
Implementa un árbol binario de búsqueda (BST) que soporte inserciones, búsquedas y eliminaciones. Prueba diferentes recorridos (inorden, preorden y postorden) para asegurar que el árbol se actualice correctamente.

### Explicación del Código
El BST se implementa con una clase `Node` que representa cada nodo y una clase `BinarySearchTree` que maneja el árbol. El árbol soporta:
- `insert(key)`: Inserta una clave en el BST.
- `search(key)`: Busca una clave en el BST.
- `delete(key)`: Elimina una clave del BST.
- Métodos de recorrido: `inorder()`, `preorder()` y `postorder()` que retornan arreglos de claves en los respectivos órdenes de recorrido.

La eliminación maneja tres casos:
- Nodo sin hijos.
- Nodo con un hijo.
- Nodo con dos hijos (se reemplaza con el sucesor en inorden).

### Fragmento de Código Relevante

```javascript
class BinarySearchTree {
    // ... implementación de la clase como en bst.js ...
}
```

### Ejemplo de Uso

```javascript
const bst = new BinarySearchTree();
[50, 30, 20, 40, 70, 60, 80].forEach(key => bst.insert(key));

console.log("Recorrido inorden:");
console.log(bst.inorder());

console.log("Recorrido preorden:");
console.log(bst.preorder());

console.log("Recorrido postorden:");
console.log(bst.postorder());

const key = 40;
const found = bst.search(key);
console.log(`Búsqueda de ${key}: ${found ? "Encontrado" : "No encontrado"}`);

bst.delete(20);
console.log("Recorrido inorden después de eliminar 20:");
console.log(bst.inorder());

bst.delete(30);
console.log("Recorrido inorden después de eliminar 30:");
console.log(bst.inorder());

bst.delete(50);
console.log("Recorrido inorden después de eliminar 50:");
console.log(bst.inorder());
