"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class PostMeta extends Model {
    static associate(models) {
      PostMeta.belongsTo(models.Country, {
        foreignKey: "id",
        as: "postMeta",
      });
    }
  }

  PostMeta.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Countries",
          key: "id",
        },
      },
      field_name: {
        type: Sequelize.STRING,
      },
      field_value: {
        type: Sequelize.TEXT,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
    {
      sequelize,
      modelName: "PostMeta",
      tableName: "PostMeta",
      timestamps: true,
    }
  );

  return PostMeta;
};
