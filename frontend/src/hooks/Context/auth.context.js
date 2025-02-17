import { createContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    email: "",
    name: "",
    avatar: "",
  },
});

const AuthenWrapper = (props) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {
      email: "",
      name: "",
      avatar: "",
    },
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthenWrapper };
