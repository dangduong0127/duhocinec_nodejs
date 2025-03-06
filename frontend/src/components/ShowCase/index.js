import React from "react";
import "./styles.scss";
import TitleBradingLine from "../../pages/HomePage/Title&BrandingLine";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

const ShowCase = () => {
  return (
    <section className="showcase-wrapper">
      <div className="container">
        <TitleBradingLine title="Học sinh INEC trúng truyển" />
        <Carousel autoplay autoplaySpeed={4000} draggable>
          <div className="showcase-content">
            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-tung-lam-dai-hoc-smu-singapore-280x280.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Tùng Lâm - Học bổng 84.000 SGD - Đại học Quản lý
                      Singapore (SMU)
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-tung-lam-dai-hoc-smu-singapore-280x280.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Tùng Lâm - Học bổng 84.000 SGD - Đại học Quản lý
                      Singapore (SMU)
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-tung-lam-dai-hoc-smu-singapore-280x280.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Tùng Lâm - Học bổng 84.000 SGD - Đại học Quản lý
                      Singapore (SMU)
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-tung-lam-dai-hoc-smu-singapore-280x280.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Tùng Lâm - Học bổng 84.000 SGD - Đại học Quản lý
                      Singapore (SMU)
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="showcase-content">
            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-tung-lam-dai-hoc-smu-singapore-280x280.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Tùng Lâm - Học bổng 84.000 SGD - Đại học Quản lý
                      Singapore (SMU)
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-tung-lam-dai-hoc-smu-singapore-280x280.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Tùng Lâm - Học bổng 84.000 SGD - Đại học Quản lý
                      Singapore (SMU)
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-tung-lam-dai-hoc-smu-singapore-280x280.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Tùng Lâm - Học bổng 84.000 SGD - Đại học Quản lý
                      Singapore (SMU)
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-tung-lam-dai-hoc-smu-singapore-280x280.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Tùng Lâm - Học bổng 84.000 SGD - Đại học Quản lý
                      Singapore (SMU)
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ShowCase;
