// Set is a unordered data structure that stores unique values
// Set is going to be created in a prototypal pattern
// Set._storage = {'inputString': 1}

// Add: Expecting a string input, and adding it to the set storage
//    Check if string input does not exist in storage using obj property lookup
//    If true, add item to storage (as key), with value 1
//    Else, return;

// Contains: O(1) - If value exists in storage, return true
// Else return false

// Remove: Delete the item from storage, if it exists

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (item in this._storage) {
    return;
  }
  this._storage[item] = 1;
};

setPrototype.contains = function(item) {
  if (item in this._storage) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 Add: O(1)
 Contains: O(1)
 Remove: O(1)
 */
