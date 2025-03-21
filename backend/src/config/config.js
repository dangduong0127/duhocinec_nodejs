require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: "",
    database: "duhocinec",
    host: "127.0.0.1",
    dialect: "mysql",
    query: { raw: true },
    logging: false,
    timezone: "+07:00",
  },
  test: {
    username: "root",
    password: null,
    database: "duhocinec",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+07:00",
  },
  production: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "duhocinec",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    query: { raw: true },
    logging: false,
    timezone: "+07:00",
  },
};
