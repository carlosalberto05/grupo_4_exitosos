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
      let allAlbums = albums.map((album) => {
        let albumInfo = {};
        (albumInfo.id = album.id_albums),
          (albumInfo.name = album.title),
          (albumInfo.description = album.description),
          (albumInfo.artist = album.artist.name),
          (albumInfo.category = album.category.name);
        albumInfo.detail = `http://localhost:3000/api/products/${album.id_albums}`;
        albumInfo.songs = album.songs;
        return albumInfo;
      });

      let response = {
        meta: {
          status: 200,
          count: albums.length,
          url: "api/users",
        },
        data: allAlbums,
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
      let response;

      if (album !== null) {
        let albumInfo = {};
        albumInfo.id = album.id_albums;
        albumInfo.name = album.title;
        albumInfo.description = album.description;
        albumInfo.artist = album.artist.name;
        albumInfo.category = album.category.name;
        albumInfo.image = `http://localhost:3000/images/covers/${album.image}`;
        albumInfo.songs = album.songs;

        response = {
          meta: {
            status: 200,
            url: "api/users",
          },
          data: albumInfo,
        };
      } else {
        response = {
          meta: {
            status: 204,
            url: "api/products/:id",
          },
          data: "No hay albumbs con ese id",
        };
      }

      res.json(response);
    });
  },
};

module.exports = productsApiController;
