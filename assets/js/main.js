import { darkMode } from "./componets/dark-mode.js";
import { carrito } from "./componets/carrito.js";
import { scroll } from "./componets/scroll.js";
import { menu } from "./componets/menu.js";
import { imgCarrito } from "./componets/imgCarrito.js";



document.addEventListener( "DOMContentLoaded", () =>{
    load()
    darkMode();
    carrito();
    scroll();
    menu();
    imgCarrito();
});

/* =========== LOADER ========== */
const loader = document.getElementById( "loader" )
function load () {
    setTimeout(() => {
        loader.classList.add( "hide" )
    }, 3000);
}


