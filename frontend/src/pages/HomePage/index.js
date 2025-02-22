import React from "react";
import "./styles.scss";
import Banner from "../../components/Banner";
import Filter from "../../components/Filter";
import IntroduceContries from "../../components/IntroduceCountries";
const HomePage = () => {
  return (
    <>
      <Banner />
      <Filter />
      <IntroduceContries />
    </>
  );
};

export default HomePage;
