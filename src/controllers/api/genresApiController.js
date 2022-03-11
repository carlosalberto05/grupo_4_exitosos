const db = require("../../database/models");

const Genre = db.Genre;

const genresApiController = {
  list: async (req, res) => {
    try {
      let genresInDb = await Genre.findAll();

      let allgenres = genresInDb.map((genre) => {
        let genreInfo = {};
        genreInfo.id = genre.id_genres;
        genreInfo.name = genre.name;
        return genreInfo;
      });

      let response = {
        meta: {
          status: 200,
          count: genresInDb.length,
          url: "api/users",
        },
        data: allgenres,
      };
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = genresApiController;
