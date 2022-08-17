export function scroll () {

  const header= document.getElementById("header")
  const btnsNav= document.getElementById("nav-btns")
  window.addEventListener( "scroll", () =>{

    if( window.scrollY >= 50 ){
        header.classList.add("scroll-header")
        btnsNav.classList.remove('color--black')
    }else{
        header.classList.remove("scroll-header")        
        btnsNav.classList.add('color--black')
    }
  })
}