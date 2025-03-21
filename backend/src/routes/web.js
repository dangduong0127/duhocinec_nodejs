const express = require("express");
const {
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
  handleUploadImage,
  getAllCountries,
  getCountryDetails,
  getAllCategory,
  getAllPosts,
  updatePost,
  createPost,
  searchPosts,
  getAllCourses,
  updateCourse,
  createCourse,
} = require("../controllers/homeController.js");
const authorization = require("../middleware/auth.js");
const router = express.Router();
const formidable = require("formidable");
const path = require("path");

// Apply middleware for all routers getting
router.all("*", authorization);

router.get("/", getHomePage);
router.get("/test", (req, res) => {
  res.send("This is a test route");
});
//api
router.get("/api/v1/getallmenus", getMenus);
router.get("/api/v1/getallusers", getAllUsersData);
router.post("/api/v1/register", createUser);
router.post("/api/v1/login", getLogin);
router.post("/api/v1/logout", logout);
router.get("/api/v1/getAccountInfo", getAccountInfo);
router.put("/api/v1/updateUsers", updateUsers);
router.delete("/api/v1/deleteUser", deleteUser);
router.get("/api/v1/getAllCountries", getAllCountries);
router.get("/api/v1/getAllCategory", getAllCategory);
router.get("/api/v1/getAllPosts", getAllPosts);

router.post("/api/v1/createPost", createPost);
router.put("/api/v1/updatePost", updatePost);
router.put("/api/v1/updateCountry", UpdateCountry);
router.get("/api/v1/getCountryDetails", getCountryDetails);
router.post("/api/uploadimage", handleUploadImage);
router.get("/api/v1/searchPosts", searchPosts);
router.get("/api/v1/getAllCourses", getAllCourses);
router.put("/api/v1/updateCourse", updateCourse);
router.post("/api/v1/createCourse", createCourse);

module.exports = router;
