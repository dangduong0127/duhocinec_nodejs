"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "coursesCate",
      });
      Course.belongsTo(models.User, {
        foreignKey: "author",
        as: "authorCourse",
      });
      Course.hasMany(models.PostMeta, {
        foreignKey: "post_id",
        as: "postMetaCourse",
      });
    }
  }

  Course.init(
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
      price: {
        type: DataTypes.DECIMAL(15, 2),
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
      stock: {
        type: DataTypes.INTEGER,
      },

      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      levels_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Levels",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      scholarship_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Scholarships",
          key: "id",
        },
        onDelete: "CASCADE",
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
      timestamps: false,
      modelName: "Course",
      tableName: "Courses",
    }
  );

  return Course;
};
