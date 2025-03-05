import React from "react";
import "./styles.scss";
import TitleBradingLine from "../../pages/HomePage/Title&BrandingLine";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <section className="news-section">
      <div className="container">
        <TitleBradingLine title="Tin tức" />

        <div className="news-wrapper">
          <div className="news-inner">
            <Link to className="news-item">
              <div className="news-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2025/03/new-zealand-chon-truong-20250228.jpg"
                  alt=""
                />
              </div>

              <div className="news-txtbox">
                <h5>
                  Check profile 8 trường đại học công lập New Zealand: Đâu là
                  “chân ái” của bạn?
                </h5>
              </div>
            </Link>

            <Link to className="news-item">
              <div className="news-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2025/03/new-zealand-chon-truong-20250228.jpg"
                  alt=""
                />
              </div>

              <div className="news-txtbox">
                <h5>
                  Check profile 8 trường đại học công lập New Zealand: Đâu là
                  “chân ái” của bạn?
                </h5>
              </div>
            </Link>

            <Link to className="news-item">
              <div className="news-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2025/03/new-zealand-chon-truong-20250228.jpg"
                  alt=""
                />
              </div>

              <div className="news-txtbox">
                <h5>
                  Check profile 8 trường đại học công lập New Zealand: Đâu là
                  “chân ái” của bạn?
                </h5>
              </div>
            </Link>

            <Link to className="news-item">
              <div className="news-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2025/03/new-zealand-chon-truong-20250228.jpg"
                  alt=""
                />
              </div>

              <div className="news-txtbox">
                <h5>
                  Check profile 8 trường đại học công lập New Zealand: Đâu là
                  “chân ái” của bạn?
                </h5>
              </div>
            </Link>

            <Link to className="news-item">
              <div className="news-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2025/03/new-zealand-chon-truong-20250228.jpg"
                  alt=""
                />
              </div>

              <div className="news-txtbox">
                <h5>
                  Check profile 8 trường đại học công lập New Zealand: Đâu là
                  “chân ái” của bạn?
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
