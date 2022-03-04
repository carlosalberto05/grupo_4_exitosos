const express = require("express");
const router = express.Router();

//Controller
const usersController = require("../../controllers/api/usersApiController");

//Listado de todos los usuarios
router.get("/", usersController.list);
//Detalle del usuario
router.get("/:id", usersController.detail);

module.exports = router;
