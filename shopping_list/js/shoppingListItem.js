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
                      <input type="checkbox"> \
                      <span>' + this.name + '</span> \
                      <span>' + this.description + '</span>\
                    </li>';
    //console.log(sentence);
    return sentence;
  }
};
