const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("full_name")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("password")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
  body("politic").isIn(["on"]).withMessage("Tienes que aceptar las politicas"),
];
