var shoppingList = new Shopping_List();

var listContent = shoppingList.render();

document.getElementById('content').innerHTML = listContent;

function add_to_shopping_list(titleText, descriptionText){
  var new_shopping_list_item = new ShoppingListItem(titleText, descriptionText);
  shoppingList.addItem(new_shopping_list_item);

}
//shoppingList.render();
