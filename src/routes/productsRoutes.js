const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

//Estas son subrutas de la ruta /users que se configura en app
router.get("/cart", productsController.cart);
router.get("/detail", productsController.detail);
router.get("/create&edit_product", productsController.createandEdit);

module.exports = router;
