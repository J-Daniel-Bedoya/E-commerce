const productosStore = [
    {
        nombre: "Hoodies", 
        precio: "$ 14.00", 
        img: 'https://i.ibb.co/S7dPp5D/featured1.png',
        stock: "10",
        id: 1, 
    },
                        
    {
        nombre: "Shirts", 
        precio: "$ 15.00", 
        img: 'https://i.ibb.co/QNHZd4K/featured2.png',
        stock: "15",
        id: 2, 
    },
                         
    {
        nombre: "Sweatshirts", 
        precio: "$ 12.00", 
        img: 'https://i.ibb.co/R7CZn5n/featured3.png',
        stock: "20",
        id: 3, 
    },
                   
];

document.addEventListener( "DOMContentLoaded", () =>{
    load()
    icorporarProductos(productosStore);
})

/* =========== LOADER ========== */
const loader = document.getElementById( "loader" )
function load () {
    setTimeout(() => {
        loader.classList.add( "hide" )
    }, 3000);
}

/* =========DARK MODE======== */
const themeButton = document.getElementById( "theme-button" )

themeButton.addEventListener( "click", () =>{
    document.body.classList.toggle( "dark-theme" )

    if( themeButton.classList.contains( "bx-moon" ) ){
        themeButton.classList.replace( "bx-moon", "bx-sun" )
    }else{
        themeButton.classList.replace( "bx-sun", "bx-moon" )
    }

    if(document.body.classList.contains('dark-theme')){
        localStorage.setItem('dark', 'true')
    }else{
        localStorage.setItem('dark', 'false')
    }
});
if(localStorage.getItem('dark') == 'true'){
    document.body.classList.add('dark-theme')
    themeButton.classList.replace( "bx-moon", "bx-sun" )
}else{
    document.body.classList.remove('dark-theme')
    themeButton.classList.replace( "bx-sun", "bx-moon" )
}


/*=======  CARRITO =========== */
const cartOpen = document.getElementById( "cart-shop" )
const cartClose = document.getElementById( "close-cart" )
const cartContainer = document.getElementById( "cart-container" )

cartOpen.addEventListener( "click", () => {
    cartContainer.classList.remove( "hide" )
})

cartClose.addEventListener( "click", () => {
    cartContainer.classList.add( "hide" )
});



/* ========SCROLL========= */
const header = document.getElementById("header")
const b1 = document.querySelector(".bxs1")
const b2 = document.querySelector(".bxs2")
const b3 = document.querySelector(".bxs3")
const b4 = document.querySelector(".bxs4")

window.addEventListener( "scroll", () =>{
    // setTimeout(() => {
        if( window.scrollY >= 50 ){
            header.classList.add("scroll-header")
            b1.classList.add("bxs1")
            b2.classList.add("bxs2")
            b3.classList.add("bxs3")
            b4.classList.add("bxs4")
        }else{
            header.classList.remove("scroll-header")
            b1.classList.remove("bxs1")
            b2.classList.remove("bxs2")
            b3.classList.remove("bxs3")
            b4.classList.remove("bxs4")
        }
    // }, 4);
})


/* ==================== PRODUCTOS ==================== */




const cardProductos= document.querySelector(".productos__card")

function icorporarProductos(productosFet){
    let card = ``;
    productosFet.map(products => {
        card += `<div class="cards">
            <div class="card__img">
                <img src=${products.img} class="img-products" alt="${products.nombre}">
            </div>
            <div class="card__info">
                <h2>${products.precio}</h2> 
                <p>Stock: ${products.stock}</p>
                <h3>${products.nombre}</h3>
                <button class="btn-add-cart" data-id="${products.id}">+</button>
            </div>
        </div>`
    });
    cardProductos.innerHTML = card;
}

