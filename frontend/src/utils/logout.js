import { logoutApi } from "./api";

const logout = async (setAuth, navigate) => {
  await logoutApi();
  localStorage.removeItem("access_token");
  localStorage.removeItem("authData");
  setAuth({
    isAuthenticated: false,
    user: {
      email: "",
      name: "",
      avatar: "",
    },
  });
  navigate("/login");
};

export default logout;
