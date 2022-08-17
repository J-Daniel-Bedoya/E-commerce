export function scroll () {

  const header = document.getElementById("header")
  const b1 = document.querySelector(".bxs1")
  const b2 = document.querySelector(".bxs2")
  const b3 = document.querySelector(".bxs3")
  const b4 = document.querySelector(".bxs4")

  window.addEventListener( "scroll", () =>{

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
  })
}