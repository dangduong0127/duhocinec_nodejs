import React from "react";
import "./styles.scss";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-inner">
        <img
          src="http://localhost:1988/uploads/sticky-logo-inec.png"
          alt="logo"
        />
        <div className="loading"></div>
      </div>
    </div>
  );
};
export default Loading;
