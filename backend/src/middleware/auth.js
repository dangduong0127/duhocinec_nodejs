const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (req, res, next) => {
  if (req.path.startsWith("/api-docs") || req.path.startsWith("/swagger-ui")) {
    return next();
  }

  const allowed_list = [
    "/api/v1/login",
    "/api/v1/register",
    "/api/v1/getallmenus",
    "/api/upload",
    "/api/v1/getAllCountries",
    "/api/uploadimage",
    "/api/v1/getCountryDetails",
    "/api/v1/getAllCategory",
    "/api/v1/getAllPosts",
    "/api/v1/searchPosts",
    "/api/v2/order/getPaymentInfo",
    "/api/v2/payment/webhook",
    "/api/v2/pagination",
    "/api/v1/keep-alive",
  ];

  if (allowed_list.some((route) => req.path.startsWith(route))) {
    return next();
  }

  // ---- VERIFY TOKEN ----
  let token = req.cookies?.access_token;

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      userId: decoded.userId,
      roleId: decoded.roleId,
    };

    // Admin only
    const adminRoutes = [
      "/api/v1/updateUsers",
      "/api/v1/deleteUser",
      "/api/v1/updatePost",
      "/api/v1/updateCourse",
    ];

    if (
      adminRoutes.some((route) => req.path.startsWith(route)) &&
      req.user.roleId !== 1
    ) {
      return res.status(403).json({
        message: "You don't have permission to access this resource",
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Your token is expired or invalid",
    });
  }
};

module.exports = authorization;
