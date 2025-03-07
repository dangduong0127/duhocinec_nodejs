require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "database",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    query: { raw: true },
    logging: false,
    timezone: "+07:00",
  },
  test: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || null,
    database: process.env.DB_NAME || "database_test",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "database",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    query: { raw: true },
    logging: false,
    timezone: "+07:00",
  },
};
