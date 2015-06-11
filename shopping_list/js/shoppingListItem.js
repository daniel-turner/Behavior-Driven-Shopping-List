function ShoppingListItem (name, description) {
  this.name = name;
  this.description = description;
  this.is_done = null;
  this.timestamp = null;

  this.check = function(){
    this.is_done = true;
  };
  this.uncheck = function(){
    this.is_done = false;
  };
  this.render = function(){



    var sentence = '<li class =\"completed_' + this.is_done + '\"> \
                      <input type="checkbox" onclick="changeCheckedStatus(event)" id="' + this.timestamp + '""> \
                      <span>' + this.name + '</span> \
                      <span>' + this.description + '</span>\
                      <button onclick="removeItemButtonClicked(event)" id="button' + this.timestamp + '">x</button>\
                      <button onclick="editItemButtonClicked(event)" id="edits"' + this.timestamp + '">Edit Me</button>\
                    </li>';
    return sentence;

//added in an edit button on line 22

  };
};


