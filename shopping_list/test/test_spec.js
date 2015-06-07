var should = chai.should();

describe('Behavior Driven Shopping List', function () {

  describe('Shopping List Item', function () {

    var apple;

     beforeEach(function () {
       apple = new ShoppingListItem('apple','tasty and red; no worms');
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

      it('render should return a string wrapped in <ul>s', function() {

        apple.render().indexOf('<li').should.be.above(-1);
        apple.render().lastIndexOf('</li>').should.be.above(-1);

      });

    });


  });


  describe('Shopping List', function () {
    var listy;
       beforeEach(function () {
         listy = new Shopping_List('Food');
       });


          describe('Shopping List', function () {

            it('ShoppingList is a function', function () {
              listy.should.be.a.function;
            });

            it('ShoppingList has a property named items', function() {
              listy.should.have.property('items');
              listy.items.should.be.an.array;
            });
          });

          describe('Constructor', function(){
          it('ShoppingList Items should be an array', function () {
            listy.items.should.be.an.array;
          });


          describe('Methods', function(){

            var plum;

            before(function () {
              plum = new ShoppingListItem('plum','the softer the sweeter!');
            });
            describe('addItem', function () {
              it('addItem should be a function', function () {
                listy.addItem.should.be.a.function;
              });

              it('should only pass in items that are a ShoppingListItem', function () {
                plum.should.be.an.instanceof(ShoppingListItem);

                //Want to pass in an item that is not an item
                //need to call fucntion and have it test for the error being thrown
                // var hat = 'hat';
                // expect(listy.addItem).to.throw(Error);
               //expect((listy.addItem).bind(listy, 'hat')).to.throw(new Error('Attempt to add an item to shopping cart that is not a ShoppingListItem','shopping_list.js'));

              });

              it('should pass a listItem into the items array', function () {
                listy.addItem(plum);
                listy.items.should.have.length.above(0);
                listy.items[0].name.should.equal('plum');
                listy.addItem(plum);
                listy.items.should.have.length.above(1);
                listy.addItem(plum);
                listy.items.should.have.length.above(2);
              });
            });

            var plum;
            var peach;

            before(function () {
              plum = new ShoppingListItem('plum','the softer the sweeter!');
              peach = new ShoppingListItem('peach','the softer the sweeter!');

            });

            describe('removeItem', function () {
              it('removeItem should be a function', function () {
                listy.addItem.should.be.a.function;
              });
              it('should remove an item from the shopping list ', function () {
            //adds a plum, checks the length, removes the plum, checks the length
                listy.addItem(plum);
                listy.items.should.contain(plum);
                listy.removeItem(plum);
                //listy.items.should.have.length.equals(0);

              });
              it('should remove the last item if no parameters are given', function () {
                //adds plum and a peach, removes peach (its at the end)
                listy.addItem(plum);
                listy.addItem(peach);
                listy.removeItem();
                listy.items.should.not.contain(peach);
              });
              it('should only remove items that are on the list', function () {
                var candle = new ShoppingListItem('candle','made with wax');;
                listy.addItem(plum);
                listy.addItem(peach);
                listy.removeItem(candle);
                listy.items.should.have.length(2);
              });
            });

            describe('render', function () {
              it('render should be a function', function () {
                listy.addItem.should.be.a.function;
              });
              it('should concat the results in a ul list tag', function () {
                listy.render().indexOf('<ul>').should.be.above(-1);
                listy.render().lastIndexOf('</ul>').should.be.above(-1);
              });
            });

          });
    });
  });
});




