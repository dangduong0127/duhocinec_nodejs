const express = require("express");
const { getHomePage, getMenus } = require("../controllers/homeController.js");
const app = express();
const router = express.Router();
router.get("/", getHomePage);
router.get("/test", (req, res) => {
  res.send("This is a test route");
});
//api
router.get("/api/v1/getallmenus", getMenus);

module.exports = router;
