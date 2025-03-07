// import { Sequelize } from "sequelize";
// import User from "../models/User.js";
// const User = require("../models/User.js");
// const { Sequelize } = require("sequelize");
// const sequelize = require("../config/database");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const {
  getAllUsers,
  handleGetMenues,
  createUserService,
  handleLogin,
  hanldeLogout,
  getUserInfo,
  handleUpdateUser,
  handleDeleteUser,
  hanldeGetAllCountries,
  hanldeUpdateCountry,
  hanldeGetCountryDetails,
} = require("../services/userService");

const handleUploadImage = (req, res, next) => {
  const form = new formidable.IncomingForm({
    uploadDir: "./src/uploads",
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    const file = files.image[0];
    const fileName = path.basename(file.filepath);
    const publicUrl = `uploads/${fileName}`;

    res.json({
      fields,
      file: {
        originalName: file.originalFilename,
        size: file.size.toString(),
        type: file.mimetype,
        path: publicUrl,
      },
    });
  });
};

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
  try {
    const { email, password } = req.body;
    const result = await handleLogin(email, password);
    // console.log(result);
    if (!result || result.success !== true) {
      return res.status(201).json(result);
    }

    res.cookie("access_token", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false, // Chỉ bật secure nếu chạy production
      sameSite: "Lax",
      maxAge: 3600000,
    });

    return res.status(200).json(result);
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json(result);
  }
};

const logout = async (req, res) => {
  const logout = await hanldeLogout(req.user.userId);
  res.clearCookie("access_token");
  res.status(200).json({ logout });
};

const getAccountInfo = async (req, res) => {
  const user = await getUserInfo(req.user.userId);
  return res.status(200).json(user);
};

const updateUsers = async (req, res) => {
  const data = req.body;
  let message = await handleUpdateUser(data);
  res.status(200).json(message);
};

const deleteUser = async (req, res) => {
  const deleteStatus = await handleDeleteUser(req.body);
  res.status(200).json(deleteStatus);
};

const getAllCountries = async (req, res) => {
  const countries = await hanldeGetAllCountries();
  res.status(200).json(countries);
};

const UpdateCountry = async (req, res) => {
  const response = await hanldeUpdateCountry(req.body);
  return res.status(200).json(response);
};

const getCountryDetails = async (req, res) => {
  const response = await hanldeGetCountryDetails(req.query.id);
  return res.status(200).json(response);
};

module.exports = {
  getHomePage,
  getMenus,
  getAllUsersData,
  createUser,
  getLogin,
  logout,
  getAccountInfo,
  updateUsers,
  deleteUser,
  UpdateCountry,
  getAllCountries,
  handleUploadImage,
  getCountryDetails,
};
