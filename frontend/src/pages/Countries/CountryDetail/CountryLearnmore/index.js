import React, { useState } from "react";
import "./styles.scss";
import TitleCountryDetails from "../../TitleCountryDetails";
import { IconContact } from "../../../../components/Icons";
import { Collapse } from "antd";
const CountryLearnMore = ({ data }) => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  //   const onPositionChange = (newExpandIconPosition) => {
  //     setExpandIconPosition(newExpandIconPosition);
  //   };
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <div>{text}</div>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <div>{text}</div>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <div>{text}</div>,
    },
  ];

  return (
    <div className="country-learn-more">
      <TitleCountryDetails
        title={`Kinh nghiệm ${data.title}`}
        icon={<IconContact size="40" color="red" />}
      />

      <Collapse onChange={onChange} items={items} />
      <br />
    </div>
  );
};

export default CountryLearnMore;
