import React from "react";
import "./styles.scss";

const TitleBradingLine = (props) => {
  return (
    <>
      <div className="title-header-section">
        <div className="title-section-inner">
          <h2>{props.title || "This is a title"}</h2>
        </div>
        <div className="branding-line">
          <div className="branding-line-child"></div>
          <div className="branding-line-item"></div>
          <div className="branding-line-inner"></div>
          <div className="rectangle-div"></div>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default TitleBradingLine;
