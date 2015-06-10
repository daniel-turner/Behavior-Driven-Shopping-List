function Shopping_List() {

  this.items = [];
  this.timestamps = [];

  this.addItem = function(item) {

    if(item instanceof ShoppingListItem) {

      this.items.push(item);
      this.timestamps.push(item.timestamp);
      return;
    }

    throw new Error('Attempt to add an item to shopping cart that is not a ShoppingListItem','shopping_list.js');

  };

  this.removeItem = function(item) {

    if(item === undefined) {

      this.items.pop();
      this.timestamps.pop();
      return;
    }

    if(item instanceof ShoppingListItem) {

      var index = this.items.indexOf(item);

      if(index === -1) {

        return;
      }

      this.items.splice(index,1);
      this.timestamps.splice(index,1);
      return;
    }

    throw new TypeError('Attempt to remove an item from shopping cart that is not a ShoppingListItem', 'shopping_list.js');

  };

  this.render = function() {

    //var list =document.createElement('ul');

    var sentence = '<ul id="ulname">';


    var li = function(item) {

      sentence += item.render();
      //list.appendChild(item);
    };

    this.items.forEach(li);
    sentence += '</ul>';
    // //console.log(sentence);
    return sentence;

    //return list.innerHTML;
  };

};