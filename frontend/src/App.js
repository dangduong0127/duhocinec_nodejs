// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.scss";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/khoa-hoc" element={<Courses />} />
        <Route path="/truong" />
        <Route path="/quoc-gia" />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
