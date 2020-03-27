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

// [{1,2}, {}, {}]
// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.nodes.push(node)
  // this.nodes.push([])
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Iterate through this.nodes and search for target node
  // If found, return true
  // Else return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Get the index of the given node
  // If index === -1, return;
  // [{3}, {0}, {1}]
  // var set = edges[index].keys()
  // while (set.next) {}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


