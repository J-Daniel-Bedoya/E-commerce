export function menu(){
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
}