window.onload = function () {
  //Import all fields from ejs
  const emailField = document.querySelector("#email");
  const form = document.querySelector("#email-form");

  emailField.addEventListener("blur", () => {
    if (emailField.value == "") {
      emailField.nextElementSibling.innerText = "El correo es necesario";
      emailField.classList.add("is-invalid-input");
      emailField.classList.remove("is-valid");
    } else if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(emailField.value) == false) {
      emailField.nextElementSibling.innerHTML =
        "Debe ingresar un correo valido";
      emailField.classList.add("is-invalid-input");
      emailField.classList.remove("is-valid");
    } else {
      emailField.nextElementSibling.innerText = "";
      emailField.classList.add("is-valid");
      emailField.classList.remove("is-invalid-input");
    }
  });

  form.addEventListener("submit", (e) => {
    let errors = [];

    if (emailField.value == "") {
      errors.push("El correo es necesario");
    } else if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(emailField.value) == false) {
      errors.push("Debe ingresar un correo valido");
    }

    if (errors.length > 0) {
      e.preventDefault();
      let mesageError = document.querySelector(".ms-error");
      errors.forEach((error) => (mesageError.innerText = error));
      //   mesageError.innerText = "Error al ingresar los datos";
    }
  });
};
