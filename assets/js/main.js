import { darkMode } from "./componets/dark-mode.js";
import { carrito } from "./componets/carrito.js";
import { scroll } from "./componets/scroll.js";

const productosStore = [
    {
        id: 1, 
        nombre: "Hoodies", 
        precio: "$ 14.00", 
        img: 'https://i.ibb.co/S7dPp5D/featured1.png',
        selected: 0,
        stock: "10",
    },
                        
    {
        id: 2, 
        nombre: "Shirts", 
        precio: "$ 15.00", 
        img: 'https://i.ibb.co/QNHZd4K/featured2.png',
        selected: 0,
        stock: "15",
    },
                         
    {
        id: 3, 
        nombre: "Sweatshirts", 
        precio: "$ 12.00", 
        img: 'https://i.ibb.co/R7CZn5n/featured3.png',
        selected: 0,
        stock: "20",
    },
                   
];

document.addEventListener( "DOMContentLoaded", () =>{
       load()
       agregarProductos(productosStore);
       darkMode();
       carrito();
       scroll();
       productos();
       f();
});

/* =========== LOADER ========== */
const loader = document.getElementById( "loader" )
function load () {
    setTimeout(() => {
        loader.classList.add( "hide" )
    }, 3000);
}


const cardProductos= document.querySelector(".productos__card")

function agregarProductos(productosFet){
    let card = ``;
    productosFet.forEach(products => {
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



const items = document.getElementById("cart");
const btnItems = document.getElementsByClassName('.btn-add-cart');

function f () {
    btnItems.addEventListener("click", () => {
        let agregarItem = '';
        productosStore.forEach(product => {
            agregarItem += `
            <div class="${product.nombre} items-carrito">
                <img src=${product.img} alt="${product.nombre}">
                <h4>${product.nombre}</h4>
                <p>Stock: ${product.stock}</p> <p>${product.precio}</p>
                <h4>Subtotal: ${subTotal()}</h4>
                <button>-</button>
                <span>${contadorUnidades} units</span>
                <button">+</button>
                button>Delete</button>
            </div>`
        });
        items.innerHTML = agregarItem;
    });
}

//ESTE ES EL MENU, AGRADEZCO A QUIEN LO ORGANICE EN UN OMPONENTE PORQUE YO NO TENGO NI IDEA
const menuOpen = document.getElementById("nav-toggle")
const menu = document.getElementById("nav-menu")
const menuClose= document.querySelector('.menu--close')
const navList = document.querySelector('.nav--list')
menuOpen.addEventListener( "click", () => {
    menu.classList.add( "nav--menu__show" )
})

menuClose.addEventListener( "click", () => {
    menu.classList.remove( "nav--menu__show" )
})
navList.addEventListener( "click", () => {
    menu.classList.remove( "nav--menu__show" )
});
