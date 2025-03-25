import React, { useEffect, useState } from "react";
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
import { getAllCategory } from "../../utils/api";
import Loading from "../../components/Loading";
const HomePage = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCategory();
        setPostData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
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
      {postData && <News data={postData} />}
    </>
  );
};

export default HomePage;
