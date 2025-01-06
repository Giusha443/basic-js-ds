const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  createNode(data) {
    return new Node(data);
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = this.createNode(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.searchNode(this.rootNode, data) !== null;
  }
  searchNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      return node;
    }

    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else {
      return this.searchNode(node.right, data);
    }
  }

  find(data) {
    return this.searchNode(this.rootNode, data);
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      return;
    }

    let min = this.rootNode;
    while (min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    let node = this.rootNode;
    while (node && node.right !== null) {
      node = node.right;
    }
    return node ? node.data : null;
  }
}

module.exports = {
  BinarySearchTree,
};
