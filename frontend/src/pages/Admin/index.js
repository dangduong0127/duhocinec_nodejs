import React, { useContext, useState } from "react";
import User from "./Users";
import {
  UploadOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  PushpinOutlined,
  BookOutlined,
  FileOutlined,
  GlobalOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/Context/auth.context";
import logout from "../../utils/logout.js";
import Countries from "./Countries";
import LayoutPage from "../../components/Layout/index.js";
import Posts from "./Posts/index.js";
import Categories from "./Categories/index.js";
import Courses from "./Courses/index.js";
import Orders from "./Orders/index.js";
const { Header, Content, Footer, Sider } = Layout;

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
const Admin = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const [tab, setTab] = useState("1");
  const handleSlectedKeys = (e) => {
    setTab(e.key);
  };

  const renderComponent = () => {
    switch (tab) {
      case "1":
        return <User />;
      case "2":
        return <Categories />;
      case "3":
        return <Posts />;
      case "4":
        return <Countries />;
      case "6":
        return <Courses />;
      case "8":
        return <Orders />;
      default:
        return <div>Default</div>;
    }
  };

  return auth.user.roleId === 1 ? (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsible
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical">
          <Link to="/">
            <h1 style={{ textAlign: "center", color: "#fff" }}>Dashboard</h1>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onSelect={handleSlectedKeys}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Users",
            },
            {
              key: "2",
              icon: <PushpinOutlined />,
              label: "Categories",
            },
            {
              key: "3",
              icon: <FileOutlined />,
              label: "Posts",
            },
            {
              key: "4",
              icon: <GlobalOutlined />,
              label: "Countries",
            },
            {
              key: "5",
              icon: <HomeOutlined />,
              label: "Schools",
            },
            {
              key: "6",
              icon: <BookOutlined />,
              label: "Courses",
            },
            {
              key: "7",
              icon: <UploadOutlined />,
              label: "Scholarships",
            },
            {
              key: "8",
              icon: <ShoppingCartOutlined />,
              label: "Orders",
            },
          ]}
        />
        <li>
          <Button
            style={{
              width: "80%",
              fontWeight: "600",
              lineHeight: "20px",
              marginTop: "30px",
            }}
            onClick={() => logout(setAuth, navigate)}
            type="primary"
            danger
          >
            Logout <LogoutOutlined />
          </Button>
        </li>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            height: "100vh",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderComponent()}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          DuhocINEC ©{new Date().getFullYear()} Created by DuongDQ
        </Footer>
      </Layout>
    </Layout>
  ) : (
    <LayoutPage>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "70vh",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>You don't have permission to access this resource!</h1>
          <Link to="/">
            <Button type="primary">Back to home page</Button>
          </Link>
        </div>
      </div>
    </LayoutPage>
  );
};
export default Admin;
