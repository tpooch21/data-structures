var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Create storage property on someInstance object
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var storageProps = [];
  // Take every value from storage and store them in storageProps array
  for (var key in this.storage) {
    storageProps.push(this.storage[key]);
  }
  // Add input value to beginning of storageProps
  storageProps.unshift(value);
  // Add each element from storageProps as value to storage, with key name being the index value
  for (var i = 0; i < storageProps.length; i++) {
    this.storage[i] = storageProps[i];
  }
};

queueMethods.dequeue = function() {
  // Find lastKey using Object.keys().length
  var lastKey = Object.keys(this.storage).length - 1;
  // Store value at lastKey in var lastValue
  var lastValue = this.storage[lastKey];
  // Delete lastProperty
  delete this.storage[lastKey];
  // Return lastValue
  return lastValue;
};

queueMethods.size = function() {
  // Return length of storage object using Object.keys()
  return Object.keys(this.storage).length;
}

var queue = Queue();
// queue = someInstance = {enqueue, dequeue, etc.}
// queue.enqueue = someInstance.enqueue =


