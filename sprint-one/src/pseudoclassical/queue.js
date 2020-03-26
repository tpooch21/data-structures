var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Add property to objects created by Queue, equal to an empty object
  this.storage = {};
};

// Create instance of Queue using 'new'
var queue = new Queue();

// Add methods to Queue.prototype, which will be accessible to objects created by Queue constructor
Queue.prototype.enqueue = function(value) {
  // Create an array
  var array = [];
  // Iterate over properties in storage object and add property values to array
  for (var key in this.storage) {
    array.push(this.storage[key]);
  }
  // Add input value to beginning of array
  array.unshift(value);
  // Iterate over elements in array and add them as properties to storage, with property name i and property value array[i]
  // Any properties previously sitting in storage object will be overwritten
  for (var i = 0; i < array.length; i++) {
    this.storage[i] = array[i];
  }
};

Queue.prototype.dequeue = function() {
  // Store last key of storage in var lastKey by using Object.keys().length - 1
  var lastKey = Object.keys(this.storage).length - 1;
  // Store last value in var lastValue
  var lastValue = this.storage[lastKey];
  // Delete property at lastKey
  delete this.storage[lastKey];
  // Return lastValue
  return lastValue;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};




