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

export {
  createUserApi,
  checkLoginApi,
  getAllUsers,
  logoutApi,
  getUserProfile,
  updatedUser,
  deleteUser,
};
