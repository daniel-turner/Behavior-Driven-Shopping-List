var should = chai.should();

describe('Behavior Driven Shopping List', function () {

  describe('Shopping List Item', function () {

   beforeEach(function () {
     var apple = new ShoppingListItem('apple','tasty and red; no worms');
   });


    it('ShoppingListItem is a function', function () {

      ShoppingListItem.should.be.a('function');
    });

    it('ShoppingListItem has a property named name', function() {

      apple.should.have.property('name');
    });

    it('ShoppingListItem has a property named description', function() {

      apple.should.have.property('description');
    });

    it('ShoppingListItem has a property named is_done', function() {

      apple.should.have.property('is_done');
    });

    describe('constructor', function(){


      it('ShoppingListItem sets parameters at instantiation', function() {

        apple.name.should.be.equal('apple');
        apple.description.should.be.equal('tasty and red; no worms');
      });
    });

    describe('check', function() {

      it('check method exists', function() {

        apple.check.should.be.a('function');
      })

      it('check sets is_done to true', function() {

        apple.check();
        apple.is_done.should.be.true;
      });
    });

    describe('uncheck', function() {

      it('uncheck method exists', function() {

        apple.uncheck.should.be.a('function');
      });

      it('uncheck sets is_done to false', function() {

        apple.uncheck();
        apple.is_done.should.be.false;
      });
    });

    describe('render', function() {

      it('render method exists', function() {

        apple.render.should.be.a('function');
      });

      it('render should return a string', function() {

        apple.render().should.be.a('string');
      });

      it('render should return a string wrapped in "s', function() {

        apple.render().indexOf('"').should.be.equal(0);
        apple.render().lastIndexOf('"').should.be.equal(apple.render().length);

      });

    });


  });


  describe('Shopping List', function () {

  });





});