window.onload = function () {
  const fileds = document.querySelectorAll("#form-register input");
  const form = document.querySelector("#form-register");
  const messageError = document.querySelector(".ms-error");
  let allErrors = document.querySelectorAll(".is-invalid");

  for (let i = 0; i < fileds.length; i++) {
    if (fileds[i].id == "full_name") {
      fileds[i].focus();
      fileds[i].addEventListener("blur", () => {
        if (fileds[i].value == "") {
          fileds[i].nextElementSibling.innerText =
            "El nombre y el apellido son obligatorios";
          fileds[i].classList.add("is-invalid-input");
          fileds[i].classList.remove("is-valid");
        } else if (fileds[i].value.length < 2) {
          fileds[i].nextElementSibling.innerText =
            "El nombre y apellido es muy corto";
          fileds[i].classList.add("is-invalid-input");
          fileds[i].classList.remove("is-valid");
        } else {
          fileds[i].nextElementSibling.innerText = "";
          fileds[i].classList.add("is-valid");
          fileds[i].classList.remove("is-invalid-input");
        }
      });
    } else if (fileds[i].id == "email") {
      fileds[i].addEventListener("blur", () => {
        if (fileds[i].value == "") {
          fileds[i].nextElementSibling.innerText = "El correo es necesario";
          fileds[i].classList.add("is-invalid-input");
          fileds[i].classList.remove("is-valid");
        } else if (
          /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(fileds[i].value) == false
        ) {
          fileds[i].nextElementSibling.innerText =
            "Debe ingresar un correo valido";
          fileds[i].classList.add("is-invalid-input");
          fileds[i].classList.remove("is-valid");
        } else {
          fileds[i].nextElementSibling.innerText = "";
          fileds[i].classList.add("is-valid");
          fileds[i].classList.remove("is-invalid-input");
        }
      });
    } else if (fileds[i].id == "password") {
      fileds[i].addEventListener("blur", () => {
        if (fileds[i].value == "") {
          fileds[i].nextElementSibling.innerText = "El password es requerido";
          fileds[i].classList.add("is-invalid-input");
          fileds[i].classList.remove("is-valid");
        } else if (fileds[i].value.length <= 7) {
          fileds[i].nextElementSibling.innerText =
            "La contraseña debe tener al menos 8 caracteres";
          fileds[i].classList.add("is-invalid-input");
          fileds[i].classList.remove("is-valid");
        } else {
          fileds[i].nextElementSibling.innerText = "";
          fileds[i].classList.add("is-valid");
          fileds[i].classList.remove("is-invalid-input");
        }
      });
    }
  }

  //aquí empieza el sumbit

  form.addEventListener("submit", (e) => {
    allErrors.forEach((erro) => {
      if (erro.innerText !== "") {
        e.preventDefault();
      }
    });
  });
};
