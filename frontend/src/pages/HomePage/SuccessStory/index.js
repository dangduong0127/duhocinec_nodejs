import React from "react";
import "./styles.scss";
import TitleBradingLine from "../Title&BrandingLine";
import { Link } from "react-router-dom";
import { Button, Carousel } from "antd";

const SuccessStory = () => {
  return (
    <section className="success-story-wrapper">
      <div className="container">
        <TitleBradingLine
          title="Câu chuyện thành công"
          description="Đầu tư cho giáo dục là khoản đầu tư mang lại lợi nhuận lâu dài. Du học sinh INEC đã đạt được nhiều điều hơn là chỉ nhận bằng cấp giá trị, kiếm được một công việc ổn định. Họ định hình sự nghiệp của riêng mình, góp phần thay đổi thế giới, trở thành những công dân toàn cầu ưu tú."
        />

        <div className="carousel-content">
          <Carousel autoplay>
            <div className="carousel-item">
              <Link to className="carousel-nav">
                <div className="success-story-col-item">
                  <div className="image-box">
                    <img
                      src="https://duhocinec.com/wp-content/uploads/2024/10/22-09-20-dai-hoc-quan-ly-singapore-smu-dang-cap-cua-mot-thuong-hieu-giao-duc.jpg"
                      alt="success-story-image"
                    />
                  </div>
                  <div className="success-story-txtbox">
                    <h5>
                      Sinh viên INEC nối dài danh sách học bổng thạc sĩ Đại học
                      SMU Singapore
                    </h5>
                  </div>
                </div>
              </Link>

              <Link to className="carousel-nav">
                <div className="success-story-col-item">
                  <div className="image-box">
                    <img
                      src="https://duhocinec.com/wp-content/uploads/2024/10/22-09-20-dai-hoc-quan-ly-singapore-smu-dang-cap-cua-mot-thuong-hieu-giao-duc.jpg"
                      alt="success-story-image"
                    />
                  </div>
                  <div className="success-story-txtbox">
                    <h5>
                      Sinh viên INEC nối dài danh sách học bổng thạc sĩ Đại học
                      SMU Singapore
                    </h5>
                  </div>
                </div>
              </Link>

              <Link to className="carousel-nav">
                <div className="success-story-col-item">
                  <div className="image-box">
                    <img
                      src="https://duhocinec.com/wp-content/uploads/2024/10/22-09-20-dai-hoc-quan-ly-singapore-smu-dang-cap-cua-mot-thuong-hieu-giao-duc.jpg"
                      alt="success-story-image"
                    />
                  </div>
                  <div className="success-story-txtbox">
                    <h5>
                      Sinh viên INEC nối dài danh sách học bổng thạc sĩ Đại học
                      SMU Singapore
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </Carousel>
        </div>

        <div className="btn-show-more-wrapper">
          <button className="btn-rainbow-border">
            <span>Xem thêm</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
