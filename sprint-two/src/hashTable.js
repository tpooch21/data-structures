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

// TestCases:
//


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._storage = {get: f(), set: f()}
  this.tupleCount = 0;

  this.requireStorageUpdate = function () {
    var ratio = this.tupleCount / this._limit;
    if (ratio >= .75) {
      return {'status': 'increase'};
    } else if (ratio <= .25) {
      return {'status': 'decrease'};
    }
    return {'status': 'okay'};
  };
};

HashTable.prototype.increaseStorage = function() {
  // Multiply this.limit by 2
  this._limit *= 2;
  // Create new instance of Limited Array(this.limit)
  // create a temporaryStorage = this._storage;
  var tempStorage = this._storage;
  this._storage = new LimitedArray(this._limit);
  // temporaryStorage.each - function(nestedArr) {

  tempStorage.each(function(nestedArray) {
    if (!nestedArray) {
      return;
    }
    nestedArray.forEach(function(tuple) {
      // debugger
      HashTable.prototype.insert.call(this, tuple[0], tuple[1]);
      this.insert(tuple[0], tuple[1]);
    });
  });
  //      var index = indexBelowMax(tuple[0], this._limit)
};

HashTable.prototype.decreaseStorage = function() {
  debugger;
  this._limit /= 2;
  var tempStorage = this._storage;
  this._storage = new LimitedArray(this._limit);
  // temporaryStorage.each - function(nestedArr) {
  tempStorage.each(function(nestedArray) {
    if (!nestedArray) {
      return;
    }
    nestedArray.forEach(function(tuple) {
      this.insert(tuple[0], tuple[1]);
    });
  });
  //      var index = indexBelowMax(tuple[0], this._limit)
};

HashTable.prototype.insert = function(k, v) {
  // check if adding it will increase the storage over 75%
  //  if true: double.
  var index = getIndexBelowMaxForKey(k, this._limit);
  var kv = [k, v];

  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  }

  var arrayAtIndex = this._storage.get(index);
  for (var i = 0; i < arrayAtIndex.length; i += 1) {
    if (arrayAtIndex[i][0] === k) {
      arrayAtIndex[i][1] = v;
      return;
    }
  }
  arrayAtIndex.push(kv);
  this.tupleCount++;
  if (this.requireStorageUpdate().status === 'increase') {
    this.increaseStorage();
  }
  // Check tuple to storage ratio
  //    If tuple storage ratio >75% or <25% return true
  //    Else, return false
  // If true, call update storage function
  // If false, do nothing
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var arrayAtIndex = this._storage.get(index);
  if (!arrayAtIndex) {
    return undefined;
  }
  for (var i = 0; i < arrayAtIndex.length; i += 1) {
    if (arrayAtIndex[i][0] === k) {
      return arrayAtIndex[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  // check if removing will drop the storage below 25%
  //  if true: halve the size

  var index = getIndexBelowMaxForKey(k, this._limit);

  var arrayAtIndex = this._storage.get(index);
  if (!arrayAtIndex) {
    return undefined;
  }
  for (var i = 0; i < arrayAtIndex.length; i += 1) {
    if (arrayAtIndex[i][0] === k) {
      arrayAtIndex.splice(i, 1);
      this.tupleCount--;
      if (this.requireStorageUpdate().status === 'decrease') {
        this.decreaseStorage();
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */


