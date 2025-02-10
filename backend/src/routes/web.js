const express = require("express");
const { getHomePage } = require("../controllers/homeController.js");
const app = express();
const router = express.Router();
router.get("/", getHomePage);
router.get("/test", (req, res) => {
  res.send("This is a test route");
});

module.exports = router;
