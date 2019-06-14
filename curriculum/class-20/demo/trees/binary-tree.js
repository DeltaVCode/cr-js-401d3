'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
  }

  visit(visitor, order = 'inorder') {
    visitHelper(this.root);

    function visitHelper(node) {
      if (node === null) return;

      if (order === 'preorder')
        visitor(node.value);

      visitHelper(node.left);

      if (order === 'inorder')
        visitor(node.value);

      visitHelper(node.right);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

BinaryTree.Node = Node;
module.exports = BinaryTree;
