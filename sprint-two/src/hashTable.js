// Hashtables: store key value pairs
//   they use a hashing function to translate keys into numerical indeces.
//   They only increase their size when storage has reach 75% and reduce their size if capacity is only at 25%
//   We want to store out key value pair as tuples in this._storage

// Methods:
//  insert: we store the index in variable index
//      create a tuple -> [key, value]
//      if this._storage at index is undefined:
//        set this._storage at index to an empty array and push the tuple into the empty array
//      push the tuple to this._storage at index **

//  retrieve:
//      store the index of the input key
//      do a lookup on this._storage at index and store the results to var tupleAtIndex
//      iterate over each of the tuples at tupleAtIndex
//          if tupleAtIndex sub i, sub 0 is equal to k: return sub sub i, sub 1
//          else continue
//      return undefined;

//  remove:
//      store the index of the input key
//      store KVTuples from this._storage at index
//      iterate through KVTuples, as KVTuple
//        if KVTuples sub i, sub 0 is equal to k: store the i and splice KVTuples from index i
//        else continue
//      return undefined


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


