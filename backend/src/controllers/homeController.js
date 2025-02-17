// import { Sequelize } from "sequelize";
// import User from "../models/User.js";
// const User = require("../models/User.js");
// const { Sequelize } = require("sequelize");
// const sequelize = require("../config/database");
const {
  getAllUsers,
  handleGetMenues,
  createUserService,
  handleLogin,
  hanldeLogout,
} = require("../services/userService");

const getHomePage = (req, res) => {
  async function getData() {
    const users = await getAllUsers();
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

const getAllUsersData = async (req, res) => {
  try {
    const users = await getAllUsers(req, res);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  // const { name, email, password } = req.body;
  const user = await createUserService(req.body);
  res.status(200).json(user);
};

const getLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await handleLogin(email, password);
  return res.status(200).json(result);
};

const logout = async (req, res) => {
  const logout = await hanldeLogout(req.userId);
  res.status(200).json({ logout });
};

module.exports = {
  getHomePage,
  getMenus,
  getAllUsersData,
  createUser,
  getLogin,
  logout,
};
