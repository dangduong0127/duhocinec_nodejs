"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Images", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      file_name: {
        type: Sequelize.STRING,
      },
      file_path: {
        type: Sequelize.STRING,
      },
      related_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      related_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      positions: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Images");
  },
};
