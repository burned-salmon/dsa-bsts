class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // if tree is empty, insert at root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    // if tree isn't empty, find the right spot
    let currentNode = this.root;
    while (true) {
      if (val < currentNode.val) {
        if (currentNode.left == null) {
          currentNode.left = new Node(val);
          return this;
        }
        else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.val) {
        if (currentNode.right == null) {
          currentNode.right = new Node(val);
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    // if tree is empty, insert at root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < currentNode.val) {
      if (currentNode.left == null) {
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left);
    } else {
      if (currentNode.right == null) {
        currentNode.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    let found = false;

    while (!found && currentNode) {
      if (val == currentNode.val) {
        found = true;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      }
    }

    if (found) return currentNode;
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    // base case, I think?
    if (currentNode.val == val) {
      return currentNode;
    }

    if (val < currentNode.val) {
      if (currentNode.left == null) {
        return undefined;
      }
      return this.findRecursively(val, currentNode.left);
    } else {
      if (currentNode.right == null) {
        return undefined;
      }
      return this.findRecursively(val, currentNode.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      // The description says to return an array of the nodes, but the tests require an array of the VALUES in the nodes.
      // Maybe be more careful when writing these assignments next time?
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }

    traverse(current);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    let node = this.root;
    let queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return visited;
  }
}

module.exports = BinarySearchTree;
