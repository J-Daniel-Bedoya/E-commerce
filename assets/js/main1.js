// import { darkMode } from "./componets/dark-mode.js";
// import { loader } from "./componets/loader.js";
// import { scroll } from "./componets/scroll.js";
// import { carrito } from "./componets/carrito.js";
// import { productos } from "./componets/productos.js";





// document.addEventListener( "DOMContentLoaded", () =>{
//     loader();
//     darkMode();
//     scroll();
//     carrito();
//     productos();
// })

document.addEventListener( "DOMContentLoaded", () =>{
  load();

});

const loader = document.getElementById( "loader" )
function load () {
    setTimeout(() => {
        loader.classList.add( "hide" )
    }, 3000);
}