import React, { useState } from "react";
import "./styles.scss";
import {
  IconBook,
  IconCertificate,
  IconCollege,
  IconContact,
  IconDollar,
  IconFlag,
  IconNews,
  IconPig,
  IconSearch,
  IconVisa,
} from "../Icons";
import { Link } from "react-router-dom";
const Sidebar = ({ data }) => {
  const [selectedNav, setSelectedNavItem] = useState(0);
  const [isActive, setActive] = useState(false);
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dataSource = [
    {
      link: "#newPolicy",
      title: "Chính sách mới",
      icon: <IconBook size="20" color="#000" />,
    },
    {
      link: "#cost-est-study-abroad",
      title: "Dự toán chi phí du học",
      icon: <IconDollar size="20" color="#000" />,
    },
    {
      link: "#country-details-container",
      title: "Bạn nên chọn trường nào",
      icon: <IconSearch size="20" color="#000" />,
    },
    {
      link: "#country-scholarship-container",
      title: "Hỗ trợ tài chính",
      icon: <IconPig size="20" color="#000" />,
    },
    {
      link: "#required-country",
      title: "Yêu cầu đầu vào",
      icon: <IconCollege size="20" color="#000" />,
    },
    {
      link: "#study-aboard-experience",
      title: "Kinh nghiệm du học",
      icon: <IconContact size="20" color="#000" />,
    },
    {
      link: "#faculties-strength",
      title: "Các ngành đào tạo thế mạnh",
      icon: <IconCertificate size="20" color="#000" />,
    },
    {
      link: "#visa",
      title: "Visa du học",
      icon: <IconVisa size="20" color="#000" />,
    },
    {
      link: "#reviews",
      title: "Review Du học Anh",
      icon: <IconFlag size="20" color="#000" />,
    },
    {
      link: "#news",
      title: "Tin tức",
      icon: <IconNews size="20" color="#000" />,
    },
  ];

  return (
    <div className="sidebar-wrapper">
      <div className="navigation">
        <div className="nav-container">
          <div className="vertical-nav">
            {dataSource.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.link}
                  className={
                    selectedNav === index
                      ? "nav-item nav-item-active"
                      : "nav-item"
                  }
                  onClick={() => {
                    setSelectedNavItem(index);
                    scrollToSection(item.link);
                  }}
                >
                  {item.icon}
                  <div className="label">{item.title}</div>
                </Link>
              );
            })}
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
