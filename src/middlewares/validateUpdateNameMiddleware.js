const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("full_name")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres"),
];
