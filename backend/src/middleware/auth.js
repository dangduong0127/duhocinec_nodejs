const jwt = require("jsonwebtoken");
require("dotenv").config();
const authorization = (req, res, next) => {
  const allowed_list = [
    "/",
    "/api/v1/login",
    "/api/v1/register",
    "/api/v1/getallmenus",
    "/api/upload",
    "/api/v1/getAllCountries",
  ];

  if (allowed_list.some((item) => req.originalUrl === item)) {
    return next();
  }

  let token = req.headers.authorization.split(" ")[1];
  if (req.originalUrl === "/api/v1/getAccountInfo") {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = {
        userId: decoded.userId,
        roleId: decoded.roleId,
      };
      return next();
    } catch (err) {
      return res.status(401).json({
        message: "Your token is expired or Invalid",
      });
    }
  }

  if (req?.headers?.authorization?.split(" ")?.[1]) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);
      req.user = {
        userId: decoded.userId,
        roleId: decoded.roleId,
      };

      if (req.user.roleId !== 1) {
        return res.status(403).json({
          message: "You don't have permission to access this resource",
        });
      }

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
