var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  var storage = {};

  // Rather than defining each method within the body of Stack(), reference methods in stackMethods object
  someInstance.push = stackMethods.push;

};


// Define methods within stackMethods so that interpreter only visits them once
var stackMethods = {
  // Can interact with storage object due to closure created when Stack() is run
  push: function(value) {
    // Determine length of Object.keys(), and store in var newKey (length should equal next key to be added)
    var newKey = Object.keys(storage).length;
    // Add property to storage, with key newKey and value assigned to input string
    storage[newKey] = value;
  },

  pop: function() {
    // To determine what to delete from storage object, find last item using Object.keys().length - 1, which represents lastKey
    var lastKey = Object.keys(storage).length - 1;
    // Store the value at the lastKey in var valToPop
    var valToPop = storage[lastKey];
    // Delete property at lastKey
    delete storage[lastKey];
    // Return valToPop
    return valToPop;
  },

  size: function() {

  }

};


