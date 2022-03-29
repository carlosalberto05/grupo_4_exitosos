addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    oldCarrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(oldCarrito);

    let imageAlbum = document.querySelector("#imgBuy").src.split("/", 6)[5];

    let titleAlbum = document.querySelector("#titleBuy").innerHTML.trim();

    let priceAlbum = document
      .querySelector("#priceBuy")
      .innerHTML.split(" <", 1)[0]
      .trim();

    let buyId = document.querySelector("#buyId").href.slice(-1);

    let product = {};

    let buyBotton = document.querySelector("#buyBotton");
    console.log(buyBotton);

    buyBotton.addEventListener("click", (e) => {
      e.preventDefault();
      product.id = buyId;
      product.image = imageAlbum;
      product.title = titleAlbum;
      product.price = priceAlbum;
      console.log(product);
      oldCarrito.push(product);
      console.log(oldCarrito);
      localStorage.setItem("carrito", JSON.stringify(oldCarrito));
    });
  } else {
    let carrito = [];
    let imageAlbum = document.querySelector("#imgBuy").src.split("/", 6)[5];

    let titleAlbum = document.querySelector("#titleBuy").innerHTML.trim();

    let priceAlbum = document
      .querySelector("#priceBuy")
      .innerHTML.split(" <", 1)[0]
      .trim();

    let buyId = document.querySelector("#buyId").href.split("/", 6)[5];

    let product = {};

    let buyBotton = document.querySelector("#buyBotton");

    buyBotton.addEventListener("click", (e) => {
      e.preventDefault();
      product.id = buyId;
      product.image = imageAlbum;
      product.title = titleAlbum;
      product.price = priceAlbum;
      carrito.push(product);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    });
  }
});
