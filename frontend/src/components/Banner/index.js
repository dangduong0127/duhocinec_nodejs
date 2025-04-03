import React from "react";
import "./styles.scss";
import { Carousel } from "antd";

const Banner = () => {
  const getImageUrl = (path) => {
    return `${process.env.REACT_APP_SERVER_BASE_URL}uploads/${path}`;
  };

  return (
    <>
      <Carousel autoplay autoplaySpeed={4000} arrows draggable>
        <div>
          <img
            src={getImageUrl(
              "1712-Trien-lam-du-hoc-Ha-Lan-2025-1920x620-day-du-1.jpg"
            )}
            alt=""
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <img
            src={getImageUrl("Banner-Tiec-HDB-Chau-Au-2024-2711.jpg")}
            alt=""
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <img
            src={getImageUrl("2125-1920x420-li-xi-TET-2025.jpg")}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
