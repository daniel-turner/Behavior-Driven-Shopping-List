var should = chai.should();

describe('Behavior Driven Shopping List', function () {

  describe('Shopping List Item', function () {

    beforeEach(function () {
      var apple = new ShoppingListItem('apple');
    });

    it('ShoppingListItem is a function', function () {
      ShoppingListItem.should.be.a('function');
    });


  });


  describe('Shopping List', function () {

  });





});