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

export { createUserApi, checkLoginApi, getAllUsers };
