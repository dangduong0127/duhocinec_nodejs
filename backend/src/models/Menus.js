"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Menu extends Model {
    static associate(models) {
      Menu.hasMany(models.SubMenu, {
        foreignKey: "parent_id",
        as: "SubMenus",
      });
    }
  }

  Menu.init(
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
      modelName: "Menu",
      tableName: "Menus",
    }
  );

  return Menu;
};
