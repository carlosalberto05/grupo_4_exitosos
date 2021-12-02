const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//Estas son subrutas de la ruta /users que se configura en app
router.get("/login", usersController.login);
router.get("/register", usersController.register);

module.exports = router;
