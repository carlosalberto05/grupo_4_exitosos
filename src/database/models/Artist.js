module.exports = (sequelize, dataTypes) => {
  let alias = "Artist";

  let cols = {
    id_artists: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
  };

  let config = {
    tableName: "artists",
    timestamps: false,
  };

  const Artist = sequelize.define(alias, cols, config);

  Artist.associate = function (models) {
    Artist.hasMany(models.Album, {
      as: "albums",
      foreignKey: "id_artist",
    });
  };

  return Artist;
};
