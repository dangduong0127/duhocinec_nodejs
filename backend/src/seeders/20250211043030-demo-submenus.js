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
    return queryInterface.bulkInsert("SubMenus", [
      {
        name: "Châu Á",
        parent_id: 2,
        path: "/chaua",
        position: 0,
      },
      {
        name: "Châu Âu",
        parent_id: 2,
        path: "/chauau",
        position: 1,
      },
      {
        name: "Châu Mỹ",
        parent_id: 2,
        path: "/chaumy",
        position: 2,
      },
      {
        name: "Châu Úc",
        parent_id: 2,
        path: "/chauuc",
        position: 3,
      },

      {
        name: "Các trường tại Anh",
        parent_id: 3,
        path: "/truongtaianh",
        position: 0,
      },
      {
        name: "Các trường tại Bỉ",
        parent_id: 3,
        path: "/truongtaibi",
        position: 1,
      },
      {
        name: "Các trường tại Canada",
        parent_id: 3,
        path: "/truongtaicanada",
        position: 2,
      },
      {
        name: "Các trường tại Đức",
        parent_id: 3,
        path: "/truongtaiduc",
        position: 3,
      },
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
