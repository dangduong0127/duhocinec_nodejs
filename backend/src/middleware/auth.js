const jwt = require("jsonwebtoken");
require("dotenv").config();
const authorization = (req, res, next) => {
  const allowed_list = [
    "/",
    "/api/v1/login",
    "/api/v1/register",
    "/api/v1/getallmenus",
  ];

  if (allowed_list.some((item) => req.originalUrl === item)) {
    return next();
  }

  if (req?.headers?.authorization?.split(" ")?.[1]) {
    let token = req.headers.authorization.split(" ")[1];

    try {
      jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (err) {
      return res.status(401).json({
        message: "Your token is expired or Invalid",
      });
    }
  } else {
    return res.status(401).json({ message: "Invalid authorization" });
  }
};

module.exports = authorization;
