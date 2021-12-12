const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

//Estas son subrutas de la ruta /products que se configura en app

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

router.get("/cart", productsController.cart);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post("/", productsController.store);

module.exports = router;
