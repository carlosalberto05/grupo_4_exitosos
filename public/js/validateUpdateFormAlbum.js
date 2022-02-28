window.onload = function () {
  // Import all fields from ejs
  const inputFields = document.querySelectorAll("#edit-form input");
  const textAreaFields = document.querySelectorAll("#edit-form textArea");
  const selectFields = document.querySelectorAll("#edit-form select");
  //Create one array from all fields
  const allInputFields = [...inputFields, ...textAreaFields, ...selectFields];
  const form = document.querySelector("#edit-form");
  const button = document.querySelector(".btn-form button");

  for (let i = 0; i < allInputFields.length; i++) {
    if (allInputFields[i].id == "title") {
      allInputFields[i].focus();
      allInputFields[i].addEventListener("blur", () => {
        if (allInputFields[i].value == "") {
          allInputFields[i].nextElementSibling.innerText =
            "El título es obligatorio";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else if (allInputFields[i].value.length < 5) {
          allInputFields[i].nextElementSibling.innerText =
            "El título debe tener al menos 5 caracteres";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else {
          allInputFields[i].nextElementSibling.innerText = "";
          allInputFields[i].classList.add("is-valid");
          allInputFields[i].classList.remove("is-invalid-input");
        }
      });
    } else if (allInputFields[i].id == "artist") {
      allInputFields[i].addEventListener("blur", () => {
        if (allInputFields[i].value == "") {
          allInputFields[i].nextElementSibling.innerText =
            "El nombre del artista es requerido";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else if (allInputFields[i].value.length < 2) {
          allInputFields[i].nextElementSibling.innerText =
            "El nombre del artista debe tener al menos dos caracteres";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else {
          allInputFields[i].nextElementSibling.innerText = "";
          allInputFields[i].classList.add("is-valid");
          allInputFields[i].classList.remove("is-invalid-input");
        }
      });
    } else if (allInputFields[i].id == "description") {
      allInputFields[i].addEventListener("blur", () => {
        if (allInputFields[i].value == "") {
          allInputFields[i].nextElementSibling.innerText =
            "La descripción es requerida";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else if (allInputFields[i].value.length < 20) {
          allInputFields[i].nextElementSibling.innerText =
            "La descrpción debe tener al menos 20 caracteres";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else {
          allInputFields[i].nextElementSibling.innerText = "";
          allInputFields[i].classList.add("is-valid");
          allInputFields[i].classList.remove("is-invalid-input");
        }
      });
    } else if (allInputFields[i].id == "tracklist") {
      allInputFields[i].addEventListener("blur", () => {
        if (allInputFields[i].value == "") {
          allInputFields[i].nextElementSibling.innerText =
            "Debes incluir una lista de canciones separadas por comas cada una";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else if (allInputFields[i].value.length < 2) {
          allInputFields[i].nextElementSibling.innerHTML =
            "Debes editar únicamente el número de canciones que creaste";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else {
          allInputFields[i].nextElementSibling.innerText = "";
          allInputFields[i].classList.add("is-valid");
          allInputFields[i].classList.remove("is-invalid-input");
        }
      });
    } else if (allInputFields[i].id == "genre") {
      allInputFields[i].addEventListener("blur", () => {
        if (allInputFields[i].value == "") {
          allInputFields[i].nextElementSibling.innerText =
            "Debes elegir un género";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else {
          allInputFields[i].nextElementSibling.innerText = "";
          allInputFields[i].classList.add("is-valid");
          allInputFields[i].classList.remove("is-invalid-input");
        }
      });
    } else if (allInputFields[i].id == "release_date") {
      allInputFields[i].addEventListener("blur", () => {
        if (allInputFields[i].value == "") {
          allInputFields[i].nextElementSibling.innerText =
            "Debes elegir un fecha";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else {
          allInputFields[i].nextElementSibling.innerText = "";
          allInputFields[i].classList.add("is-valid");
          allInputFields[i].classList.remove("is-invalid-input");
        }
      });
    } else if (allInputFields[i].id == "price") {
      allInputFields[i].addEventListener("blur", () => {
        if (allInputFields[i].value == "") {
          allInputFields[i].nextElementSibling.innerText =
            "Debes ingresar un precio";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else if (allInputFields[i].value < 50) {
          allInputFields[i].nextElementSibling.innerText =
            "El precio debe ser mayor a $50 ";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else {
          allInputFields[i].nextElementSibling.innerText = "";
          allInputFields[i].classList.add("is-valid");
          allInputFields[i].classList.remove("is-invalid-input");
        }
      });
    } else if (allInputFields[i].id == "id_categories") {
      allInputFields[i].addEventListener("blur", () => {
        if (allInputFields[i].value == "") {
          allInputFields[i].nextElementSibling.innerText =
            "Debes ingresar una categoría";
          allInputFields[i].classList.add("is-invalid-input");
          allInputFields[i].classList.remove("is-valid");
        } else {
          allInputFields[i].nextElementSibling.innerText = "";
          allInputFields[i].classList.add("is-valid");
          allInputFields[i].classList.remove("is-invalid-input");
        }
      });
    }
  }

  //aquí empieza el sumbit
  form.addEventListener("submit", (e) => {
    let errors = [];

    for (let i = 0; i < allInputFields.length; i++) {
      if (allInputFields[i].id == "title") {
        if (allInputFields[i].value == "") {
          errors.push("El titulo es obligatorio");
        } else if (allInputFields[i].value.length < 2) {
          errors.push("El titulo es muy corto");
        }
      } else if (allInputFields[i].id == "artist") {
        if (allInputFields[i].value == "") {
          errors.push("El nombre del artista es requerido");
        } else if (allInputFields[i].value < 2) {
          errors.push("El nombre del artista debe tener al menos 2 caracteres");
        }
      } else if (allInputFields[i].id == "description") {
        if (allInputFields[i].value == "") {
          errors.push("La descripción es requerida");
        } else if (allInputFields[i].value.length <= 19) {
          errors.push("La descripción debe tener al menos 20 caracteres");
        }
      } else if (allInputFields[i].id == "tracklist") {
        if (allInputFields[i].value == "") {
          errors.push(
            "Debes incluir una lista de canciones separadas por comas cada una"
          );
        } else if (allInputFields[i].value.length < 2) {
          errors.push(
            "Debes escribir al menos una canción que tengas mas de dos caracteres"
          );
        }
      } else if (allInputFields[i].id == "genre") {
        if (allInputFields[i].value == "") {
          errors.push("Debes elegir un género");
        }
      } else if (allInputFields[i].id == "release_date") {
        if (allInputFields[i].value == "") {
          errors.push("Debes elegir un fecha");
        }
      } else if (allInputFields[i].id == "price") {
        if (allInputFields[i].value == "") {
          errors.push("Debes ingresar un precio");
        } else if (allInputFields[i].value < 50) {
          errors.push("El precio debe ser mayor a $50 ");
        }
      } else if (allInputFields[i].id == "id_categories") {
        if (allInputFields[i].value == "") {
          errors.push("Debes ingresar una categoría");
        }
      }
    }

    if (errors.length > 0) {
      e.preventDefault();
      let mesageError = document.querySelector(".ms-error");
      mesageError.innerText = "Error al ingresar los datos";
    }
  });
};
