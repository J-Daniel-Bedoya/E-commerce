
document.addEventListener( "DOMContentLoaded", () =>{
    load()
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


// ========== LOCALSTORAGE ===========



