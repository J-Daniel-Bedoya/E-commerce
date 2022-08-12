
const loader =  document.getElementById('loaders');

document.addEventListener('DOMContentLoaded', () => {
    load();
} );

/* =============================== Loader ============================= */
function load() {
    setTimeout(() => {
        loader.classList.add('hide');
    }, 3000);
}

/*  ============================ Dark Mode ============================== */

const darkMode = document.getElementById('theme-button');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('bx-moon')) {
        darkMode.classList.replace('bx-moon', 'bx-sun');
    } else {
        darkMode.classList.replace('bx-sun', 'bx-moon');
    }
} );

/*  ============================ Carrito ============================== */

const carritoOpen = document.getElementById('cart-shop');
const carritoClose = document.getElementById('close-cart');
const carritoContainer = document.getElementById('cart-container');

carritoOpen.addEventListener('click', () => {
    document.classList.remove('hide');
} );

carritoClose.addEventListener('click', () => {
    carritoContainer.classList.add('hide');
} );

/*  ============================ Scroll ============================== */

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scroll-header');
  }else {
    header.classList.remove('scroll-header');
  }
});