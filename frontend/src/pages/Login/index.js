import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { checkLoginApi } from "../../utils/api";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/Context/auth.context";
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please enter a valid email address and password");
      return;
    }

    const fetchApi = async (data) => {
      try {
        const promise = await checkLoginApi(data);
        const result = promise.data;
        if (result.success) {
          localStorage.setItem("access_token", result.accessToken);
          localStorage.setItem("userId", result.user.userId);

          setAuth({
            isAuthenticated: true,
            user: {
              email: result.user.email,
              fullName: result.user.fullName,
              avatar: result.user.avatarUrl,
              userId: result.user.userId,
            },
          });
          notification.success({
            message: "Login Successful",
            description: result.message,
          });
          navigate("/");
        } else {
          notification.error({
            message: "Login Failed",
            description: result.message,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi(formData);
  };
  return (
    <>
      <div className="form-wrapper">
        <div className="form-container">
          <header>Login Form</header>

          <div className="form-outer">
            <form action="#" onSubmit={(e) => handleSubmitForm(e)}>
              <div className="page">
                <div className="title">Login Details:</div>
                <div className="field">
                  <div className="label">Username</div>
                  <input
                    type="text"
                    value={formData.email}
                    name="email"
                    onChange={handleOnchange}
                  />
                </div>
                <div className="field">
                  <div className="label">Password</div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleOnchange}
                  />
                </div>

                <div className="field btns">
                  <button className="submit">Submit</button>
                </div>
                <Link to="../register">
                  You don't have any account?
                  <br /> click here to register!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
