import React from "react";
import "./styles.scss";
import Banner from "../../components/Banner";
import Filter from "../../components/Filter";
import IntroduceContries from "../../components/IntroduceCountries";
import Schoolarship from "../../components/Scholarship";
import ShowCase from "../../components/ShowCase";
import WhatOurClientsSay from "./WhatOurClientsSay";
import SuccessStory from "./SuccessStory";
import PartnerSystem from "./PartnerSystem";
import Arward from "./Arward";
import Events from "../../components/Events";
import News from "../../components/News";
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
      <PartnerSystem />
      <Arward />
      <Events />
      <News />
    </>
  );
};

export default HomePage;
