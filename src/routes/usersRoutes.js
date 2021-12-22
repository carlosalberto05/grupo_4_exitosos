const express = require("express");
const path = require("path");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");

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

//Estas son subrutas de la ruta /users que se configura en app

//Formulario de registro
router.get("/register", usersController.register);

//Procesar el registro
router.post(
  "/register",
  uploadFile.single("avatar"),
  usersController.processRegister
);

//Formulario de login
router.get("/login", usersController.login);

//Perfil del usuarior
router.get("/profile/:userId", usersController.profile);

module.exports = router;
