const express = require("express");
const path = require("path");
const router = express.Router();

const multer = require("multer");
const { body } = require("express-validator");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/avatars"));
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img_${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadFile = multer({ storage });

const usersController = require("../controllers/usersController");

const validations = [
  body("fullName").notEmpty(),
  body("email").notEmpty(),
  body("password").notEmpty(),
];

//Estas son subrutas de la ruta /users que se configura en app

//Formulario de registro
router.get("/register", usersController.register);

//Procesar el registro
router.post(
  "/register",
  uploadFile.single("avatar"),
  validations,
  usersController.processRegister
);

//Formulario de login
router.get("/login", usersController.login);

//Perfil del usuarior
router.get("/profile/:userId", usersController.profile);

module.exports = router;
