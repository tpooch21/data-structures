describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should return undefined if new BinarySearchTree is created with null', function () {
    expect(BinarySearchTree.bind(null, null)).to.throw('Parameter is not a valid value!');
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should have a root', function () {
    expect(binarySearchTree.contains(5)).to.equal(true);
  });

  it('should not do anything when inserting a duplicate node', function () {
    binarySearchTree.insert(5);
    expect(binarySearchTree.left).to.equal(null);
    expect(binarySearchTree.right).to.equal(null);
  });

  it('should not treat negative nodes any differently than positive nodes', function () {
    binarySearchTree.insert(-5);
    expect(binarySearchTree.left.value).to.equal(-5);
  });

  it ('should not do anything when inserting null value', function() {
    expect(binarySearchTree.insert.bind(binarySearchTree, null)).to.throw('Parameter is not a valid value!');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should have a "contains" method that returns true if tree has single node that equals input value', function() {
    binarySearchTree.insert(5);
    expect(binarySearchTree.contains(5)).to.equal(true);
  });


  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });
});

// contains:
//    check for non existent value
//    check the first node in the tree
//    check the leaf of a tree

// insert:
//    insert one node: expect the tree to have 1 node
//    insert a smaller value than the root: expect left child
//    insert a greater value than the root: expect node to be a right child
//    insert a value === to the node: should do nothing
//    insert null: should do nothing
//    insert a negative number


