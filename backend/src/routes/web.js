const express = require("express");
const {
  getHomePage,
  getMenus,
  getAllUsersData,
  createUser,
  getLogin,
  logout,
  getAccountInfo,
  updateUsers,
  deleteUser,
  UpdateCountry,
  handleUploadImage,
  getAllCountries,
  getCountryDetails,
  getAllCategory,
  getAllPosts,
  updatePost,
  createPost,
  searchPosts,
  getAllCourses,
  updateCourse,
  createCourse,
  getCourseToCart,
  createOrder,
  getAllCart,
  deleteProduct,
  createPaymentLink,
  getPaymentInfo,
  cancelOrder,
  webhookPayOS,
  getAllOrders,
  getOrderForUser,
  paginationController,
} = require("../controllers/homeController.js");
const authorization = require("../middleware/auth.js");
const router = express.Router();

// router.get("/", getHomePage);

router.all("*", authorization);

router.get("/test", (req, res) => {
  res.send("This is a test route");
});
//api
router.get("/api/v1/getallmenus", getMenus);

/**
 * @swagger
 * /api/v1/getallusers:
 *   get:
 *     summary: Lấy danh sách người dùng
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get("/api/v1/getallusers", getAllUsersData);

router.post("/api/v1/register", createUser);
router.post("/api/v1/login", getLogin);
router.post("/api/v1/logout", logout);
/**
 * @swagger
 * /api/v1/getAccountInfo:
 *  get:
 *      summary: Lấy thông tin tài khoản
 *      tags: [User]
 */
router.get("/api/v1/getAccountInfo", getAccountInfo);
router.put("/api/v1/updateUsers", updateUsers);
router.delete("/api/v1/deleteUser", deleteUser);
/**
 * @swagger
 * /api/v1/getAllCountries:
 *  get:
 *      summary: Lấy thông tin quốc gia
 *      tags: [Default]
 */
router.get("/api/v1/getAllCountries", getAllCountries);
/**
 * @swagger
 * /api/v1/getAllCategory:
 *  get:
 *      summary: Lấy thông tin danh mục
 *      tags: [Default]
 */
router.get("/api/v1/getAllCategory", getAllCategory);
/**
 * @swagger
 * /api/v1/getAllPosts:
 *  get:
 *      summary: Lấy thông tin bài viết
 *      tags: [Default]
 */
router.get("/api/v1/getAllPosts", getAllPosts);

router.post("/api/v1/createPost", createPost);
router.put("/api/v1/updatePost", updatePost);
router.put("/api/v1/updateCountry", UpdateCountry);
router.get("/api/v1/getCountryDetails", getCountryDetails);
router.post("/api/uploadimage", handleUploadImage);
router.get("/api/v1/searchPosts", searchPosts);
router.get("/api/v1/getAllCourses", getAllCourses);
router.put("/api/v1/updateCourse", updateCourse);
router.post("/api/v1/createCourse", createCourse);
router.post("/api/v1/getCourseToCart", getCourseToCart);
router.post("/api/v1/createOrder", createOrder);
router.get("/api/v1/getAllCart", getAllCart);
router.delete("/api/v1/deleteProduct", deleteProduct);
router.get("/api/v1/getAllOrders", getAllOrders);
router.get("/api/v1/getOrderForUser", getOrderForUser);

// payment api
router.post("/api/v2/order/create", createPaymentLink);
router.get("/api/v2/order/getPaymentInfo", getPaymentInfo);
router.post("/api/v2/order/cancelOrder", cancelOrder);
router.post("/api/v2/payment/webhook", webhookPayOS);

//pagination
router.get("/api/v2/pagination", paginationController);

module.exports = router;
