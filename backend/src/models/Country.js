"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Country extends Model {
    static associate(models) {
      Country.hasMany(models.Category, {
        foreignKey: "category_id",
        as: "countries",
      });

      Country.belongsTo(models.User, {
        foreignKey: "author",
        as: "users",
      });
    }
  }

  Country.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      excerpt: {
        type: DataTypes.STRING,
      },
      thumbnail: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
      author: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      universities_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Universities",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Country",
      tableName: "Countries",
    }
  );

  return Country;
};
