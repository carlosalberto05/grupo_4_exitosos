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
      }
    );
  },

  search: async (req, res) => {
    let search = req.query.keywords;

    try {
      let albumToSearch = await db.Album.findAll({
        include: [{ association: "category" }, { association: "artist" }],
        where: {
          title: { [Op.like]: "%" + search + "%" },
        },
      });

      return res.render("results", {
        albums: albumToSearch,
        search,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = mainController;
