module.exports = (sequelize, dataTypes) => {
  let alias = "Genre";

  let cols = {
    id_genres: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
  };

  let config = {
    tableName: "genres",
    timestamps: false,
  };

  const Genre = sequelize.define(alias, cols, config);

  Genre.associate = function (models) {
    Genre.hasMany(models.Album, {
      as: "albums",
      foreignKey: "id_genre",
    });
  };

  return Genre;
};
