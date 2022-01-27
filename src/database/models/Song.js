module.exports = (sequelize, dataTypes) => {
  let alias = "Song";

  let cols = {
    id_songs: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(200),
      allowNull: false,
    },
    id_album: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "songs",
    timestamps: false,
  };

  const Song = sequelize.define(alias, cols, config);

  Song.associate = function (models) {
    Song.belongsTo(models.Album, {
      as: "album",
      foreignKey: "id_album",
    });
  };

  return Song;
};
