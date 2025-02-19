// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.scss";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/404page";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import { getUserProfile } from "./utils/api";
import { useContext, useEffect } from "react";
import { AuthContext } from "./hooks/Context/auth.context";
import { Spin } from "antd";
import UserSettings from "./pages/UserSettings";
function App() {
  const { auth, setAuth, appLoading, setAppLoading } = useContext(AuthContext);

  useEffect(() => {
    const getUserData = async () => {
      try {
        setAppLoading(true);
        const res = await getUserProfile();
        const result = res?.data || {};
        if (res) {
          setAuth((prev) => ({
            ...prev,
            isAuthenticated: !!result.email,
            user: prev.user.email
              ? prev.user
              : {
                  email: result.email || "",
                  name:
                    result.firstName && result.lastName
                      ? `${result.firstName} ${result.lastName}`
                      : "User",
                  avatar: result.image || "default-avatar.png",
                },
          }));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setAppLoading(false);
      }
    };

    if (auth.isAuthenticated && !auth.user.email) {
      getUserData();
    }
  }, [auth.isAuthenticated]);

  console.log(auth);
  return (
    <>
      {appLoading === false ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/khoa-hoc"
              element={
                <Layout>
                  <Courses />
                </Layout>
              }
            />
            <Route
              path="/truong"
              element={<Layout>Đây là trang trường</Layout>}
            />
            <Route
              path="/quoc-gia"
              element={<Layout>Đây là trang quốc gia</Layout>}
            />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/register"
              element={
                <Layout>
                  <Register />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            <Route
              path="/account"
              element={
                <Layout>
                  <UserSettings />
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <ErrorPage />
                </Layout>
              }
            />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
