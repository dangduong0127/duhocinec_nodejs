// import { Sequelize } from "sequelize";
// import User from "../models/User.js";
// const User = require("../models/User.js");
// const { Sequelize } = require("sequelize");
// const sequelize = require("../config/database");
const { getAllUsers, handleGetMenues } = require("../services/userService");

const getHomePage = (req, res) => {
  async function getData() {
    const users = await getAllUsers();
    console.log(users);
    // res.send(users);

    res.render("./test.ejs", { data: users });
  }
  getData();
};

const getMenus = async (req, res) => {
  try {
    const menus = await handleGetMenues();
    res.status(200).json(menus);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getHomePage, getMenus };
