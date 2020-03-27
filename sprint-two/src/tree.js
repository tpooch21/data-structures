// Tree: A tree will have a node that has child nodes and the child nodes will potentially have more child nodes

// addChildMethod: take a value and sets that value as a target of a node and sets the node as a child of the tree
// contains: takes an input and returns a boolean, based on whether that input can be found as a value of the target node or any descendant node.
// Our class function takes in a value and sets the as the root of the tree, returning the new tree

// TestCases:


var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  // Add new tree to this.children
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var searchTree = function(tree, value) {
    if (tree.value === value) {
      return true;
    }
    var result = false;
    var children = tree.children;

    if (children.length) {
      for (var i = 0; i < children.length; i += 1) {
        result = searchTree(children[i], value);
        if (result) {
          return true;
        }
      }
    }

    return result;
  };

  return searchTree(this, target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
