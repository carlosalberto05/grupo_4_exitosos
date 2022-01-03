const express = require("express");

const router = express.Router();

//Controller
const usersController = require("../controllers/usersController");

//Middlewares
const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");

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

//Procesar el login
router.post("/login", usersController.loginProcess);

//Perfil del usuarior
router.get("/profile/:userId", usersController.profile);

module.exports = router;
