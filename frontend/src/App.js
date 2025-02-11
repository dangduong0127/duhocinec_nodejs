// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.scss";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/khoa-hoc" element={<Courses />} />
        <Route path="/truong" />
      </Routes>
    </Router>
  );
}

export default App;
