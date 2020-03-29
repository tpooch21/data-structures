class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  // Define methods within class body
  push(value) {
    // Get length of storage object keys array and assign length to var keyToAdd
    var keyToAdd = Object.keys(this.storage).length;
    // Add property to storage with key keyToAdd and input value as value
    this.storage[keyToAdd] = value;
  }

  pop() {
    // Get last key by treating storage object properties like array indices
    var lastKey = Object.keys(this.storage).length - 1;
    // Assign value at lastKey to var lastValue
    var lastValue = this.storage[lastKey];
    // Delete property at lastKey
    delete this.storage[lastKey];
    // Return lastValue
    return lastValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

var stack = new Stack();