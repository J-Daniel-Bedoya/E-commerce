export function agregarProductos () {

  const productosStock = [
    {
        id: 1, 
        nombre: "Hoodies", 
        precio: 14.00, 
        img: 'https://i.ibb.co/S7dPp5D/featured1.png',
        categoria: 'hoodies',
        stock: 10,
        quantity: 1,
    },
                        
    {
        id: 2, 
        nombre: "Shirts", 
        precio: 24.00, 
        img: 'https://i.ibb.co/QNHZd4K/featured2.png',
        categoria: 'shirts',
        stock: 15,
        quantity: 1,
    },
                         
    {
        id: 3, 
        nombre: "Sweatshirts", 
        precio: 24.00, 
        img: 'https://i.ibb.co/R7CZn5n/featured3.png',
        categoria: 'sweatshirts',
        stock: 20,
        quantity: 1,
    },
                   
];


  const cardProductos= document.querySelector(".productos__card")
  const contenidoCarrito = document.getElementById("cart--products");
  const botonVaciar = document.getElementById("vaciarStoke");
  const calcularTotal = document.getElementById("cart-counter");

  let carrito = [];
  

  botonVaciar.addEventListener("click", () => {
    carrito.length = 0;
    mostrarCarrito();
  });


  productosStock.forEach(productos => {
      const card = document.createElement("div")
      card.classList.add("carts")
      card.innerHTML += `
          <div class="card__img">
              <img src=${productos.img} class="img-products" alt="${productos.nombre}">
          </div>
          <div class="card__info">
              <h2>${productos.precio}</h2> 
              <p>Stock: ${productos.stock}</p>
              <h3>${productos.nombre}</h3>
            </div>
          <button id="agregar${productos.id}" class="btn-add-cart">+</button>
      </div>`
      cardProductos.appendChild(card);
      
      const boton = document.getElementById(`agregar${productos.id}`)
      boton.addEventListener("click", () => {
        agreagarCarrito(productos.id)
      });
});


  const agreagarCarrito = (ids) => {
    const yaExiste = carrito.some((prod) => prod.id === ids);
    if (yaExiste) {
      const prod = carrito.map((prod) => {
        if (prod.id === ids) {
            let click = prod.quantity++;
            if (prod.stock === click) {
                window.alert("No contamos con suficiente stock");
                prod.quantity--;
            }
            
        }
      });
    }else{
      
      const item = productosStock.find((prod) => prod.id === ids);
      carrito.push(item);
    }
    mostrarCarrito();

  }
  const deleteProduct= (ids) => {
    const yaExiste = carrito.some((prod) => prod.id === ids);
    if (yaExiste) {
      const prod = carrito.map((prod) => {
        if (prod.id === ids) {
              prod.quantity--;
        }
      });
    }else{
      
      const item = productosStock.find((prod) => prod.id === ids);
      carrito.push(item);
    }
    mostrarCarrito();

  }
  // const btn = document.querySelector(".btn-add-cart")
  // valor = 0;
  // btn.addEventListener('click', () => {
  //   valor++
  //   calcularTotal.textContent = valor;
  //   mostrarCarrito();
  // })

    const eliminarDelProducto = (idsProd) => {
      const producto = carrito.find((e) => e.id === idsProd);
      const index = carrito.indexOf(producto);
      carrito.splice(index, 1);
      mostrarCarrito();
    
    }
      
  const mostrarCarrito = () => {
      contenidoCarrito.innerHTML = "";
      carrito.forEach(prod => {
        const contendorDiv = document.createElement("div");
        contendorDiv.classList.add("cart__item");
        contendorDiv.innerHTML =  `
        <div class="products--item" id="${prod.id}">
          <div class="item--container-img">
            <img src=${prod.img} class="item--img" alt="">
          </div>
          <div class="item--info">
            <h4>${prod.nombre}</h4>
            <small>Stock: ${prod.stock}|</small>
            <p>$${prod.precio}</p>
            <p id="subtotal${prod.id}">Subtotal: $${prod.precio}.00</p>
            <div class="info--button">
            <button onclick="eliminarDelProducto(${prod.quantity})" id='button-delete'>-</button>
              <p id="units${prod.id}">${prod.quantity} units</p>
              <button onclick="agregarCarrito(${prod.id}) id='button-plus'>+</button>
            </div>
          </div>
          <i class='bx bx-trash-alt'></i>          
        </div> `
        contenidoCarrito.appendChild(contendorDiv);

        const subtotal1 = document.getElementById(`subtotal${prod.id}`);
        subtotal1.innerHTML = `Subtotal: $${prod.precio * prod.quantity}.00`;

        const precioTotal = document.getElementById("precioTotalStock");
        precioTotal.innerHTML = `Total: $${prod.precio * prod.quantity}.00`;
      //   for (i in carrito) {
      //     if (carrito[i].quantity > 0) {
      //       const subtotal = document.getElementById(`subtotal${carrito[i].id}`);
      //       subtotal.innerHTML = `Subtotal: $${carrito[i].subtotal}.00`;
      //     }else{
      //       const subtotal = document.getElementById(`subtotal${carrito[i].id}`);
      //       subtotal.innerHTML = `Subtotal: $${carrito[i].subtotal}.00`;
      //     }
      

      // calcularTotal.innerHTML = carrito[i].quantity;
      // console.log(calcularTotal);
      // }
    

  });
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }