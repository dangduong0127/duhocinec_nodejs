"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Post extends Model {
    static associate(models) {
      // Post.belongsTo(models.User, { foreignKey: "id", as: "author_inf" });
      // Post.belongsTo(models.Category, {
      //   foreignKey: "category_id",
      //   as: "category",
      // });
      // Post.belongsTo(models.Taxonomy, {
      //   foreignKey: "taxonomy_id",
      //   as: "taxonomy",
      // });
    }
  }

  Post.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      taxonomy_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Taxonomy",
          key: "id",
        },
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      post_types: {
        type: DataTypes.INTEGER,
        references: {
          model: "PostTypes",
          key: "id",
        },
      },
      post_status: {
        type: DataTypes.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "Posts",
      timestamps: true,
    }
  );

  return Post;
};
