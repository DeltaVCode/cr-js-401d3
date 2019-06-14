'use strict';

const BinaryTree = require('./binary-tree');

/*
// Using visit
function oddSum(tree) {
  let sum = 0;
  tree.visit(value => {
    if (value % 2 === 1)
      sum += value;
  });

  return sum;
}
*/

function oddSum(tree) {
  return oddSumHelper(tree.root);

  function oddSumHelper(node) {
    if (node === null) return 0;

    let sum = 0;
    // if (node.value % 2 === 1)
    // {
    //   sum += node.value;
    // }

    // sum += (node.value % 2) === 1 ? node.value : 0;
    // sum += (node.value % 2) ? node.value : 0;
    // sum += (node.value % 2) === 1 && node.value;
    sum += node.value % 2 && node.value;
    // sum += (node.value % 2) * node.value;

    sum += oddSumHelper(node.left);
    sum += oddSumHelper(node.right);

    return sum;
  }
}

describe('oddSum', () => {
  it('returns 0 for empty tree', () => {
    let tree = new BinaryTree()

    let res = oddSum(tree);

    expect(res).toBe(0);
  });

  it('returns correct sum for tree with values', () => {
    let tree = testTree();

    let res = oddSum(tree);

    expect(res).toBe(25);
  });
});

function testTree() {
  var tree = new BinaryTree();
  tree.root = new BinaryTree.Node(42);
  tree.root.left = new BinaryTree.Node(17);
  tree.root.right = new BinaryTree.Node(84);
  tree.root.right.left = new BinaryTree.Node(56);
  tree.root.right.right = new BinaryTree.Node(3);
  tree.root.right.right.left = new BinaryTree.Node(0);
  tree.root.right.right.left.right = new BinaryTree.Node(5);
  return tree;
}