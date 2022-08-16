
document.addEventListener( "DOMContentLoaded", () =>{
    load()
    icorporarProductos();
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
})



/* ========SCROLL========= */
const header = document.getElementById("header")

window.addEventListener( "scroll", () =>{
    if( window.scrollY >= 50 ){
        header.classList.add("scroll-header")
    }else{
        header.classList.remove("scroll-header")
    }
})


/* ==================== PRODUCTOS ==================== */
const productos = [
    {
        nombre: "Buso Rojo", 
        precio: "$ 14.00", 
        img: './images/featured1.png',
        id: 1, 
    },
                        
    {
        nombre: "Buso Negro", 
        precio: "$ 15.00", 
        img: './images/featured2.png',
        id: 2, 
    },
                         
    {
        nombre: "Buso Blanco", 
        precio: "$ 12.00", 
        img: './images/featured3.png',
        id: 3, 
    },
                   
];



const cardProductos= document.getElementById("productos__card sudaderas")

function icorporarProductos(){
    productos.forEach(products => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
            <img src="${products.img}" alt="${products.nombre}">
            <h2>${products.nombre}</h2>
            <h3>${products.precio}</h3>
            <button class="btn-add-cart" data-id="${products.id}">Agregar al carrito</button>
        `
        cardProductos.appendChild(card)
    } )
}