const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("full_name").notEmpty().withMessage("Tienes que escribir un nombre"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
  body("politic").isIn(["on"]).withMessage("Tienes que aceptar las politicas"),
];
