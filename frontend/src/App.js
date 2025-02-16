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
function App() {
  return (
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
        <Route path="/truong" element={<Layout>Đây là trang trường</Layout>} />
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
          path="*"
          element={
            <Layout>
              <ErrorPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
