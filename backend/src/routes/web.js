const express = require("express");
const {
  getHomePage,
  getMenus,
  getAllUsersData,
  createUser,
  getLogin,
} = require("../controllers/homeController.js");
const authorization = require("../middleware/auth.js");
const app = express();
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

module.exports = router;
