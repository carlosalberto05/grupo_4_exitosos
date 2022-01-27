module.exports = (sequelize, dataTypes) => {
  let alias = "Invoice";

  let cols = {
    id_invoices: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    id_customer: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    invoice_date: {
      type: dataTypes.DATE,
    },
    total: {
      type: dataTypes.DECIMAL(4, 2),
    },
  };

  let config = {
    tableName: "invoices",
    timestamps: false,
  };

  const Invoice = sequelize.define(alias, cols, config);

  Invoice.associate = function (models) {
    Invoice.belongsToMany(models.Album, {
      as: "albums",
      through: "albums_invoices",
      foreignKey: "id_invoice",
      otherKey: "id_album",
      timestamps: false,
    });
  };

  return Invoice;
};
