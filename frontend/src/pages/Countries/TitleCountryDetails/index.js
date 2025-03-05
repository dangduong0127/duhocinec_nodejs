import React from "react";

const TitleCountryDetails = (props) => {
  return (
    <div className="title-country">
      {props.icon}
      <h2 className="chnh-sch-mi">{props.title}</h2>
    </div>
  );
};

export default TitleCountryDetails;
