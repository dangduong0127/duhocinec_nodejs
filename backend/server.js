// import express from "express";
// import dotenv from "dotenv";
// import path from "path";
// import router from "./src/routes/web.js";
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const router = require("./src/routes/web");
const cookieParser = require("cookie-parser");
// import sequelize from "./src/config/connectDB.js";
// import User from "./src/models/User.js";
// const __dirname = path.resolve();
const env = dotenv.config();
const app = express();
//config cookieParser
app.use(cookieParser());

//config cors
app.use(
  cors({
    origin: process.env.DOMAIN_ALLOWED,
    credentials: true, // Cho phép gửi cookie qua request
  })
);

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); //for from data

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use("/uploads", express.static(path.join(__dirname, "src", "uploads")));
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
