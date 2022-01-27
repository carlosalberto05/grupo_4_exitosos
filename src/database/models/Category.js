module.exports = (sequelize, dataTypes) => {
  let alias = "Category";

  let cols = {
    id_categories: {
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
    tableName: "categories",
    timestamps: false,
  };

  const Category = sequelize.define(alias, cols, config);

  Category.associate = function (models) {
    Category.hasMany(models.Album, {
      as: "albums",
      foreignKey: "id_category",
    });
  };

  return Category;
};
