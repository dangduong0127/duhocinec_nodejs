// import { Sequelize } from "sequelize";
// import User from "../models/User.js";
// const User = require("../models/User.js");
// const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");
const { getAllUsers } = require("../services/userService");

const getHomePage = (req, res) => {
  async function getData() {
    const users = await getAllUsers();
    console.log(users);
    // res.send(users);

    res.render("./test.ejs", { data: users });
  }
  getData();
};

module.exports = { getHomePage };
