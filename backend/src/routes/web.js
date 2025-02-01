import express from "express";
import { getHomePage } from "../controllers/homeController.js";
const app = express();
const router = express.Router();
router.get("/", getHomePage);
router.get("/test", (req, res) => {
  res.send("This is a test route");
});

export default router;
