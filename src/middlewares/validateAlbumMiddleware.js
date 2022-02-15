const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("title").notEmpty().withMessage("El nombre del álbum es requerido"),
  body("artist").notEmpty().withMessage("El nombre del artista es requerido"),
  body("description")
    .notEmpty()
    .withMessage("La descripción del disco es requerida"),
  body("image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".jpeg"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);

      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones permitidas son ${acceptedExtensions.join(",")}`
        );
      }
    }

    return true;
  }),
  body("tracklist")
    .notEmpty()
    .withMessage("Los tracks del disco son requeridos"),
  body("genre").notEmpty().withMessage("Elige un género"),
  body("release_date").notEmpty().withMessage("Escribe un año"),
  body("price").notEmpty().withMessage("Escribe un precio"),
  body("id_categories").notEmpty().withMessage("Elige una categoría"),
];
