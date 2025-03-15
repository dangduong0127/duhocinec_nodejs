"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class CountryPostMeta extends Model {
    static associate(models) {
      // CountryPostMeta chỉ là bảng trung gian, không cần hasMany
      //   CountryPostMeta.belongsTo(models.Country, {
      //     foreignKey: "country_id",
      //     as: "countryPostMeta",
      //   });
      //   CountryPostMeta.belongsTo(models.PostMeta, {
      //     foreignKey: "post_meta_id",
      //     as: "postMetaID",
      //   });

      CountryPostMeta.belongsTo(models.Country, {
        foreignKey: "country_id",
        as: "country",
      });

      CountryPostMeta.belongsTo(models.PostMeta, {
        foreignKey: "post_meta_id",
        as: "postMeta",
      });
    }
  }

  CountryPostMeta.init(
    {
      country_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: "Countries", key: "id" },
      },
      post_meta_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: "PostMeta", key: "id" },
      },
    },
    {
      sequelize,
      tableName: "CountryPostMeta",
      timestamps: false,
    }
  );

  return CountryPostMeta;
};
