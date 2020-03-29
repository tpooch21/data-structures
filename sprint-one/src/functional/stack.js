var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Find number of keys by calling Object.keys().length
    var numOfKeys = Object.keys(storage).length;
    // Since keys represent array indices starting at 0, numOfKeys will represent new key to add
    var keyToAdd = numOfKeys;
    // Add key, with input string as value
    storage[keyToAdd] = value;
  };

  someInstance.pop = function() {
    // Find the last key and attach var keyToPop to it (keys represent index values so can be treated same as finding last index of an array)
    var keyToPop = (Object.keys(storage).length - 1).toString();
    // Save value at last key in var valToPop
    var valToPop = storage[keyToPop];
    // Delete property at last key
    delete storage[keyToPop];
    // Return value at last key
    return valToPop;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};


