"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Role extends Model {
    static associate(models) {
      // Role.belongsTo(models.User, {
      //   foreignKey: "roleId",
      //   as: "usersInRole",
      // });
    }
  }

  Role.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "Roles",
    }
  );

  return Role;
};
