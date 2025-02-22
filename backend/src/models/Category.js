"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Post, {
        foreignKey: "category_id",
        as: "Posts",
      });

      Category.hasMany(models.Country, {
        foreignKey: "category_id",
        as: "countries",
      });
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
      path: {
        type: DataTypes.STRING,
      },
      position: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Category",
      tableName: "Categories",
    }
  );

  return Category;
};
