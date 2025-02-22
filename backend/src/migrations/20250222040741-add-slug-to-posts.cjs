"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn("Posts", "slug", {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    //   unique: true,
    // });

    // await queryInterface.addColumn("Scholarships", "slug", {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    //   unique: true,
    // });

    // await queryInterface.addColumn("Courses", "slug", {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    //   unique: true,
    // });

    // await queryInterface.addColumn("Faculties", "slug", {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    //   unique: true,
    // });

    // await queryInterface.addColumn("Universities", "slug", {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    //   unique: true,
    // });

    await queryInterface.addColumn("Countries", "slug", {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    });
    // await queryInterface.addColumn("News", "slug", {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    //   unique: true,
    // });
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn("Posts", "slug");
    // await queryInterface.removeColumn("Scholarships", "slug");
    // await queryInterface.removeColumn("Courses", "slug");
    // await queryInterface.removeColumn("Faculties", "slug");
    // await queryInterface.removeColumn("Universities", "slug");
    await queryInterface.removeColumn("Countries", "slug");
    // await queryInterface.removeColumn("News", "slug");
  },
};
