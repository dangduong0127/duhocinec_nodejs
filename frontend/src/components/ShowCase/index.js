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
                    src="https://duhocinec.com/wp-content/uploads/2024/11/ho-thi-phuong-thao-dai-hoc-texas-my.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Hồ Thị Phương Thảo - Học bổng 70% ĐH West Texas A&M và ĐH
                      Texas Arlington, Mỹ
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
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-hoang-man-columbia-college-canada.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Hoàng Mẫn - Học bổng 35% - Columbia College, Canada
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/truong-phuc-thinh-dai-hoc-james-cook-singapore.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Trương Phúc Thịnh - Học bổng 100% - Đại học James Cook
                      (JCU), Singapore
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-thi-thu-trang-dai-hoc-south-florida-my.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Thị Thu Trang - Học bổng 60% - Đại học South
                      Florida, Mỹ
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
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-dinh-tram-anh-dai-hoc-nebraska-my.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Đình Trâm Anh - Học bổng 60.000 USD - Đại học
                      Nebraska Lincoln, Mỹ
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/tran-mai-phuong-dai-hoc-han-ha-lan.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Trần Mai Phương - Học bổng 30.000 EUR - Đại học KHUD HAN,
                      Hà Lan
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/nguyen-hai-duy-dai-hoc-sunway-malaysia.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Nguyễn Hải Duy - Học bổng 38.000 RM - Chương trình Sunway,
                      Malaysia - Đại học Victoria, Úc
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/tran-gia-han-dai-hoc-la-trobe-uc.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Trần Gia Hân - Học bổng Thạc sĩ 20% - Đại học La Trobe, Úc
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="showcase-item">
                <div className="showcase-item__image">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/thai-tuong-long-dai-hoc-han-ha-lan.jpg"
                    alt="arwards"
                  />
                </div>
                <div className="showcase-item__content">
                  <div className="box-text">
                    <p>
                      Thái Tường Long - Học bổng 30.000 EUR - Đại học KHUD HAN,
                      Hà Lan
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
