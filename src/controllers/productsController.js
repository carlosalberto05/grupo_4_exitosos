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
      img: req.file.filename,
    };

    newDisc.tracklist = newDisc.tracklist.split(",");

    discs.push(newDisc);

    fs.writeFileSync(discsFilePath, JSON.stringify(discs, null, " "));

    // res.redirect("/");
    return res.redirect("/products/detail/" + newDisc.id);
  },

  // Update - Form to edit
  edit: (req, res) => {
    let id = req.params.id;
    let discToEdit = discs.find((disc) => disc.id == id);
    res.render("products/product-edit-form.ejs", { discToEdit });
  },
  // Update - Method to update
  update: (req, res) => {
    let id = req.params.id;
    let discToEdit = discs.find((disc) => disc.id == id);

    console.log("El red.body");
    console.log(req.body);

    discToEdit = {
      id: discToEdit.id,
      ...req.body,
      img: discToEdit.img,
    };

    discToEdit.tracklist = discToEdit.tracklist.split(",");

    console.log("Disco que se va a editar");
    console.log(discToEdit);

    let newDiscs = discs.map((disc) => {
      if (disc.id == discToEdit.id) {
        return (disc = { ...discToEdit });
      }
      return disc;
    });

    console.log("Lista de discos incluyendo el editado");
    console.log(newDiscs);

    fs.writeFileSync(discsFilePath, JSON.stringify(newDiscs, null, " "));
    res.redirect("/");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    let id = req.params.id;
    let finalDiscs = discs.filter((disc) => disc.id != id);
    fs.writeFileSync(discsFilePath, JSON.stringify(finalDiscs, null, " "));
    discs = JSON.parse(fs.readFileSync(discsFilePath, "utf-8"));
    res.redirect("/products");
  },
};

module.exports = productsController;
