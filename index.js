var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

 var price = Math.floor(100*(Math.random()));
  var itemName = {itemName: item};
  var itemPrice = {itemPrice: price}


  var obj = Object.assign(itemName,itemPrice)
  cart.push(obj)
  return `${item} has been added to your cart.`;


}
function viewCart() {
  // write your code here
  var count= cart.length;
  var string = "In your cart, you have "
  var itemName;
  var itemPrice;
  if(!(cart.length)){
    return "Your shopping cart is empty.";
  }else{
    for(let i =0; i<cart.length; i++){

      itemName = Object.values(cart[i])
      itemPrice = itemName.splice(1)
      if(count == 1){
      string += `${itemName} at $${itemPrice}`
    }else if(count == 2){
      string += `${itemName} at $${itemPrice}, and `
      count--;
    }else if(count >2){
      string += `${itemName} at $${itemPrice}, `
      count--;
    }
    }

  }return string + ".";
}

function total() {
  // write your code here
  var itemTotal = 0;
  var itemPrice = []
  for (let i = 0; i<cart.length; i++){
    itemPrice = Object.values(cart[i])
    itemTotal += parseInt(itemPrice.splice(1))

  }return itemTotal;

}

function removeFromCart(item) {
  // write your code here
if(item == cart.itemName){
  var ret = delete cart[item]
  return ret
}else{
  return "That item is not in your cart."
}
}

function placeOrder(cardNumber) {
// write your code here
  if(!cardNumber)
  return 'Sorry, we don\'t have a credit card on file for you.'
  else {
    var ret = total()
    for(let i = 0; i<cart.length; i++){
      cart.pop();
    }
    return `Your total cost is $${ret}, which will be charged to the card ${cardNumber}.`
  }

}
