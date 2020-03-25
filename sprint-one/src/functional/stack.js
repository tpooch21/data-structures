var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var numOfKeys = Object.keys(storage).length;
    var keyToAdd = numOfKeys;
    storage[keyToAdd] = value;
  };

  someInstance.pop = function() {
    var keyToPop = (Object.keys(storage).length - 1).toString();
    var valToPop = storage[keyToPop];
    delete storage[keyToPop];
    return valToPop;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};



var pancake = Stack();
// pancake = someInstance = {}.push()
