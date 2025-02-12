const express = require("express");
const {
  getHomePage,
  getMenus,
  getAllUsersData,
  createUser,
} = require("../controllers/homeController.js");
const app = express();
const router = express.Router();
router.get("/", getHomePage);
router.get("/test", (req, res) => {
  res.send("This is a test route");
});
//api
router.get("/api/v1/getallmenus", getMenus);
router.get("/api/v1/getallusers", getAllUsersData);
router.post("/api/v1/register", createUser);

module.exports = router;
