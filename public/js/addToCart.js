
function addToCart (product){
  //number of items in cart displayed in the nave
  const displayedNumbersOfCartItems = document.querySelector('.numbers-of-items-in-cart')

  const newProduct = JSON.parse(product)
  console.log('adding product', newProduct)

  let cartItems = JSON.parse(localStorage.getItem('cartItems'));

  if(!cartItems){
    cartItems = [];
    const displayedNumbersOfCartItems = document.querySelector('.numbers-of-items-in-cart')
      const num = JSON.stringify(cartItems.length)
      displayedNumbersOfCartItems.innerText = num
  }

  let itExist = false;

  const newCartList = cartItems.map(product => {
    if(product.id === newProduct.id){
      itExist = true;
      console.log('item exist')
      const newEditedProductList = {
        ...product,
        quantity: product.quantity + 1
      }
      updateNumbersOfNavCartItems()
      return newEditedProductList
    }
    return product
  })

  if(!itExist){
    newCartList.push({
      ...newProduct,
      quantity: 1
    })
  }
  
  localStorage.setItem('cartItems', JSON.stringify(newCartList))
  updateNumbersOfNavCartItems()
  
}

function updateNumbersOfNavCartItems (){
  // alert('hello')
  const displayedNumbersOfCartItems = document.querySelector('.numbers-of-items-in-cart')

  displayedNumbersOfCartItems.innerText = JSON.parse(localStorage.cartItems).length
}

function loadItemsInCart (){
  const storedItems = JSON.parse(localStorage.getItem('cartItems'))
  const cartItemsListHolder = document.getElementById('cart_items_list') 
  console.log(storedItems)
  
  let htmlTemplate = "";
    storedItems.forEach(product => {
      htmlTemplate += `
    <li class="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-end justify-content-start">
    <div class="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start mr-auto">
      <div></div>
      <div><div class="product_image"><img src="e-commerce-image-assets/${product.product_image}" alt=""></div></div>
      <div class="product_name_container">
        <div class="product_name"><a href="/product">${product.product_tittle}</a></div>
        <div class="product_text">Second line for additional info</div>
      </div>
    </div>
    <div onclick="deleteCartItem(${product.id})" class="product_size product_text"><i  style= "font-size:24px"class="fas fa-trash"></i></div>
    <div class="product_price product_text"><span>Price: </span>${product.product_price}</div>
    <div class="product_quantity_container">
      <div class="product_quantity ml-lg-auto mr-lg-auto text-center">
        <span class="product_text product_num">${product.quantity}</span>
        <div onclick="subQuantity(${product.id})" class="qty_sub qty_button trans_200 text-center"><span>-</span></div>
        <div onclick="addQuantity(${product.id})" class="qty_add qty_button trans_200 text-center"><span>+</span></div>
      </div>
    </div>
    <div class="product_total product_text"><span>Total: </span>${product.product_price}</div>
  </li>`
});
  cartItemsListHolder.innerHTML = htmlTemplate

  
}

// 1

  function addQuantity(productQuantity){
    const quantityDiv = document.querySelector('.product_num').innerText
    const quantityDivHolder = document.querySelector('.product_num')
    const parsedProductNumber  = JSON.parse(productQuantity)
    const storedItems = JSON.parse(localStorage.getItem('cartItems'))

    const updatedCartList = storedItems.map(item => {
      if(item.id === parsedProductNumber){
        const updatedQuantity = {
          ...item,
          quantity: item.quantity + 1
        }
        console.log(updatedQuantity)
        return updatedQuantity
      }
      return item
    })
    localStorage.setItem('cartItems', JSON.stringify(updatedCartList))
    const updatedStorage = JSON.parse(localStorage.getItem('cartItems'))
    loadItemsInCart()
   
    console.log('quantity has increasing by 1')
  }
  function subQuantity(productQuantity){
    const quantityDiv = document.querySelector('.product_num').innerText
    const quantityDivHolder = document.querySelector('.product_num')
    const parsedProductNumber  = JSON.parse(productQuantity)
    const storedItems = JSON.parse(localStorage.getItem('cartItems'))

    const updatedCartList = storedItems.map(item => {
      if(item.id === parsedProductNumber){
        if(item.quantity >0){
          const updatedQuantity = {
            ...item,
            quantity: item.quantity - 1
          }
          console.log(updatedQuantity)
          return updatedQuantity
        }else{
          item.quantity = 0
        }
      }
      return item
    })
    localStorage.setItem('cartItems', JSON.stringify(updatedCartList))
    const updatedStorage = JSON.parse(localStorage.getItem('cartItems'))
    loadItemsInCart()
   
    console.log('quantity has decreasing by 1')
  }

  function deleteCartItem(productID){
    // alert('hello')
    const parsedProductID = JSON.parse(productID)
    const storage = JSON.parse(localStorage.getItem('cartItems'))
    const updatedStorage = storage.map()
    // return updatedStorage
    console.log(updatedStorage)
    localStorage.setItem('cartItems', JSON.stringify(updatedStorage))

  }

  

window.onload = () => {
  loadItemsInCart()
  // initQty()
  addToCart()
  addQuantity()
  subQuantity()
  deleteCartItem()

  };
  