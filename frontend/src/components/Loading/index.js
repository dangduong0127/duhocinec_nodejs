import React from "react";
import "./styles.scss";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-inner">
        <img
          src={`${process.env.REACT_APP_SERVER_BASE_URL}uploads/sticky-logo-inec.png`}
          alt="logo"
        />
        <div className="loading"></div>
        {!localStorage.getItem("visited") ? (
          <p>Lần đầu tải trang sẽ hơi chậm, vui lòng chờ đợi giây lát!</p>
        ) : null}
      </div>
    </div>
  );
};
export default Loading;
