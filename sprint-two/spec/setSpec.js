describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should not alter the set after trying to remove an item that does not exist in the set', function() {
    set.add('Trevor Puccini');
    set.add('Trevor Puccini');
    var currentSet = set;
    set.remove('Shoji Takashima');
    expect(set).to.equal(currentSet);
  });

  it ('should return true if it contains a specified value', function() {
    set.add('Banana');
    expect(set.contains('Banana')).to.equal(true);
  });

  it('should return false if contains cannot find the item', function() {
    expect(set.contains('not valid')).to.equal(false);
  });

  it('should only contain unique values', function() {
    set.add('Shoji Takashima');
    set.add('Shoji Takashima');
    expect(set.contains('Shoji Takashima')).to.equal(true);
    set.remove('Shoji Takashima');
    expect(set.contains('Shoji Takashima')).to.equal(false);
  });

});
