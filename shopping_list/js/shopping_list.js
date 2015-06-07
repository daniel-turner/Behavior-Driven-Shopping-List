function ShoppingListItem (name, description) {
  this.name = name;
  this.description = description;
  this.is_done = null;

  this.check = function(){
    is_done = true;
  }
  this.uncheck = function(){
    is_done = false
  }
  this.render = function(){
    var sentence = '<li class =\"completed_' + this.is_done + '\"> \
                      <span>' + this.name + '</span> \
                      <span>' + this.description + '</span>\
                    </li>';
  }
};

function Shopping_List() {

};