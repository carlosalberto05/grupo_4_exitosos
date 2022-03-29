// Menu movil ------------------------------------------------
addEventListener("DOMContentLoaded", () => {
  const iconSearch = document.querySelector(".search_movil");
  const logo1 = document.querySelector(".logo_img");
  const logo2 = document.querySelector(".logo_img2");
  const search_input_movil = document.querySelector(".search_input_movil");
  const sizeWindow = screen.width;

  iconSearch.addEventListener("click", () => {
    logo1.classList.toggle("remove");
    search_input_movil.classList.toggle("show");
    iconSearch.classList.toggle("remove");
    logo2.classList.toggle("show");
  });

  const iconCar = document.querySelector("#car");

  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));

    iconCar.nextElementSibling.innerText = `${carrito.length}`;
  }
});
