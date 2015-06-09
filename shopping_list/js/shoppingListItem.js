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



    // var idx = Array.prototype.indexOf.call(document.getElementById('ulname').childNodes, target);

    // var sentence = '<li class =\"completed_' + this.is_done + '\"> \
    //                   <input type="checkbox"  > \
    //                   <span>' + this.name + '</span> \
    //                   <span>' + this.description + '</span>\
    //                 </li>';
    // return sentence;

    var liItem = document.createElement('li');
    liItem.class = 'completed_' + this.is_done;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener("click", function(event) {

      console.log(event);

      //changeCheckedStatus()
    });

    var nameSpan = document.createElement('span');
    nameSpan.innerHTML = this.name;

    var descriptionSpan = document.createElement('description');
    descriptionSpan.innerHTML = this.description;

    liItem.appendChild(checkbox);
    liItem.appendChild(nameSpan);
    liItem.appendChild(descriptionSpan);

    return liItem.outerHTML;
  }
};
