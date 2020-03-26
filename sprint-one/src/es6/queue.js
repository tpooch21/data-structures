class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    // Iterate over property values in storage and add them to an array
    var storageProps = [];
    for (var key in this.storage) {
      storageProps.push(this.storage[key]);
    }
    // Add input value to the front of the array (end of the queue)
    storageProps.unshift(value);
    // Iterate over values in array and add them as properties to storage, with key i and value array[i]
    for (var i = 0; i < storageProps.length; i++) {
      this.storage[i] = storageProps[i];
    }
  }

  dequeue() {
    // Attach var lastKey to last key in storage object, found using Object.keys().length - 1
    var lastKey = Object.keys(this.storage).length - 1;
    // Attach var lastValue to value at lastKey
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

var queue = new Queue();