var shoppingList = new Shopping_List();

var listContent = shoppingList.render();

document.getElementById('content').innerHTML = listContent;


function add_to_shopping_list(titleText, descriptionText){
  var new_shopping_list_item = new ShoppingListItem(titleText, descriptionText);
  shoppingList.addItem(new_shopping_list_item);

}

function changeCheckedStatus(event){

  var checked = event.toElement.checked;

  var index = shoppingList.timestamps.indexOf(parseInt(event.toElement.id));

  if( checked ){

    shoppingList.items[index].check();

  }else{

    shoppingList.items[index].uncheck();
  }
}

function removeItemButtonClicked(event) {

  var id = parseInt(event.toElement.id.slice(6));

  var index = shoppingList.timestamps.indexOf(id);

  shoppingList.removeItem(shoppingList.items[index]);

  document.getElementById('content').innerHTML = shoppingList.render();
}

//Everything below is not working yet. Copy of remove item button

function editItemButtonClicked(event){

  var id = parseInt(event.toElement.id.slice(5));

  var index = shoppingList.timestamps.indexOf(id);

  console.log('fsad');



  //shoppingList.removeItem(shoppingList.items[index]);

  document.getElementById('content').innerHTML = shoppingList.render();

}