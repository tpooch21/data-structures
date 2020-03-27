// Graph is a data structure that consists of nodes and edges, nodes have symmetrical relationships with each other (undirectional)

// Graph is going to create a new
// Set property adjacentNodes = []

// addNode:
//

// graph = {
//   nodes = [5, 2, 3]
//   edges = [[0,1,0, 0],[1,0,0,1],[],[]]

//   indexOf(value)
//   var index5 = 0;
//   edges5 = [0, 1, 0, 0];
//   for (var i = 0; i < edges5.length; i++) {
//     if (edges5[i] === 1) {
//       edges[i].splice(index5, 1);
//     }
//   }
// }

// edges[index5].keys().forEach((key) => {
//   edges[key].remove(index5)
// }

// 2, 3
// indexOf(2) = 1
// indexOf(3) = 2
// var array2 = edges[1]
// iterate over edges
// edges[1][2]

// [{2}, {3}, {}]
// {'2': {4,1}}
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Graph.prototype._in = function (array, target) {
//   for (var i = 0; i < array.length; i += 1) {
//     if (array[i] === target) {
//       return true;
//     }
//   }

//   return false;
// }
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.nodes[node] equal to a new set
  if (!(this.nodes[node])) {
    this.nodes[node] = {};
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (node in this.nodes) {
    return true;
  }
  return false;
  // for in loop to iterate over the keys
  //    check the key by converting key into a number, if found: return true
  // return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Iterate through the keys of the set at the node being passed in
  var edges = this.nodes[node];
  for (var key in edges) {
    var adjacentNodeEdges = this.nodes[key];
    delete adjacentNodeEdges[node];
  }

  // remove the property at
  delete this.nodes[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.nodes[fromNode] || !this.nodes[toNode]) {
    return false;
  }
  // we can do a lookup fromNode in our nodes dictionary
  var edges = this.nodes[fromNode];
  //  if toNode is in set
  if (toNode in edges) {
    return true;
  }
  return false;
  //      return true
  // return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //  if the value at key fromNode or value at key toNode are undefined: return;
  if (!this.nodes[fromNode] || !this.nodes[toNode]) {
    return;
  }
  //  do a lookup fromnode in our nodes dictionary
  var fromNodeEdges = this.nodes[fromNode];
  var toNodeEdges = this.nodes[toNode];

  // if our fromNode edge does not have toNode add conneciton to both node edges
  if (!(toNode in fromNodeEdges)) {
    fromNodeEdges[toNode] = 1;
    toNodeEdges[fromNode] = 1;
  }
  //  if toNode not in set edges
  //    add toNode
  //    lookup on toNode
  //    add fromNode to toNode's set
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //  if the value at key fromNode or value at key toNode are undefined: return;
  if (!this.nodes[fromNode] || !this.nodes[toNode]) {
    return;
  }
  //  lookup fromNode in our nodes dictionary
  var fromNodeEdges = this.nodes[fromNode];
  var toNodeEdges = this.nodes[toNode];
  //  if toNode is in fromNode set
  if (toNode in fromNodeEdges) {
    delete fromNodeEdges[toNode];
    delete toNodeEdges[fromNode];
  }
  //    then remove toNode
  //   lookup toNode in our nodes dictionary
  //   remove fromNode
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //  iterate over the keys using a for in loop
  //  call the cb on numeric value of each key
  for (var key in this.nodes) {
    cb(parseInt(key));
  }
};


/*

  addNode: O(1)
  contains: O(n)
  removeNode: O(1)
  hasEdge: O(1)
  addEdge: O(1)
  removeEdge: O(1)
  forEachNode: O(n) * Complexity: What is the time complexity of the above functions?
 */



