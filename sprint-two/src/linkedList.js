var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // {head: node1, tail: node5}
  //   node1 -> node2 -> node3 -> node4 -> node5
  // Linked list - Non-contiguous, linear collection of data consisting of nodes that point from one node to the next

  // LinkedList is expecting a value to be added to tail
  // Deletion should not affect LinkedList if there are no existing nodes

  // head --> [1, ] --> [2, ] --> [3, ] <-- tail

  // head -> [1]-> [2] -> null
  // current = current.next

  // TestCases:
  //  should have head and tail
  //  should have all methods
  //  should designate a new tail when new nodes are added
  //  should remove the head from the list when removeHead is called

  //  should return the value of the former head when removehead is called
  //  should contain a value that was added
  //  should not contain a value that was removed

  //  call removehead and contains with an undefined head
  //  when removeHead is called, it should designate a new node as the head ***
  //  when calling contain with a value that doens't exist: should return false



  list.addToTail = function(value) {
    // Create a new node
    var newNode = Node(value);
    // Check is list.head === null
    if (list.head === null) {
    //    Set head to new node if null
      list.head = newNode;
      //    Set tail to new node
      list.tail = newNode;
    // Else list.head exists
    } else {
    //    Set list.tail.next = new node
      list.tail.next = newNode;
      //    Set list.tail = new node
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // Check if head is empty, return undefined if true
    if (!list.head) {
      return undefined;
    }
    //    Store list.head in var item
    var item = list.head;
    //    Move head to head.next
    list.head = item.next;
    // Return item
    return item.value;
  };

  list.contains = function(target) {
    // Iterate through LinkedList looking for a node that contains target value
    // If head is empty, return false
    if (!list.head) {
      return false;
    }
    //    Create var current = head
    var current = list.head;
    //    While (current) {Check if current.value === target, return true}
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    //    Return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail: O(1)
    removeHead: O(1)
    contains(): O(n)
 */


