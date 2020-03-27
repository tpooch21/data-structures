// Graph is a data structure that consists of nodes and edges, nodes have symmetrical relationships with each other (undirectional)

// Graph is going to create a new
// Set property adjacentNodes = {}

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.nodes[node]) {
    return;
  }
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (node in this.nodes) {
    return true;
  }
  return false;
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
  //  if toNode is in edges: return true else false
  if (toNode in edges) {
    return true;
  }
  return false;
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
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
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



