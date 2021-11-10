"use strict";

//Carrusel de la home view ------------------------------------------

const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

//Cuando hacemos click en el punto
//saber la posición de ese punto
//Aplicar un transfor translateX al grande
//Quitar la clase activo de todos los puntos (por si hubo alguna seleccion previa)
//Añadir la clase activo al punto que hemos hecho click

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    let position = i;
    //cuando posicion es 0 transform X es 0
    //cuando posicion es 1 transform X es -50%
    //operacion = posicion * -50
    let operation = position * -50;
    grande.style.transform = `translateX(${operation}%)`;

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });
    punto[i].classList.add("activo");
  });
});
