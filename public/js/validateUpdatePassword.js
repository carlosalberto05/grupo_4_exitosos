window.onload = function () {
  //Import all fields from ejs
  const passwordField = document.querySelector("#password");
  const form = document.querySelector("#password-form");

  console.log(passwordField);

  passwordField.addEventListener("blur", () => {
    if (passwordField.value == "") {
      passwordField.nextElementSibling.innerText = "El password es requerido";
      passwordField.classList.add("is-invalid-input");
      passwordField.classList.remove("is-valid");
    } else if (passwordField.value.length <= 7) {
      passwordField.nextElementSibling.innerHTML =
        "La contraseña debe tener al menos 8 caracteres";
      passwordField.classList.add("is-invalid-input");
      passwordField.classList.remove("is-valid");
    } else {
      passwordField.nextElementSibling.innerText = "";
      passwordField.classList.add("is-valid");
      passwordField.classList.remove("is-invalid-input");
    }
  });

  form.addEventListener("submit", (e) => {
    let errors = [];

    if (passwordField.value == "") {
      errors.push("El password es requerido");
    } else if (passwordField.value.length <= 7) {
      errors.push("El password debe tener al menos 8 caracteres");
    }

    if (errors.length > 0) {
      e.preventDefault();
      let mesageError = document.querySelector(".ms-error");
      errors.forEach((error) => (mesageError.innerText = error));
      //   mesageError.innerText = "Error al ingresar los datos";
    }
  });
};
