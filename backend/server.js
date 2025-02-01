import express from "express";
import dotenv from "dotenv";
import path from "path";
import router from "./src/routes/web.js";
const __dirname = path.resolve();
const env = dotenv.config();
const app = express();
app.use("/uploads", express.static(path.join(__dirname, "src", "uploads")));

app.use(router);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
