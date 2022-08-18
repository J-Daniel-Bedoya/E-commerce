


  const productosStore = [
    {
        id: 1, 
        nombre: "Hoodies", 
        precio: 14.00, 
        img: 'https://i.ibb.co/S7dPp5D/featured1.png',
        stock: 10,
    },
                        
    {
        id: 2, 
        nombre: "Shirts", 
        precio: 24.00, 
        img: 'https://i.ibb.co/QNHZd4K/featured2.png',
        stock: 15,
    },
                         
    {
        id: 3, 
        nombre: "Sweatshirts", 
        precio: 24.00, 
        img: 'https://i.ibb.co/R7CZn5n/featured3.png',
        stock: 20,
    },
                   
];
document.addEventListener( "DOMContentLoaded", () =>{
    incorporarProductos(productosStore);
} );

  const cardProductos= document.querySelector(".productos__card")

  function incorporarProductos(productosFet){
      let card = ``;
      productosFet.map(products => {
          card += `<div class="cards" id ='${products.id}' >
              <div class="card__img">
                  <img src=${products.img} class="img-products" alt="${products.nombre}">
              </div>
              <div class="card__info">
                  <h2 class='product--price'>$${products.precio}.00</h2> 
                  <p class='product--stock'>| Stock: ${products.stock}</p>
                  <h3 class='product--name'>${products.nombre}</h3>
                  <button class="btn-add-cart" data-id="${products.id}">+</button>
              </div>
          </div>`
      });
      cardProductos.innerHTML = card;
      cartFunctionality()
  }
  
  
  
  function cartFunctionality() {
      const cardProductos =  document.getElementById('cart--products')
      const itemNumber = document.querySelector('#items-number')
      const counter = document.getElementById('cart-counter')
      const btns = document.querySelectorAll( ".btn-add-cart" )
      const totalPrice = document.getElementById('precioTotalStock')
      const vaciarCarrito = document.getElementById('vaciarStoke')
      console.log(vaciarCarrito)
      const cart = []
      counter.textContent = 0
      btns.forEach( button => {
          button.addEventListener('click', e =>{
              const id = parseInt(e.target.parentElement.parentElement.id)
              const selectedProduct = productosStore.find( producto => producto.id === id)
              if( cart.indexOf(selectedProduct)!== -1){
                  if(selectedProduct.unidades>=1 && selectedProduct.unidades!==selectedProduct.stock){
                      selectedProduct.subtotal += selectedProduct.precio
                      selectedProduct.unidades++
                      counter.textContent = parseInt(counter.textContent)+1
                      itemNumber.textContent = `${counter.textContent} items`
                  }else{
                      window.alert("No contamos con suficiente stock");
                  }
              }else{
                  cart.push( selectedProduct )
                  selectedProduct.unidades = 1
                  selectedProduct.subtotal = selectedProduct.precio
                  counter.textContent = parseInt(counter.textContent)+1
                  itemNumber.textContent = `${counter.textContent} items`
              }
  
              let productsHTML = ``
              cart.forEach(element =>{
                productsHTML +=`
                <div class="products--item" id="${element.id}">
                  <div class="item- -container-img">
                    <img src=${element.img} class="item--img" alt="">
                  </div>
                  <div class="item--info title--carts">
                    <h4>${element.nombre}</h4>
                    <small class="stock--carts">Stock: ${element.stock}|</small>
                    <p class="price--carts">$${element.precio}</p>
                    <p id="subtotal${element.id}" class="subtotal--carts">Subtotal: $${element.subtotal}.00</p>
                    <div class="info--button">
                      <button class='button--less button--cart'>-</button>
                        <p id="units${element.id}" class="units--carts">${element.unidades} units</p>
                      <button class='button--plus button--cart'>+</button>
                      </div>
                  </div>
                    <i class='bx bx-trash-alt'></i>          
                </div>`
                cardProductos.innerHTML = productsHTML
              })
              
              totalPrice.textContent = `Total: $${cart.reduce((total, product) => total + product.subtotal, 0)}.00`
              
              vaciarCarrito.addEventListener('click', () =>{
                cart.length = 0
                cardProductos.innerHTML = ``
                totalPrice.textContent = `Total: $${cart.reduce((total, product) => total + product.subtotal, 0)}.00`
                counter.textContent = 0
                itemNumber.textContent = `${counter.textContent} items`
              })
              const trash = document.querySelectorAll('.bx-trash-alt')
              trash.forEach(trashButton=>{
                  trashButton.addEventListener('click', (e) =>{
                      const element = e.target.parentElement
                      const x = cart.find( producto => producto.id === parseInt(element.id))
                      const indice = cart.indexOf(x)
                      const unidades = cart[indice].unidades
                      cardProductos.removeChild(element)
                      cart.splice(indice,1)
                      counter.textContent = parseInt(counter.textContent)-unidades
                      totalPrice.textContent = `${totalPrice.textContent.replace(/\d+\.\d+/, cart.reduce((total, product) => total + product.subtotal, 0))}.00`
                      itemNumber.textContent = `${counter.textContent} items`
                  })
              })
              const plus = document.querySelectorAll('.button--plus')
              plus.forEach(plusButton=>{
                  plusButton.addEventListener('click',e=>{
                      const elementPlus = e.target.parentElement.parentElement.parentElement
                      const z = cart.find( producto => producto.id === parseInt(elementPlus.id))
                      const indiceZ = cart.indexOf(z)
                      const subtotal = document.getElementById(`subtotal${elementPlus.id}`)
                      const unidades = document.getElementById(`units${elementPlus.id}`)
                      if(cart[indiceZ].unidades===cart[indiceZ].stock){
                          window.alert("No contamos con suficiente stock");
                      }else{
                          cart[indiceZ].subtotal+=cart[indiceZ].precio
                          cart[indiceZ].unidades++
                          unidades.textContent = `${cart[indiceZ].unidades} units`
                          subtotal.textContent = `Subtotal: $${cart[indiceZ].subtotal}.00`
                          counter.textContent = parseInt(counter.textContent)+1
                          totalPrice.textContent = `Total: $${cart.reduce((total, product) => total + product.subtotal, 0)}.00`
                          itemNumber.textContent = `${counter.textContent} items`
                      }
                  })
              })
              const less = document.querySelectorAll('.button--less')
              less.forEach(plusLess=>{
                  plusLess.addEventListener('click',e=>{
                      const elementLess = e.target.parentElement.parentElement.parentElement
                      const y = cart.find( producto => producto.id === parseInt(elementLess.id))
                      const indiceY = cart.indexOf(y)
                      const subtotalLess = document.getElementById(`subtotal${elementLess.id}`)
                      const unidadesLess = document.getElementById(`units${elementLess.id}`)
                      if(cart[indiceY].unidades===1){
                          cardProductos.removeChild(elementLess)
                          counter.textContent = parseInt(counter.textContent)-1
                          cart.splice(indiceY,1)
                          totalPrice.textContent = `Total: $${cart.reduce((total, product) => total + product.subtotal, 0)}.00`
                          itemNumber.textContent = `${counter.textContent} items`
                      }else{
                          cart[indiceY].subtotal-=cart[indiceY].precio
                          cart[indiceY].unidades--
                          unidadesLess.textContent = `${cart[indiceY].unidades} units`
                          subtotalLess.textContent = `Subtotal: $${cart[indiceY].subtotal}.00`
                          counter.textContent = parseInt(counter.textContent)-1
                          totalPrice.textContent = `Total: $${cart.reduce((total, product) => total + product.subtotal, 0)}.00`
                          itemNumber.textContent = `${counter.textContent} items`
                      }
                  })
              })
          })
      })
  }
  
  
