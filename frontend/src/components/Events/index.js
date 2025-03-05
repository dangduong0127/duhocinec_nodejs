import React from "react";
import "./styles.scss";
import TitleBradingLine from "../../pages/HomePage/Title&BrandingLine";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className="events-section">
      <div className="container">
        <TitleBradingLine title="Sự kiện" />

        <div className="events-wrapper">
          <div className="events-col">
            <Link className="events-item">
              <div className="events-imgbox">
                <img
                  src="	https://duhocinec.com/wp-content/uploads/2022/11/130225-gap-go-olympic-college.jpeg"
                  alt="events-img"
                />
              </div>
              <div className="events-txtbox">
                <h5>
                  Gặp gỡ Olympic College: Tư vấn 1-1 du học CĐ chuyển tiếp ĐH –
                  Tiết kiệm đến 40%
                </h5>
              </div>
              <div className="badge">
                <span className="post-date">
                  05-03-2025
                  <br />
                  17:30
                </span>
              </div>
            </Link>
          </div>

          <div className="events-col">
            <Link className="events-item-noimg">
              <div className="events-txtbox">
                <h5>
                  Gặp gỡ Olympic College: Tư vấn 1-1 du học CĐ chuyển tiếp ĐH –
                  Tiết kiệm đến 40%
                </h5>
              </div>
              <div className="badge">
                <span className="post-date">
                  05-03-2025
                  <br />
                  17:30
                </span>
              </div>
            </Link>

            <Link className="events-item-noimg">
              <div className="events-txtbox">
                <h5>
                  Gặp gỡ Olympic College: Tư vấn 1-1 du học CĐ chuyển tiếp ĐH –
                  Tiết kiệm đến 40%
                </h5>
              </div>
              <div className="badge">
                <span className="post-date">
                  05-03-2025
                  <br />
                  17:30
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
