"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class OrderDetail extends Model {
    static associate(models) {
      OrderDetail.belongsTo(models.Order, {
        foreignKey: "order_id",
        as: "orderDetails",
      });

      OrderDetail.belongsTo(models.Course, {
        foreignKey: "course_id",
        as: "courseDetails",
      });
    }
  }

  OrderDetail.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Orders",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Courses",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "OrderDetail",
      tableName: "OrderDetails",
    }
  );

  return OrderDetail;
};
