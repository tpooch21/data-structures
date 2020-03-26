var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create an object that delegates to prototype stackMethods
  var someInstance = Object.create(stackMethods);
  // Create a storage property on the someInstance object, with an object literal as its value
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

// Push method adds a string to the top of the stack
stackMethods.push = function(value) {
  // Determine keyToAdd using Object.keys().length, since storage keys represent array indices
  var keyToAdd = Object.keys(this.storage).length;
  // Add keyToAdd to storage object, with input value as value
  this.storage[keyToAdd] = value;
};

stackMethods.pop = function() {
  // Store last key in var lastKey
  var lastKey = Object.keys(this.storage).length - 1;
  // Store last value in var lastValue
  var lastValue = this.storage[lastKey];
  // Delete property at lastKey
  delete this.storage[lastKey];
  // Return lastValue
  return lastValue;
};



