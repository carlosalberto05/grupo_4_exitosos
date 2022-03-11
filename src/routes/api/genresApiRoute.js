const express = require("express");
const router = express.Router();

//Controller
const genresController = require("../../controllers/api/genresApiController");

//Listado de todos los usuarios
router.get("/", genresController.list);

module.exports = router;
