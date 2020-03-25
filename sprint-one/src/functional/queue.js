var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var storProperties = [];
    for (var key in storage) {
      storProperties.push(storage[key]);
    }
    storProperties.unshift(value);
    for (var i = 0; i < storProperties.length; i++) {
      storage[i] = storProperties[i];
    }
  };

  someInstance.dequeue = function() {
    var keyToDequeue = Object.keys(storage).length - 1;
    var valToDequeue = storage[keyToDequeue];
    delete storage[keyToDequeue];
    return valToDequeue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
