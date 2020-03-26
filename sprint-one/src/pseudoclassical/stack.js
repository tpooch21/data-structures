var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use 'this' to refer to object created by 'new', and create properties on 'new' object
  this.storage = {};
};

// Instantiate Stack object using 'new'
var stack = new Stack();

// Add methods to Stack prototype
Stack.prototype.push = function(value) {
  // Determine length of storage object and assign var lastKey to it
  var lastKey = Object.keys(this.storage).length;
  // Add prop lastKey with value of input value
  this.storage[lastKey] = value;
};