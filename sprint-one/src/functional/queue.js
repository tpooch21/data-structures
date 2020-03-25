var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var storProperties = [];
    // Iterate through storage object and add each value to array
    for (var key in storage) {
      storProperties.push(storage[key]);
    }
    // Add string argument to array
    storProperties.unshift(value);
    // Iterate through each element in array and add properties with key i and value string
    for (var i = 0; i < storProperties.length; i++) {
      storage[i] = storProperties[i];
    }
  };

  someInstance.dequeue = function() {
    // Use Object.keys().length - 1 to find last key and associated value
    var keyToDequeue = Object.keys(storage).length - 1;
    var valToDequeue = storage[keyToDequeue];
    // Delete last property
    delete storage[keyToDequeue];
    // Return dequeued value
    return valToDequeue;
  };

  someInstance.size = function() {
    // Return length of storage keys array
    return Object.keys(storage).length;
  };

  return someInstance;
};
