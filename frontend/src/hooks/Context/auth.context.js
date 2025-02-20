import { createContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const AuthenWrapper = (props) => {
  const storedAuth = JSON.parse(sessionStorage.getItem("auth")) || {
    isAuthenticated: false,
    user: {
      email: "",
      name: "",
      roleId: "",
      avatar: "",
    },
  };
  const [auth, setAuth] = useState(storedAuth);
  const [appLoading, setAppLoading] = useState(true);

  // Cập nhật sessionStorage mỗi khi auth thay đổi
  useEffect(() => {
    sessionStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  // // Kiểm tra xem có token trong localStorage không để duy trì đăng nhập
  // useEffect(() => {
  //   const storedAuth = localStorage.getItem("authData");
  //   if (storedAuth) {
  //     setAuth(JSON.parse(storedAuth));
  //   }
  //   setAppLoading(false);
  // }, []);

  // // Lưu auth vào localStorage khi có thay đổi
  // useEffect(() => {
  //   if (auth.isAuthenticated) {
  //     localStorage.setItem("authData", JSON.stringify(auth));
  //   } else {
  //     localStorage.removeItem("authData");
  //   }
  // }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, appLoading, setAppLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthenWrapper };
