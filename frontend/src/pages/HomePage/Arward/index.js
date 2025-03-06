import React from "react";
import "./styles.scss";
import TitleBradingLine from "../Title&BrandingLine";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
const Arward = () => {
  return (
    <section className="arward-section">
      <div className="container">
        <TitleBradingLine
          title="Giải thưởng - Chứng nhận"
          description="Những giải thưởng, chứng nhận do các trường đối tác trao tặng chính là sự công nhận cho quá trình tư vấn, hỗ trợ tận tâm của INEC trong suốt những năm qua."
        />

        <Carousel autoplay draggable>
          <div className="arward-carousel-item">
            <Link to>
              <div className="single-award-item">
                <div className="award-imgbox">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/09/inec-doi-tac-uu-tu-kaplan-01.jpg"
                    alt="award"
                  />
                </div>
                <div className="award-txtbox">
                  <h5>
                    INEC được vinh danh “Đối tác ưu tú” của Viện Giáo dục Đại
                    học Kaplan
                  </h5>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="single-award-item">
                <div className="award-imgbox">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/09/inec-doi-tac-uu-tu-kaplan-01.jpg"
                    alt="award"
                  />
                </div>
                <div className="award-txtbox">
                  <h5>
                    INEC được vinh danh “Đối tác ưu tú” của Viện Giáo dục Đại
                    học Kaplan
                  </h5>
                </div>
              </div>
            </Link>

            <Link to>
              <div className="single-award-item">
                <div className="award-imgbox">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/09/inec-doi-tac-uu-tu-kaplan-01.jpg"
                    alt="award"
                  />
                </div>
                <div className="award-txtbox">
                  <h5>
                    INEC được vinh danh “Đối tác ưu tú” của Viện Giáo dục Đại
                    học Kaplan
                  </h5>
                </div>
              </div>
            </Link>
          </div>

          <div className="arward-carousel-item">
            <Link to>
              <div className="single-award-item">
                <div className="award-imgbox">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/09/inec-doi-tac-uu-tu-kaplan-01.jpg"
                    alt="award"
                  />
                </div>
                <div className="award-txtbox">
                  <h5>
                    INEC được vinh danh “Đối tác ưu tú” của Viện Giáo dục Đại
                    học Kaplan
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </Carousel>

        <div className="btn-wrapper">
          <button className="btn-rainbow-border">
            <span>Xem thêm</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Arward;
