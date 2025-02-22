"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Menus", [
      { name: "Country", path: "/quoc-gia", position: 0 },
      { name: "School", path: "/truong", position: 0 },
      { name: "Workshop", path: "/hoi-thao", position: 0 },
      { name: "Scholarship", path: "/hoc-bong", position: 0 },
      { name: "Course", path: "/khoa-hoc", position: 0 },
      { name: "News", path: "/kham-pha-du-hoc", position: 0 },
      { name: "Introduce", path: "/gioi-thieu-ve-inec", position: 0 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
