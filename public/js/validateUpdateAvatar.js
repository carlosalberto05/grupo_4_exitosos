window.onload = function () {
  //Import all fields from ejs
  const avatarField = document.querySelector("#avatar");
  const form = document.querySelector("#avatar-form");

  let allowedExtensions = /(.jpg|.jpeg|.png|.JPG)$/i;

  avatarField.addEventListener("blur", () => {
    if (avatarField.value == "") {
      avatarField.nextElementSibling.innerText =
        "Debes subir una imagen para el álbum";
      avatarField.classList.add("is-invalid-input");
      avatarField.classList.remove("is-valid");
    } else if (!allowedExtensions.exec(avatarField.value)) {
      avatarField.nextElementSibling.innerHTML =
        "Las extensiones permitidas son .jpeg/.jpg/.png/ .JPG";
      avatarField.classList.add("is-invalid-input");
      avatarField.classList.remove("is-valid");
    } else {
      avatarField.nextElementSibling.innerText = "";
      avatarField.classList.add("is-valid");
      avatarField.classList.remove("is-invalid-input");
    }
  });

  avatarField.addEventListener("change", () => {
    if (!allowedExtensions.exec(avatarField.value)) {
      avatarField.nextElementSibling.innerHTML =
        "Las extensiones permitidas son .jpeg/.jpg/.png/ .JPG";
      avatarField.classList.add("is-invalid-input");
      avatarField.classList.remove("is-valid");
    } else {
      avatarField.nextElementSibling.innerText = "";
      avatarField.classList.add("is-valid");
      avatarField.classList.remove("is-invalid-input");
    }
  });

  form.addEventListener("submit", (e) => {
    let errors = [];

    if (avatarField.value == "") {
      errors.push("Debes subir una imagen para el álbum");
    } else if (!allowedExtensions.exec(avatarField.value)) {
      errors.push("Las extensiones permitidas son .jpeg/.jpg/.png/ .JPG");
    }

    if (errors.length > 0) {
      e.preventDefault();
      let mesageError = document.querySelector(".ms-error");
      errors.forEach((error) => (mesageError.innerText = error));
      //   mesageError.innerText = "Error al ingresar los datos";
    }
  });
};
