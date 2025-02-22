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
  handleUploadFile,
  getAllCountries,
} = require("../controllers/homeController.js");
const authorization = require("../middleware/auth.js");
const router = express.Router();

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

router.post("/api/upload", handleUploadFile);

module.exports = router;
