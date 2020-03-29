
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};

  // Rather than defining each method within the body of Stack(), reference methods in stackMethods object
  return _.extend(someInstance, stackMethods);

};

// Define methods within stackMethods so that interpreter only visits them once
var stackMethods = {

  push: function(value) {
    // Determine length of Object.keys(), and store in var newKey (length should equal next key to be added)
    var newKey = Object.keys(this.storage).length;
    // Add property to storage, with key newKey and value assigned to input string
    this.storage[newKey] = value;
  },

  pop: function() {
    // To determine what to delete from storage object, find last item using Object.keys().length - 1, which represents lastKey
    var lastKey = Object.keys(this.storage).length - 1;
    // Store the value at the lastKey in var valToPop
    var valToPop = this.storage[lastKey];
    // Delete property at lastKey
    delete this.storage[lastKey];
    // Return valToPop
    return valToPop;
  },

  size: function() {
    // Return length of Object.keys()
    return Object.keys(this.storage).length;
  }
};

var pancake = Stack();
console.log(pancake);


