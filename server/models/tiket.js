"use strict";
module.exports = (sequelize, DataTypes) => {
  const tiket = sequelize.define(
    "tiket",
    {
      jenis: DataTypes.STRING,
      harga: DataTypes.INTEGER,
      stock: DataTypes.INTEGER
    },
    {}
  );
  tiket.associate = function(models) {
    // associations can be defined here
    tiket.belongsToMany(models.customer, {
      through: models.order,
      foreignKey: "tiket_id"
    });
  };
  return tiket;
};
