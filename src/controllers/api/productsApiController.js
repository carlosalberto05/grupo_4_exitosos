const paht = require("path");
const db = require("../../database/models");

const Album = db.Album;
const User = db.Album;
const Artist = db.Artist;
const Song = db.Song;
const Category = db.Category;
const Genre = db.Genre;

const productsApiController = {
  colection: (req, res) => {
    Album.findAll({
      include: [
        { association: "artist" },
        { association: "songs" },
        { association: "category" },
      ],
    }).then((albums) => {
      let response = {
        meta: {
          status: 200,
          count: albums.length,
          url: "api/users",
        },
        data: albums,
      };

      res.json(response);
    });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    let { id } = req.params;
    Album.findByPk(id, {
      include: [
        { association: "artist" },
        { association: "songs" },
        { association: "category" },
      ],
    }).then((album) => {
      let response = {
        meta: {
          status: 200,
          url: "api/users",
        },
        data: album,
      };

      res.json(response);
    });
  },
};

module.exports = productsApiController;
