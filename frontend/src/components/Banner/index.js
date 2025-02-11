import React from "react";
import "./styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Banner = () => {
  const getImageUrl = (path) => {
    return `${process.env.REACT_APP_SERVER_BASE_URL}uploads/${path}`;
  };

  return (
    <>
      <Carousel>
        <div>
          <img
            src={getImageUrl(
              "1712-Trien-lam-du-hoc-Ha-Lan-2025-1920x620-day-du-1.jpg"
            )}
            alt=""
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src={getImageUrl("Banner-Tiec-HDB-Chau-Au-2024-2711.jpg")}
            alt=""
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={getImageUrl("2125-1920x420-li-xi-TET-2025.jpg")} alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>

      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={getImageUrl(
                "1712-Trien-lam-du-hoc-Ha-Lan-2025-1920x620-day-du-1.jpg"
              )}
              className="d-block w-100"
              alt="First Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={getImageUrl("Banner-Tiec-HDB-Chau-Au-2024-2711.jpg")}
              className="d-block w-100"
              alt="Second Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={getImageUrl("2125-1920x420-li-xi-TET-2025.jpg")}
              className="d-block w-100"
              alt="Third Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
};

export default Banner;
