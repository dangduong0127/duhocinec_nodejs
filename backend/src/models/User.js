"use strict";
const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database");
module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Quan hệ 1-N: Một User có nhiều Posts
      User.hasMany(models.Post, { foreignKey: "author", as: "userPosts" });
      // Quan hệ 1-1: Một User thuộc một Role
      User.hasOne(models.Role, { foreignKey: "id", as: "userRole" });
    }
  }

  User.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, // Mặc định là nam
      },
      roleId: {
        type: DataTypes.INTEGER,
        references: {
          model: "roles",
          key: "id",
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: true, // Tự động thêm createdAt và updatedAt
    }
  );

  return User;
};
