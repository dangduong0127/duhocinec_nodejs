import axios from "./axios.customize";
const createUserApi = (data) => {
  const URL_API = "/api/v1/register";
  return axios.post(URL_API, data);
};

const checkLoginApi = (data) => {
  const URL_API = "/api/v1/login";
  return axios.post(URL_API, data);
};

const getAllUsers = () => {
  const URL_API = "/api/v1/getallusers";
  return axios.get(URL_API);
};
const logoutApi = () => {
  const URL_API = "/api/v1/logout";
  return axios.post(URL_API);
};

const getUserProfile = () => {
  const URL_API = "/api/v1/getAccountInfo";
  return axios.get(URL_API);
};

const updatedUser = (data) => {
  const URL_API = "/api/v1/updateUsers";
  return axios.put(URL_API, data);
};

const deleteUser = (id) => {
  const URL_API = "/api/v1/deleteUser";
  return axios.delete(URL_API, { data: { id } });
};

const getAllCountries = () => {
  const URL_API = "/api/v1/getAllCountries";
  return axios.get(URL_API);
};

const uploadImage = (data) => {
  const URL_API = "/api/uploadimage";
  return axios.post(URL_API, data);
};

const updateCountry = (data) => {
  const URL_API = "/api/v1/updateCountry";
  return axios.put(URL_API, data);
};

const getCountryDetails = (data) => {
  const URL_API = "/api/v1/getCountryDetails";
  return axios.get(URL_API, { params: { id: data } });
};

const getAllCategory = () => {
  const URL_API = "/api/v1/getAllCategory";
  return axios.get(URL_API);
};

const getAllPosts = () => {
  const URL_API = "/api/v1/getAllPosts";
  return axios.get(URL_API);
};

const updatePost = (data) => {
  const URL_API = "/api/v1/updatePost";
  return axios.put(URL_API, data);
};

const createPost = (data) => {
  const URL_API = "/api/v1/createPost";
  return axios.post(URL_API, data);
};

const searchPosts = (data) => {
  const URL_API = "/api/v1/searchPosts?q=" + data;
  return axios.get(URL_API, data);
};

const getAllCourses = () => {
  const URL_API = "/api/v1/getAllCourses";
  return axios.get(URL_API);
};

const updateCourse = (data) => {
  const URL_API = "/api/v1/updateCourse";
  return axios.put(URL_API, data);
};

const createCourse = (data) => {
  const URL_API = "/api/v1/createCourse";
  return axios.post(URL_API, data);
};

const getCourseToCart = (data) => {
  const URL_API = "/api/v1/getCourseToCart";
  return axios.post(URL_API, data);
};

const createOrder = (data) => {
  const URL_API = "/api/v1/createOrder";
  return axios.post(URL_API, data);
};

const getAllCart = () => {
  const URL_API = "/api/v1/getAllCart";
  return axios.get(URL_API);
};

const deleteProduct = (data) => {
  const URL_API = "/api/v1/deleteProduct";
  return axios.delete(URL_API, { data });
};

const createPaymentLink = (items, orderCode) => {
  const URL_API = "/api/v2/order/create";
  return axios.post(URL_API, { data: items, orderCode: orderCode });
};

const getPaymentInfo = (id) => {
  const URL_API = "/api/v2/order/getPaymentInfo";
  return axios.get(URL_API, { params: { orderId: id } });
};

const cancelOrder = (id, reason) => {
  const URL_API = "/api/v2/order/cancelOrder";
  return axios.post(URL_API, { data: { orderID: id, reasonCancel: reason } });
};

const webhookPayOS = (data) => {
  const URL_API = "/api/v2/payment/webhook";
  return axios.post(URL_API, data);
};

const getAllOrders = () => {
  const URL_API = "/api/v1/getAllOrders";
  return axios.get(URL_API);
};

const getOrderForUser = () => {
  const URL_API = "/api/v1/getOrderForUser";
  return axios.get(URL_API);
};

export {
  createUserApi,
  checkLoginApi,
  getAllUsers,
  logoutApi,
  getUserProfile,
  updatedUser,
  deleteUser,
  getAllCountries,
  uploadImage,
  updateCountry,
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
  webhookPayOS,
  getAllOrders,
  getOrderForUser,
  cancelOrder,
};
