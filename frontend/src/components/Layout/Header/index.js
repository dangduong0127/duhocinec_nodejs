import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios.customize";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
const Header = () => {
  let title = "DU HỌC INEC - Du học INEC – Chắp cánh tương lai";
  const [data, setData] = useState([]);
  const [isHovered, setIsHoverd] = useState(null);
  const serverUrl = process.env.REACT_APP_SERVER_BASE_URL;
  const homeUrl = process.env.REACT_APP_SERVER_HOME;
  const items = [
    {
      label: "Account",
      key: "dashboard",
      icon: <UserOutlined style={{ fontSize: "18px" }} />,
      children: [
        { label: <Link to="/login">Login</Link>, key: "login" },
        {
          label: <Link to="/register">Register</Link>,
          key: "register",
        },
      ],
    },
  ];

  const getImageUrl = (path) => {
    return `${serverUrl}uploads/${path}`;
  };

  useEffect(() => {
    axios
      .get(`/api/v1/getallmenus`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(data);
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-container border-header-top">
          <div className="header-top-inner container ">
            <div className="header-top-left">
              <ul>
                <li>
                  <span>Bạn cần hỗ trợ tư vấn?</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#009925" }}
                  />
                  <a className="phoneContact" href="tel:1900636990">
                    1900 636 990
                  </a>
                </li>
                <li>
                  <a href="#dangkytuvan" className="signup-advise">
                    Đăng ký tư vấn
                  </a>
                </li>
              </ul>
            </div>

            <div className="header-top-right">
              <div className="homeSearchWrapper">
                <input type="text" placeholder="Search..." />
                <button className="btn-search">Tìm kiếm</button>
              </div>
              <Socials />
            </div>
          </div>
        </div>

        <div className="header-container">
          <div className="header-main">
            <div className="header-inner">
              <div className="logo">
                <Link to={homeUrl} title={title}>
                  <img
                    src={getImageUrl("sticky-logo-inec.png")}
                    alt="logo branch"
                  />
                </Link>
              </div>

              <div className="header-nav">
                <ul className="list-menu">
                  {data.map((item) => {
                    return (
                      <li
                        key={item.id}
                        onMouseEnter={() => setIsHoverd(item.id)}
                        onMouseLeave={() => setIsHoverd(null)}
                      >
                        <Link to={item.path} className="nav-item">
                          <span>{item.name}</span>
                          {item.SubMenus.length !== 0 ? (
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              fontSize={"12px"}
                            />
                          ) : (
                            ""
                          )}
                        </Link>
                        {isHovered === item.id && item.SubMenus.length > 0 ? (
                          <div className="subMenus">
                            <ul>
                              {item.SubMenus.map((item) => {
                                return (
                                  <li key={item.id}>
                                    <Link to={item.path}>{item.name}</Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="actions">
                <Link to="/url" className="findCourse btn-blue-border">
                  Tìm kiếm khoá học
                </Link>
                <Link to="/admin" className="account">
                  <Menu
                    mode="horizontal"
                    selectedKeys="none"
                    items={items}
                    style={{ fontSize: "18px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <table
          cellPadding="5"
          cellSpacing="0"
          style={{
            fontSize: "1px",
            lineHeight: "1px",
            width: "100%",
            marginTop: "-1px",
          }}
        >
          <thead>
            <tr>
              <td
                style={{ borderBottom: "5px solid #003cdc", width: "25%" }}
              ></td>
              <td
                style={{ borderBottom: "5px solid #009925", width: "25%" }}
              ></td>
              <td
                style={{ borderBottom: "5px solid #ff961e", width: "25%" }}
              ></td>
              <td
                style={{ borderBottom: "5px solid #ff1e23", width: "25%" }}
              ></td>
            </tr>
          </thead>
        </table>
      </div>
    </header>
  );
};

export default Header;
