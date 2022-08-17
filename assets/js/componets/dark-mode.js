export function darkMode () {
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

}
