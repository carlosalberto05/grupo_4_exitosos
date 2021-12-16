const fs = require("fs");
const path = require("path");

const discsFilePath = path.join(__dirname, "../database/discsDataBase.json");
let discs = JSON.parse(fs.readFileSync(discsFilePath, "utf-8"));

const topDiscs = discs.filter((disc) => disc.category == "top");

const popularDiscs = discs.filter((disc) => disc.category == "popular");

const moreSaleDiscs = discs.filter((disc) => disc.category == "moreSale");

const mainController = {
  home: (req, res) => {
    res.render("index", { topDiscs, popularDiscs, moreSaleDiscs });
  },
};

module.exports = mainController;
