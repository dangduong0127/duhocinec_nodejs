// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Global.scss";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/404page";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import { getUserProfile, getAllCategory } from "./utils/api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./hooks/Context/auth.context";
import { Spin } from "antd";
import UserSettings from "./pages/UserSettings";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/Countries/CountryDetail";
import Posts from "./pages/Posts";
import Loading from "./components/Loading";
import Category from "./pages/Category";
import SearchResults from "./pages/SearchResult";
function App() {
  const { auth, setAuth, appLoading, setAppLoading } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const result = await getAllCategory();
        setCategories(result.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
  }, []);

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
        setLoading(false);
      }
    };

    if (auth.isAuthenticated && !auth.user.email) {
      getUserData();
    }
  }, [auth.isAuthenticated]);

  if (loading) {
    return <Loading />;
  }

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
              path="/quoc-gia"
              element={
                <Layout>
                  <Countries />
                </Layout>
              }
            />
            <Route
              path="/quoc-gia/:slug"
              element={
                <Layout>
                  <CountryDetail />
                </Layout>
              }
            />

            {categories.length > 0 &&
              categories.map((item) => {
                if (item.postsCategory.length > 0) {
                  return (
                    <>
                      <Route
                        key={`${item.id}-category`}
                        path={item.path}
                        element={
                          <Layout>
                            <Category data={item} />
                          </Layout>
                        }
                      />
                      {item.postsCategory.map((post) => {
                        return (
                          <Route
                            key={`${item.id}-${post.id}`}
                            path={`${item.path}${post.slug}`}
                            element={
                              <Layout>
                                <Posts category={item} postDetails={post} />
                              </Layout>
                            }
                          />
                        );
                      })}
                    </>
                  );
                } else {
                  return (
                    <Route
                      key={`category-${item.id}`}
                      path={item.path}
                      element={
                        <Layout>
                          <Category data={item} />
                        </Layout>
                      }
                    />
                  );
                }
              })}

            <Route path="/gioi-thieu-ve-inec" element={<Layout></Layout>} />

            <Route
              path="/search-results"
              element={
                <Layout>
                  <SearchResults />
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
