const db = require("../../database/models");

const Album = db.Album;

const productsApiController = {
  colection: (req, res) => {
    Album.findAll({
      include: [
        { association: "artist" },
        { association: "songs" },
        { association: "category" },
        { association: "genre" },
      ],
    }).then((albums) => {
      let allAlbums = albums.map((album) => {
        let albumInfo = {};
        (albumInfo.id = album.id_albums),
          (albumInfo.name = album.title),
          (albumInfo.description = album.description),
          (albumInfo.artist = album.artist.name),
          (albumInfo.image = `http://localhost:3001/images/covers/${album.image}`);
        (albumInfo.genre = album.genre.name),
          (albumInfo.category = album.category.name);
        albumInfo.detail = `http://localhost:3001/api/products/${album.id_albums}`;
        albumInfo.songs = album.songs;
        return albumInfo;
      });

      let countByCategory = {};
      let totalTopProducts = albums.filter(
        (album) => album.category.name === "top"
      );
      countByCategory.total_top = totalTopProducts.length;
      let totalPopularProducts = albums.filter(
        (album) => album.category.name === "popular"
      );
      countByCategory.total_popular = totalPopularProducts.length;
      let totalMoreSaleProducts = albums.filter(
        (album) => album.category.name === "moreSale"
      );
      countByCategory.total_moreSale = totalMoreSaleProducts.length;

      let response = {
        meta: {
          status: 200,
          count: albums.length,
          countByCategory: countByCategory,
          url: "api/products",
        },
        products: allAlbums,
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
        { association: "genre" },
      ],
    }).then((album) => {
      let response;

      if (album !== null) {
        let albumInfo = {};
        albumInfo.id = album.id_albums;
        albumInfo.name = album.title;
        albumInfo.description = album.description;
        albumInfo.artist = album.artist.name;
        albumInfo.genre = album.genre.name;
        albumInfo.category = album.category.name;
        albumInfo.image = `http://localhost:3001/images/covers/${album.image}`;
        albumInfo.songs = album.songs;

        response = {
          meta: {
            status: 200,
            url: "api/products",
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
