import React, { useContext, useState } from "react";
import User from "./Users";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/Context/auth.context";
import logout from "../../utils/logout.js";
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
  const { setAuth } = useContext(AuthContext);
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
        return <div>Courses</div>;
      case "3":
        return <div>Settings</div>;

      default:
        return <div>Default</div>;
    }
  };

  return (
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
              icon: <VideoCameraOutlined />,
              label: "Categories",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Posts",
            },
          ]}
        />
        <li>
          <Button
            style={{
              width: "80%",
              fontWeight: "600",
              lineHeight: "20px",
            }}
            onClick={() => logout(setAuth, navigate)}
            type="primary"
            danger
          >
            Logout
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
  );
};
export default Admin;
