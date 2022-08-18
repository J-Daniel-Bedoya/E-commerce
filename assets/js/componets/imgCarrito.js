export function imgCarrito () {

  const image = [
    {
      img: 'https://i.ibb.co/KVFGVJ1/empty-cart.png',
    }
  ]

  const contentCarrito = document.getElementById("cart--products");
  image.forEach(img => {
  contentCarrito.innerHTML = `
  <div class="div-img">
    <img class="img-carrito" src="${img.img}" alt="">
  </div>
  `;

  });


}