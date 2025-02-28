import React from "react";
import "./styles.scss";
import Banner from "../../components/Banner";
import Filter from "../../components/Filter";
import IntroduceContries from "../../components/IntroduceCountries";
import Schoolarship from "../../components/Scholarship";
import ShowCase from "../../components/ShowCase";
import WhatOurClientsSay from "./WhatOurClientsSay";
import SuccessStory from "./SuccessStory";
const HomePage = () => {
  return (
    <>
      <Banner />
      <Filter />
      <IntroduceContries />
      <div
        className="scholarship-wrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="container">
          <Schoolarship style={{ margin: "0" }} />
        </div>
      </div>

      <ShowCase />
      <SuccessStory />
      <WhatOurClientsSay />
    </>
  );
};

export default HomePage;
