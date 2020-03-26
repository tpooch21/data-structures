var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create an object that delegates to prototype stackMethods
  var someInstance = Object.create(stackMethods);
  // Create a storage property on the someInstance object, with an object literal as its value
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};


