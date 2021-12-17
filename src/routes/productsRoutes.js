const express = require("express");
const path = require("path");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/covers"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

const uploadFile = multer({ storage });

//Estas son subrutas de la ruta /products que se configura en app

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

router.get("/cart", productsController.cart);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post("/", uploadFile.single("img"), productsController.store);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productsController.destroy);

module.exports = router;
