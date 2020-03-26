var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Create storage property on someInstance object
  someInstance.storage = {};


  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var storageProps = [];
  for (var key in this.storage) {
    storageProps.push(this.storage[key]);
  }
  storageProps.unshift(value);
  for (var i = 0; i < storageProps.length; i++) {
    this.storage[i] = storageProps[i];
  }
};


var queue = Queue();
// queue = someInstance = {enqueue, dequeue, etc.}
// queue.enqueue = someInstance.enqueue =


