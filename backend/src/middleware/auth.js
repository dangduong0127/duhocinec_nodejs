const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (req, res, next) => {
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
  ];

  if (allowed_list.some((route) => req.path.startsWith(route))) {
    return next();
  }

  // Đến đây nghĩa là route cần xác thực, tiếp tục kiểm tra token
  let token = req.cookies ? req.cookies.access_token : undefined;

  if (
    req.url === "/api/v1/getAccountInfo" ||
    req.url === "/api/v1/logout" ||
    req.url === "/api/v1/getCourseToCart" ||
    req.url === "/api/v1/createOrder" ||
    req.url === "/api/v1/getAllCart" ||
    req.url === "/api/v2/order/create" ||
    req.url === "/api/v1/deleteProduct" ||
    req.url === "/api/v2/order/cancelOrder" ||
    req.url === "/api/v1/getOrderForUser"
  ) {
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
};

module.exports = authorization;
