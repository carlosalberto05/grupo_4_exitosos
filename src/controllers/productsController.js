const fs = require("fs");
const path = require("path");

const discsFilePath = path.join(__dirname, "../database/discsDataBase.json");
let discs = JSON.parse(fs.readFileSync(discsFilePath, "utf-8"));

const productsController = {
  // Root - Show all products
  index: (req, res) => {
    res.render("products/products", {
      discs: discs,
    });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    let id = req.params.id;
    let disc = discs.find((disc) => disc.id == id);
    res.render("products/productDetail", {
      disc,
    });
  },

  //Carro de compras
  cart: (req, res) => {
    return res.render("products/productCart");
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("products/product-create-form.ejs");
  },

  // Create -  Method to store
  store: (req, res) => {
    let newDisc = {
      id: discs[discs.length - 1].id + 1,
      ...req.body,
    };
    discs.push(newDisc);

    fs.writeFileSync(discsFilePath, JSON.parse(discs, null, " "));
    res.redirec("/");
  },
};

module.exports = productsController;
