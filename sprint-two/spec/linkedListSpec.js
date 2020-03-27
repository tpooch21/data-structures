describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  //  call contains with an undefined head
  it('should return undefined if contains receives a undefined head', function () {
    expect(linkedList.contains(1)).to.equal(false);
  });
  //  call removehead  with an undefined head

  it('should return undefined if removeHead receives a undefined head', function () {
    expect(linkedList.removeHead()).to.equal(undefined);
  });

  //  when removeHead is called, it should designate a new node as the head ***
  it ('should designate a new node as the head when current head node is removed', function() {
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    var nextNode = linkedList.head.next.value;
    linkedList.removeHead();
    var newHead = linkedList.head.value;
    expect(newHead).to.equal(nextNode);
  });
  //  when calling contain with a value that doens't exist: should return false
  it ('should return false when calling contain with a value that does not exist', function () {
    linkedList.addToTail(5);
    var result = linkedList.contains(6);
    expect(result).to.equal(false);
  });
});
