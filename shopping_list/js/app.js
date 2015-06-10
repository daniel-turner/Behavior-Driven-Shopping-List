var shoppingList = new Shopping_List();

var listContent = shoppingList.render();

document.getElementById('content').innerHTML = listContent;


function add_to_shopping_list(titleText, descriptionText){
  var new_shopping_list_item = new ShoppingListItem(titleText, descriptionText);
  shoppingList.addItem(new_shopping_list_item);

}
//shoppingList.render();



function changeCheckedStatus(event){
  var checked = event.toElement.checked;



  var index = shoppingList.timestamps.indexOf(parseInt(event.toElement.id));




if( checked ){
  shoppingList.items[index].check();
}else{
  shoppingList.items[index].uncheck();
}

 console.log(shoppingList.items[index].is_done);

}