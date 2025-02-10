// import express from "express";
// import dotenv from "dotenv";
// import path from "path";
// import router from "./src/routes/web.js";
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const router = require("./src/routes/web");
// import sequelize from "./src/config/connectDB.js";
// import User from "./src/models/User.js";
// const __dirname = path.resolve();
const env = dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use("/uploads", express.static(path.join(__dirname, "src", "uploads")));

app.use(router);

// const connectionDB = async () => {
//   try {
//     await sequelize.sync({ force: true });
//     console.log("Database & tables created!");
//   } catch (error) {
//     console.error(error);
//   }
// };
// connectionDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
