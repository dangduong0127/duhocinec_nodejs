import React, { useState } from "react";
import "./styles.scss";
import { IconBook } from "../Icons";
import { Link } from "react-router-dom";
const Sidebar = ({ data }) => {
  const [isActive, setActive] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sidebar-wrapper">
      <div className="navigation">
        <div className="nav-container">
          <div className="vertical-nav">
            <Link
              className={
                isActive === true ? "nav-item nav-item-active" : "nav-item"
              }
              onClick={() => {
                setActive(true);
                scrollToSection("newPolicy");
              }}
            >
              <IconBook size="20" color="#000" />
              <div className="label">Chính sách mới</div>
            </Link>

            <Link to="#newPolicy" className="nav-item">
              <IconBook size="20" color="#000" />
              <div className="label">Chính sách mới</div>
            </Link>

            <Link to="#newPolicy" className="nav-item">
              <IconBook size="20" color="#000" />
              <div className="label">Chính sách mới</div>
            </Link>

            <Link to="#newPolicy" className="nav-item">
              <IconBook size="20" color="#000" />
              <div className="label">Chính sách mới</div>
            </Link>

            <Link to="#newPolicy" className="nav-item">
              <IconBook size="20" color="#000" />
              <div className="label">Chính sách mới</div>
            </Link>

            <Link to="#newPolicy" className="nav-item">
              <IconBook size="20" color="#000" />
              <div className="label">Chính sách mới</div>
            </Link>

            <Link to="#newPolicy" className="nav-item">
              <IconBook size="20" color="#000" />
              <div className="label">Chính sách mới</div>
            </Link>

            <Link to="#newPolicy" className="nav-item">
              <IconBook size="20" color="#000" />
              <div className="label">Chính sách mới</div>
            </Link>
          </div>

          <div className="button-wrapper">
            <button className="btn-apply-resume-red">
              Tư vấn cùng chuyên viên INEC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
