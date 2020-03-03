"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "customers",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      tiket_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "tikets",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      qtt: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("orders");
  }
};
