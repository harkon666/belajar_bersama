"use strict";
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define(
    "customer",
    {
      name: DataTypes.STRING,
      saldo: DataTypes.INTEGER
    },
    {}
  );
  customer.associate = function(models) {
    // associations can be defined here
    customer.belongsToMany(models.tiket, {
      through: models.order,
      foreignKey: "customer_id"
    });
  };
  return customer;
};
