
  const productosStore = [
    {
        id: 1, 
        nombre: "Hoodies", 
        precio: 14.00, 
        img: 'https://i.ibb.co/S7dPp5D/featured1.png',
        stock: 3 ,
    },
                        
    {
        id: 2, 
        nombre: "Shirts", 
        precio: 24.00, 
        img: 'https://i.ibb.co/QNHZd4K/featured2.png',
        stock: 6,
    },
                         
    {
        id: 3, 
        nombre: "Sweatshirts", 
        precio: 24.00, 
        img: 'https://i.ibb.co/R7CZn5n/featured3.png',
        stock: 5,
    },
                   
];
localStorage.setItem('productos', JSON.stringify(productosStore));


document.addEventListener( "DOMContentLoaded", () =>{
    // let cardStockDesdeLocaltorage = JSON.parse(localStorage.getItem('card'));
    let productosStack = JSON.parse(localStorage.getItem('productos'));
    let cardProdutosLocalStorage = JSON.parse(localStorage.getItem('carrito'));
    incorporarProductos(productosStack);
    // const storage = JSON.parse(localStorage.getItem('carrito'));
    // console.log(storage);

    console.log(cardProdutosLocalStorage);
});
// incorporarProductos(cardStockDesdeLocaltorage);
// let carritoDesdeLocalstorage = JSON.parse(localStorage.getItem('carrito'));
// let carritoMantieneStock = Object.values(carritoDesdeLocalstorage);
// carritoMantieneStock.map(product => {
//     cartFunctionality ({...product});
// });

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
      localStorage.setItem('card', JSON.stringify(card));
      cartFunctionality()
  }
  
  
  
  function cartFunctionality(itemCarrito) {
      const cardProductos =  document.getElementById('cart--products')
      const itemNumber = document.querySelector('#items-number')
      const counter = document.getElementById('cart-counter')
      const btns = document.querySelectorAll( ".btn-add-cart" )
      const totalPrice = document.getElementById('precioTotalStock')
      const vaciarCarrito = document.getElementById('vaciarStoke')
      const cart = []
      counter.textContent = 0

       /*********** CHECKOUT ***************/
       vaciarCarrito.addEventListener('click', () =>{
        cart.map(e=> {
            const indexProduct = productosStore.indexOf(e)
            const stockAvailable = productosStore[indexProduct].stock
            if(stockAvailable<=0){
                window.alert('no tenemos suficiente stock')
            }else{
                productosStore[indexProduct].stock-=e.unidades
            }
        })
        cart.length = 0
        cardProductos.innerHTML = ``
        /***count, subtotal & total items*** */
        totalPrice.textContent = `Total: $${cart.reduce((total, product) => total + product.subtotal, 0)}.00`
        counter.textContent = 0
        itemNumber.textContent = `${counter.textContent} items`
        })

        // let s = itemCarrito;
        // let as = itemCarrito.unidades
        // console.log(as)
        // console.log(s)
        btns.forEach( button => {
            button.addEventListener('click', e =>{
              const id = parseInt(e.target.parentElement.parentElement.id)
              const selectedProduct = productosStore.find( producto => producto.id === id)
              const elelegido = productosStore.indexOf(selectedProduct)
              if( cart.indexOf(selectedProduct)!== -1){
                  if(selectedProduct.unidades>=1 && selectedProduct.unidades!==selectedProduct.stock){
                      selectedProduct.subtotal += selectedProduct.precio
                      selectedProduct.unidades++

                    //   if (itemCarrito.unidades !== 0){
                    //     //   counter.textContent = parseInt(counter.textContent)+
                    //       counter.textContent = parseInt(counter.textContent)+1
                    //     }else{
                            counter.textContent = parseInt(counter.textContent)+1
                        // }
                        
                      itemNumber.textContent = `${counter.textContent} items`
                  }else{
                      window.alert("No contamos con suficiente stock");
                  }
              }else{
                if(productosStore[elelegido].stock>0){
                  cart.push( selectedProduct )
                  selectedProduct.unidades = 1
                  selectedProduct.subtotal = selectedProduct.precio
                  counter.textContent = parseInt(counter.textContent)+1
                  itemNumber.textContent = `${counter.textContent} items`
                }else{
                    window.alert("No contamos con suficiente stock");
                }
              }
            
              let a = 0
              let productsHTML = ``
              cart.forEach(element =>{
                if(productosStore[elelegido].stock<=0){
                    // console.log(cart);
                }else{
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

                localStorage.setItem('carrito', JSON.stringify(productsHTML));


                
            }


              
            totalPrice.textContent = `Total: $${cart.reduce((total, product) => total + product.subtotal, 0)}.00`

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
  })
  


//   function busquedaProd () {

//     const busquedaShowAll = document.getElementById( "producto__linea-1" )
//     const busquedaHoodies = document.getElementById( "producto__linea-2" )
//     const busquedaShirts = document.getElementById( "producto__linea-3" )
//     const busquedaSweatshirts = document.getElementById( "producto__linea-4" )
  
  
//     busquedaShowAll.addEventListener( "click", () => {
      
  
  
//   })
}