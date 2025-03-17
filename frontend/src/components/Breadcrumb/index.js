import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const BreadcrumbCustom = ({ breadcrumb, titlePost }) => {
  return (
    <Breadcrumb
      items={[
        {
          title: <Link to="/">Trang chủ</Link>,
        },
        {
          title: <Link to={breadcrumb.path}>{breadcrumb.name}</Link>,
        },
        titlePost
          ? {
              title: <span style={{ color: "#0C65D8" }}>{titlePost}</span>,
            }
          : {},
      ]}
    />
  );
};

export default BreadcrumbCustom;
