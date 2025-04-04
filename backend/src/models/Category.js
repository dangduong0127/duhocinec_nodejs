"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Post, {
        foreignKey: "category_id",
        as: "postsCategory",
      });

      Category.hasMany(models.Country, {
        foreignKey: "category_id",
        as: "countriesCate",
      });

      Category.hasMany(models.Course, {
        foreignKey: "category_id",
        as: "coursesCate",
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
