var BinarySearchTree = function(value) {
  // BST: is a tree data structure with nodes in which right child node of the given node have a higher value and left child node will have a lower value
  //  The left child node will always be smaller than the parent and sibling node to the right.
  //  The right child node will always be greater than the parent node and the sibling node to the left
  //  Each child node can be a root of a BST
  //  A child node that is a leaf means they have no children
  if (!value) {
    throw 'Parameter is not a valid value!';
  }

  this.value = value;
  this.left = null;
  this.right = null;
};



// contruction details:
//    node value
//    node children

//  Properties:
//    left: has a node that is smaller than itself
//    right: has a node that is greater than itself

// Methods:

//    insert(value): accepts a value and places it in the tree in the correct position
//      compare our input value to this.value
//      if input value > this.value:
//        check if this.right is defined
//        if undefined: set this.right to a new instance our of BST with input value
//        else if defined: then call our insert function on this.right with the same input value
//      else if input value < this.value:
//        check if this.left is defined
//        if undefined: set this.left to a new instance of our BST with input value
//        else if defined: then call our function on this.left with the same input value
//      else if input value === this.value:
//        return undefined; --- do nothing

BinarySearchTree.prototype.insert = function(value) {
  if (!value) {
    throw 'Parameter is not a valid value!';
  }

  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

//    contains: accepts a value and returns a boolean, reflecting whether the value is contained in the tree
//        compare the input value to this.value
//        if input value is greater: call contains on this.right
//        else if input value is less than: call contains on this.left
//        else if input value is equal to this.value: return true
//        else return false

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true;
  }

  if (value > this.value && this.right) {
    return this.right.contains(value);
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  }

  return false;
};
//    depthFirstLog(cb): accepts a callback, and executes it in every value in the tree
//      postOrder:
//        check left:  invoke depthFirstLog on left
//        check right:  invoke depthFirstLog on right
//        invoke cb with this.value

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }

};

// Notes:
//  this tree will be implemented in pseudoclassical

/*
 * Complexity: What is the time complexity of the above functions?
    insert: O(logn)
    contains: O(logn)
    depthFirstLog: O(n)
 */
