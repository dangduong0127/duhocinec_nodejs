import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
const ErrorPage = () => {
  return (
    <>
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
          <h1>Error 404</h1>
          <p>Page Not Found</p>
          <Link to="/">
            <Button type="primary">Back to home page</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
