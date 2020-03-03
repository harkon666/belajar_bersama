"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tikets", [
      {
        jenis: "kereta",
        harga: 15000,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis: "bus",
        harga: 50000,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis: "pesawat",
        harga: 1500000,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
