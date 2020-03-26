var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create an object that delegates failed lookups to prototype queueMethods
  var someInstance = Object.create(queueMethods);
  // Add a storage object property to someInstance
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue= function(value) {
  // Create an empty array
  var storageProps = [];
  // Iterate over storage object, and add each value to storageProps
  for (var key in this.storage) {
    storageProps.push(this.storage[key]);
  }
  // Add input value to beginning of array
  storageProps.unshift(value);
  // Iterate over items in array and add them to storage, key names as index values, and values as values
  for (var i = 0; i < storageProps.length; i++) {
    this.storage[i] = storageProps[i];
  }
};

queueMethods.dequeue = function() {
  // Find the last key and assign var lastKey to it
  var lastKey = Object.keys(this.storage).length - 1;
  // Store value at lastKey in var lastValue
  var lastValue = this.storage[lastKey];
  // Delete property at lastKey
  delete this.storage[lastKey];
  // Return lastValue
  return lastValue;
}


