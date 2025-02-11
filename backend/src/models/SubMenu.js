"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class SubMenu extends Model {
    static associate(models) {
      SubMenu.hasMany(models.Category, {
        foreignKey: "id",
        as: "SubMenus",
      });
    }
  }

  SubMenu.init(
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
      parent_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
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
      modelName: "SubMenu",
      tableName: "SubMenus",
    }
  );

  return SubMenu;
};
