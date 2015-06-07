function ShoppingListItem (name, description) {
  this.name = name;
  this.description = description;
  this.is_done = null;

  this.check = function(){
    this.is_done = true;
  }
  this.uncheck = function(){
    this.is_done = false;
  }
  this.render = function(){
    var sentence = '<li class =\"completed_' + this.is_done + '\"> \
                      <span>' + this.name + '</span> \
                      <span>' + this.description + '</span>\
                    </li>';
    //console.log(sentence);
    return sentence;
  }
};

function Shopping_List() {

  this.items = [];

  this.addItem = function(item) {

    if(item instanceof ShoppingListItem) {

      this.items.push(item);
      return;
    }

    throw new Error('Attempt to add an item to shopping cart that is not a ShoppingListItem','shopping_list.js');

  };

  this.removeItem = function(item) {

    if(item === undefined) {

      this.items.pop();
      return;
    }

    if(item instanceof ShoppingListItem) {

      var index = this.items.indexOf(item);
      this.items.splice(index,1);
      return;
    }

    throw new TypeError('Attempt to remove an item from shopping cart that is not a ShoppingListItem', 'shopping_list.js');

  };

  this.render = function() {

    var sentence = '<ul>';

    var li = function(item) {

      sentence += item.render();
    };

    this.items.forEach(li);
    sentence += '</ul>';
    //console.log(sentence);
    return sentence;

  };

};