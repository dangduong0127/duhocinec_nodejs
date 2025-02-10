"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Category extends Model {
    static associate(models) {
      //   Category.hasOne(models.User, {
      //     foreignKey: "category_id",
      //     as: "user",
      //   });
    }
  }

  Category.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "Categories",
    }
  );

  return Category;
};
