function showNumberOfItemsInCart (){
  const storage = JSON.parse(localStorage.getItem('cartItems'))
  const displayedNumbersOfCartItems = document.querySelector('.numbers-of-items-in-cart')
    const num = JSON.stringify(storage.length)
    displayedNumbersOfCartItems.innerText = num 
}

window.onload = () => {
  showNumberOfItemsInCart()
}