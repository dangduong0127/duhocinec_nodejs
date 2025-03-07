const { Sequelize } = require("sequelize");
const config = require("./config")[process.env.NODE_ENV];
// Option 3: Passing parameters separately (other dialects)

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    // port: config.port,
    dialect: config.dialect,
    logging: config.logging,
    timezone: config.timezone,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
