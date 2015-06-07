var should = chai.should();

describe('Behavior Driven Shopping List', function () {

  describe('Shopping List Item', function () {

    beforeEach(function () {
      var apple = new ShoppingListItem('apple');
    });

    it('Shopping List Item is a class', function (done) {
      Shopping_List_Item.should.be.a.function;
    });



  });


  describe('Shopping List', function () {

  });





});