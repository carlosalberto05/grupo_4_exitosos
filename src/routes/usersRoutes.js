const express = require("express");
const router = express.Router();

//Controller
const usersController = require("../controllers/usersController");

//Middlewares
const validationsRegister = require("../middlewares/validateRegisterMiddleware");
const validationsLoggin = require("../middlewares/validateLogginMiddleware");
const validateUpdatePassword = require("../middlewares/validateUpdatePasswordMiddleware");
const validateUpdateEmail = require("../middlewares/validateUpdateEmailMiddleware");
const validateUpdateName = require("../middlewares/validateUpdateNameMiddleware");
const uploadFile = require("../middlewares/multerMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

//Estas son subrutas de la ruta /users que se configura en app

//Formulario de registro
router.get("/register", guestMiddleware, usersController.register);

//Procesar el registro
router.post("/register", validationsRegister, usersController.processRegister);

//Formulario de login
router.get("/login", guestMiddleware, usersController.login);

//Procesar el login (Las validaciones para el loggin son custom y estan en el controlador)
router.post("/login", validationsLoggin, usersController.loginProcess);

//Perfil del usuarior
router.get("/profile", authMiddleware, usersController.profile);

//Editar nombre del usuario
router.get("/profile/editName/:id", usersController.editName);
router.patch(
  "/profile/editName/:id",
  validateUpdateName,
  usersController.updateName
);

//Editar email del usuario
router.get("/profile/editEmail/:id", usersController.editEmail);
router.patch(
  "/profile/editEmail/:id",
  validateUpdateEmail,
  usersController.updateEmail
);

//Editar password del usuario
router.get("/profile/editPassword/:id", usersController.editPassword);
router.patch(
  "/profile/editPassword/:id",
  validateUpdatePassword,
  usersController.updatePassword
);

//Editar avatar del usuario
router.get("/profile/editAvatar/:id", usersController.editAvatar);
router.patch(
  "/profile/editAvatar/:id",
  uploadFile.single("avatar"),
  usersController.updateAvatar
);

//Logout
router.get("/logout", usersController.logout);

module.exports = router;
