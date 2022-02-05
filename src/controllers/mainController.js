// const fs = require("fs");
// const path = require("path");

// const discsFilePath = path.join(__dirname, "../database/discsDataBase.json");
// let discs = JSON.parse(fs.readFileSync(discsFilePath, "utf-8"));

// const topDiscs = discs.filter((disc) => disc.category == "top");

// const popularDiscs = discs.filter((disc) => disc.category == "popular");

// const moreSaleDiscs = discs.filter((disc) => disc.category == "moreSale");

// const mainController = {
//   home: (req, res) => {
//     res.render("index", { topDiscs, popularDiscs, moreSaleDiscs });
//   },
// };

// module.exports = mainController;

const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const mainController = {
  home: (req, res) => {
    let topDiscs = db.Album.findAll({
      include: [{ association: "category" }, { association: "artist" }],
      where: {
        id_category: 1,
      },
      limit: 4,
    });

    let popularDiscs = db.Album.findAll({
      include: [{ association: "category" }, { association: "artist" }],
      where: {
        id_category: 2,
      },
      limit: 4,
    });

    let moreSaleDiscs = db.Album.findAll({
      include: [{ association: "category" }, { association: "artist" }],
      where: {
        id_category: 3,
      },
      limit: 4,
    });

    Promise.all([topDiscs, popularDiscs, moreSaleDiscs]).then(
      ([topDiscs, popularDiscs, moreSaleDiscs]) => {
        res.render("index", { topDiscs, popularDiscs, moreSaleDiscs });
        console.log("Este es el popular de discos de la base de datos");
        console.log(popularDiscs);
      }
    );
  },
};

module.exports = mainController;
