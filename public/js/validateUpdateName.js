window.onload = function () {
  //Import all fields from ejs
  const nameField = document.querySelector("#name");
  const form = document.querySelector("#name-form");

  nameField.addEventListener("blur", () => {
    if (nameField.value == "") {
      nameField.nextElementSibling.innerText =
        "El nombre y el apellido son obligatorios";
      nameField.classList.add("is-invalid-input");
      nameField.classList.remove("is-valid");
    } else if (nameField.value.length < 2) {
      nameField.nextElementSibling.innerHTML =
        "El nombre y apellido es muy corto";
      nameField.classList.add("is-invalid-input");
      nameField.classList.remove("is-valid");
    } else {
      nameField.nextElementSibling.innerText = "";
      nameField.classList.add("is-valid");
      nameField.classList.remove("is-invalid-input");
    }
  });

  form.addEventListener("submit", (e) => {
    let errors = [];

    if (nameField.value == "") {
      errors.push("El nombre y el apellido son obligatorios");
    } else if (nameField.value.length < 2) {
      errors.push("El nombre y apellido es muy corto");
    }

    if (errors.length > 0) {
      e.preventDefault();
      let mesageError = document.querySelector(".ms-error");
      errors.forEach((error) => (mesageError.innerText = error));
      //   mesageError.innerText = "Error al ingresar los datos";
    }
  });
};
