const express = require("express");
const path = require("path");
const router = express.Router();

const multer = require("multer");
const { body } = require("express-validator");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/covers"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

const uploadFile = multer({ storage });

const productsController = require("../controllers/productsController");

const validations = [
  body("title").notEmpty().withMessage("El nombre del álbum es requerido"),
  body("artist").notEmpty().withMessage("El nombre del artista es requerido"),
  body("description")
    .notEmpty()
    .withMessage("La descripción del disco es requerida"),
  body("tracklist")
    .notEmpty()
    .withMessage("Los tracks del disco son requeridos"),
  body("img").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);

      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones permitidas son ${acceptedExtensions.join(",")}`
        );
      }
    }

    return true;
  }),
  body("genre").notEmpty().withMessage("Elige un género"),
  body("year").notEmpty().withMessage("Escribe un año"),
  body("price").notEmpty().withMessage("Escribe un precio"),
  body("category").notEmpty().withMessage("Elige una categoría"),
];

//Estas son subrutas de la ruta /products que se configura en app

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.colection);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

/*** TOP PRODUCTS ***/
router.get("/top", productsController.top);

/*** POPULAR PRODUCTS ***/
router.get("/popular", productsController.popular);

/*** MORE SALE PRODUCTS ***/
router.get("/more-sale", productsController.moreSale);

/*** CART PRODUCTS ***/
router.get("/cart", productsController.cart);

// /*** CREATE ONE PRODUCT ***/
// router.get("/create", productsController.create);
// router.post(
//   "/",
//   uploadFile.single("img"),
//   validations,
//   productsController.store
// );

// /*** EDIT ONE PRODUCT ***/
// router.get("/edit/:id", productsController.edit);
// router.put("/edit/:id", productsController.update);

// /*** DELETE ONE PRODUCT***/
// router.delete("/delete/:id", productsController.destroy);

module.exports = router;
