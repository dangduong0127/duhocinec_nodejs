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
import { getAllCategory, getAllPosts } from "../../utils/api";
import Chatbot from "../../components/Chatbot";
const HomePage = () => {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCategory();
        setPostData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
      {postData && <News data={postData} />}

      <Chatbot />
    </>
  );
};

export default HomePage;
