import React, { useState, useEffect, useContext } from "react";
import axios from "../../../utils/axios.customize";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {
  DownOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  AppstoreOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Socials from "./Socials";
import { Menu, Avatar, Select, Button } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import { AuthContext } from "../../../hooks/Context/auth.context";
import { useTranslation } from "react-i18next";
import logout from "../../../utils/logout";
import SearchPosts from "../../SearchPost";
const { SubMenu } = Menu;
const Header = () => {
  let title = "DU HỌC INEC - Du học INEC – Chắp cánh tương lai";
  const [data, setData] = useState([]);
  const [isHovered, setIsHoverd] = useState(null);
  const serverUrl = process.env.REACT_APP_SERVER_BASE_URL;
  const { Option } = Select;
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const items = [
    {
      label:
        auth.isAuthenticated === true ? (
          <Link to="/account">
            <Avatar src={auth.user.avatar} size={40} />
          </Link>
        ) : (
          <span>Account</span>
        ),
      key: "dashboard",
      children: auth.isAuthenticated
        ? [
            {
              label: (
                <Link to="/orders">
                  <ShoppingOutlined />
                  <span>Đơn hàng</span>
                </Link>
              ),
            },
            {
              label: (
                <Link to="/cart">
                  <ShoppingCartOutlined />
                  <span>Giỏ hàng</span>
                </Link>
              ),
            },
            auth.user.roleId === 1
              ? {
                  label: (
                    <Link to="/admin">
                      <AppstoreOutlined />
                      <span>Dashboard</span>
                    </Link>
                  ),
                  key: "admin-dashboard",
                }
              : {
                  label: (
                    <Link to="/account">
                      <EditOutlined />
                      <span>Account Settings</span>
                    </Link>
                  ),
                  key: "account-settings",
                },
            {
              label: (
                <>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    danger
                    onClick={() => logout(setAuth, navigate)}
                  >
                    Đăng xuất
                    <LogoutOutlined />
                  </Button>
                </>
              ),
              key: "logout",
            },
          ]
        : [
            { label: <Link to="/login">Login</Link>, key: "login" },
            { label: <Link to="/register">Register</Link>, key: "register" },
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

  // translate
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  // console.log(auth);
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
              <SearchPosts />
              <Socials />
            </div>
          </div>
        </div>

        <div className="header-container">
          <div className="header-main">
            <div className="header-inner">
              <div className="logo">
                <Link to="/" title={title}>
                  <img
                    src={getImageUrl("sticky-logo-inec.png")}
                    alt="logo branch"
                  />
                </Link>
              </div>

              <div className="header-nav">
                <Menu mode="horizontal">
                  {data && data.length > 0 ? (
                    data.map((item) => (
                      <SubMenu
                        key={item.path}
                        title={
                          <>
                            <Link to={item.path}>
                              {t(`Categories.${item.name}`, item.name)}
                            </Link>
                            {item.SubMenus.length > 0 && (
                              <DownOutlined
                                style={{ fontSize: "12px", paddingLeft: "5px" }}
                              />
                            )}
                          </>
                        }
                        onTitleMouseEnter={() => setIsHoverd(item.id)}
                        // onTitleMouseLeave={() => setIsHoverd(null)}
                      >
                        {isHovered === item.id && item.SubMenus.length > 0 && (
                          <Menu.ItemGroup>
                            {item.SubMenus.map((subItem) => (
                              <Menu.Item key={subItem.id}>
                                <Link to={subItem.path}>{subItem.name}</Link>
                              </Menu.Item>
                            ))}
                          </Menu.ItemGroup>
                        )}
                      </SubMenu>
                    ))
                  ) : (
                    <></>
                  )}
                </Menu>
              </div>

              <div className="actions">
                {/* <Link to="/url" className="findCourse btn-blue-border">
                  Tìm kiếm khoá học
                </Link> */}

                <Menu
                  mode="horizontal"
                  selectedKeys="none"
                  items={items}
                  style={{ fontSize: "18px", zIndex: "9999999999999999999999" }}
                />

                <div className="multi-lang">
                  <Select
                    defaultValue={i18n.language} // Set ngôn ngữ hiện tại
                    style={{ width: 150 }} // Tùy chỉnh độ rộng
                    onChange={changeLanguage}
                  >
                    <Option value="vi">🇻🇳 Tiếng Việt</Option>
                    <Option value="en">🇺🇸 English</Option>
                  </Select>
                </div>
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
