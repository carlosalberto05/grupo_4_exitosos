const express = require("express");
const router = express.Router();

//Controller
const productsController = require("../../controllers/api/productsApiController");

//Listado de todos los usuarios
router.get("/", productsController.colection);
//Detalle del usuario
router.get("/:id", productsController.detail);

module.exports = router;
