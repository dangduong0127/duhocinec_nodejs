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
  const logout = await hanldeLogout(req.user.userId);
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

const handleUploadFile = async (req, res, next) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      return res.status(500).json({ error: "File upload error" });
    }

    // ✅ Lấy file từ mảng
    const uploadedFile = files.profilePic[0]; // Vì `profilePic` là một mảng

    if (!uploadedFile) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const oldPath = uploadedFile.filepath; // ✅ Lấy đúng path
    const newPath = path.join(
      __dirname,
      "../uploads",
      uploadedFile.originalFilename
    ); // ✅ Tạo đường dẫn mới

    fs.readFile(oldPath, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.status(500).json({ error: "File reading error" });
      }

      fs.writeFile(newPath, data, (err) => {
        if (err) {
          console.error("Error saving file:", err);
          return res.status(500).json({ error: "File saving error" });
        }

        res.status(200).json({
          message: "Successfully uploaded",
          filename: uploadedFile.originalFilename,
          path: newPath,
        });
      });
    });
  });
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
  handleUploadFile,
};
