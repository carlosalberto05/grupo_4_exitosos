const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("title")
    .notEmpty()
    .withMessage("El nombre del álbum es requerido")
    .bail()
    .isLength({ min: 5 })
    .withMessage("El nombre del álbum debe tener al menos 5 caracteres"),
  body("artist")
    .notEmpty()
    .withMessage("El nombre del artista es requerido")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El nombre del artista debe tener al menos 2 caracteres"),
  body("description")
    .notEmpty()
    .withMessage("La descripción del disco es requerida")
    .bail()
    .isLength({ min: 20 })
    .withMessage("La descripción debe tener al menos 20 caracteres"),
  body("tracklist")
    .notEmpty()
    .withMessage("Los tracks del disco son requeridos"),
  body("genre").notEmpty().withMessage("Elige un género"),
  body("release_date").notEmpty().withMessage("Escribe un año"),
  body("price").notEmpty().withMessage("Escribe un precio"),
  body("id_categories").notEmpty().withMessage("Elige una categoría"),
];
