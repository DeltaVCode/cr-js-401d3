'use strict';

const BinaryTree = require('./binary-tree');

describe('BinaryTree', () => {
  it('has null root initially', () => {
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  describe('Node', ()=> {
    it('has null left initially', () => {
      let node = new BinaryTree.Node();
      expect(node.left).toBeNull();
    });
    it('has null right initially', () => {
      let node = new BinaryTree.Node();
      expect(node.right).toBeNull();
    });
  });

  describe('visit', () => {
    describe('without order uses inorder traversal', () => {
      it('does not call visitor for empty tree', () => {
        // Arrange
        let tree = new BinaryTree();
        let visitor = jest.fn();

        // Act
        tree.visit(visitor);

        // Assert
        expect(visitor).not.toHaveBeenCalled();
      });

      it('does not call visitor for empty tree, without mock', () => {
        // Arrange
        let tree = new BinaryTree();
        let values = [];
        let visitor = value => values.push(value);

        // Act
        tree.visit(visitor);

        // Assert
        expect(values).toEqual([]);
      });

      it('works for tree with stuff', () => {
        // Arrange
        let tree = testTree();
        let visitor = jest.fn();

        // Act
        tree.visit(visitor);

        // Assert
        expect(visitor).toHaveBeenCalledWith(17)
        expect(visitor).toHaveBeenCalledWith(42)
        expect(visitor).toHaveBeenCalledWith(56)
        expect(visitor).toHaveBeenCalledWith(84)
        expect(visitor).toHaveBeenCalledWith(0)
        expect(visitor).toHaveBeenCalledWith(3)

        expect(visitor.mock.calls).toEqual([
          [17], [42], [56], [84], [0], [3]
        ]);
      });

      it('works for tree with stuff, without mock', () => {
        // Arrange
        let tree = testTree();
        let values = [];
        let visitor = value => values.push(value);

        // Act
        tree.visit(visitor);

        // Assert
        expect(values).toEqual([17,42,56,84,0,3]);
      });
    });

    describe('preorder', () => {
      it('works for tree with stuff, without mock', () => {
        // Arrange
        let tree = testTree();
        let values = [];
        let visitor = value => values.push(value);

        // Act
        tree.visit(visitor, 'preorder');

        // Assert
        expect(values).toEqual([42, 17, 84, 56, 3, 0]);
      });
    });
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
  return tree;
}