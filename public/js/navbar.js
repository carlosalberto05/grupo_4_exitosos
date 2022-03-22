// Menu movil ------------------------------------------------
addEventListener("DOMContentLoaded", () => {
  const iconSearch = document.querySelector(".search_movil");
  const logo1 = document.querySelector(".logo_img");
  const logo2 = document.querySelector(".logo_img2");
  const search_input_movil = document.querySelector(".search_input_movil");
  const sizeWindow = screen.width;
  console.log(sizeWindow);

  iconSearch.addEventListener("click", () => {
    logo1.classList.add("remove");
    search_input_movil.classList.toggle("show");
    iconSearch.classList.toggle("remove");
    logo2.classList.toggle("show");
  });
});
