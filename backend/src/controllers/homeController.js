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
  handleGetAllCategory,
  hanldeGetAllPosts,
  handleUpdatePost,
  hanldeCreatePost,
  handleSearchPosts,
  handleGetAllCourses,
  handleUpdateCourse,
  hanldeCreateCourse,
  handleGetCourseToCart,
  handleCreateOrder,
  handleGetAllCart,
  handleDeleteProduct,
  hanldeCreatePaymentLink,
  handleGetPaymentInfo,
  handleCancelOrder,
  handleWebhookPayOS,
  handleGetAllOrders,
  handleGetOrderForUser,
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
      sameSite: "None",
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

const getAllCategory = async (req, res) => {
  const response = await handleGetAllCategory();
  return res.status(200).json(response);
};

const getAllPosts = async (req, res) => {
  const response = await hanldeGetAllPosts();
  return res.status(200).json(response);
};

const updatePost = async (req, res) => {
  const response = await handleUpdatePost(req.body);
  return res.status(200).json(response);
};

const createPost = async (req, res) => {
  const response = await hanldeCreatePost(req.body);
  return res.status(200).json(response);
};

const searchPosts = async (req, res) => {
  const response = await handleSearchPosts(req.query.q);
  return res.status(200).json(response);
};

const getAllCourses = async (req, res) => {
  const response = await handleGetAllCourses();
  return res.status(200).json(response);
};

const updateCourse = async (req, res) => {
  const response = await handleUpdateCourse(req.body);
  return res.status(200).json(response);
};

const createCourse = async (req, res) => {
  const response = await hanldeCreateCourse(req.body);
  return res.status(200).json(response);
};

const getCourseToCart = async (req, res) => {
  const response = await handleGetCourseToCart(req.body);
  return res.status(200).json(response);
};

const createOrder = async (req, res) => {
  const response = await handleCreateOrder(req);
  return res.status(200).json(response);
};

const getAllCart = async (req, res) => {
  const response = await handleGetAllCart(req.user.userId);
  return res.status(200).json(response);
};

const deleteProduct = async (req, res) => {
  const response = await handleDeleteProduct(req);
  return res.status(200).json(response);
};

const createPaymentLink = async (req, res) => {
  const response = await hanldeCreatePaymentLink(req.body, req.user.userId);
  return res.status(200).json(response);
  // return res.redirect(303, response.checkoutUrl);
};

const getPaymentInfo = async (req, res) => {
  const response = await handleGetPaymentInfo(req.query.orderId);
  return res.status(200).json(response);
  // return res.redirect(303, response.checkoutUrl);
};

const cancelOrder = async (req, res) => {
  const response = await handleCancelOrder(req.body.data);
  return res.status(200).json(response);
};

const webhookPayOS = async (req, res) => {
  const response = await handleWebhookPayOS(req.body);
  return res.status(200).json(response);
};

const getAllOrders = async (req, res) => {
  const response = await handleGetAllOrders();
  return res.status(200).json(response);
};

const getOrderForUser = async (req, res) => {
  const response = await handleGetOrderForUser(req.user.userId);
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
  getAllCategory,
  getAllPosts,
  updatePost,
  createPost,
  searchPosts,
  getAllCourses,
  updateCourse,
  createCourse,
  getCourseToCart,
  createOrder,
  getAllCart,
  deleteProduct,
  createPaymentLink,
  getPaymentInfo,
  cancelOrder,
  webhookPayOS,
  getAllOrders,
  getOrderForUser,
};
