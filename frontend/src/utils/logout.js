import { logoutApi } from "./api";

const logout = async (setAuth, navigate) => {
  await logoutApi();

  setAuth({
    isAuthenticated: false,
    user: {
      email: "",
      name: "",
      roleId: "",
      avatar: "",
    },
  });
  navigate("/login");
};

export default logout;
