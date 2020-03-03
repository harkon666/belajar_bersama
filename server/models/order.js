'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    customer_id: DataTypes.INTEGER,
    tiket_id: DataTypes.INTEGER,
    qtt: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};