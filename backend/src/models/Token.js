"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Token extends Model {
    static associate(models) {
      //   Token.hasMany(models.User, {
      //     foreignKey: "roleId",
      //     as: "users",
      //   });
    }
  }

  Token.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: null,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      sequelize,
      modelName: "Token",
      tableName: "Tokens",
      timestamps: true,
    }
  );

  return Token;
};
