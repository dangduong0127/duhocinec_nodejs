import React from "react";
import "./styles.scss";
import TitleBradingLine from "../Title&BrandingLine";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

const PartnerSystem = () => {
  return (
    <section className="partner-system-section">
      <div className="container">
        <TitleBradingLine
          title="Hệ thống đối tác"
          description="Kiên định trên con đường giúp đỡ học sinh Việt Nam gia nhập các trường đại học chất lượng, phù hợp với khả năng của học sinh, INEC tự hào sở hữu mạng lưới 500+ trường đối tác tại 17+ quốc gia, tự tin mang đến cho bạn nhiều lộ trình học hơn bất kỳ một nhà tư vấn nào khác."
        />
        <Carousel autoplay>
          <div className="ps-carousel-item">
            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/10/Lancaster-university-leipzig-logo_11zon.png"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/10/apu-university-logo.png"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/12/241224-du-hoc-anh-Keele-University-01.jpg"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/12/241224-du-hoc-anh-City-University-of-London-01.jpg"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/11/du-hoc-dai-hoc-navitas.jpg"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/11/du-hoc-dai-hoc-deakin-uc.jpg"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/11/du-hoc-dai-hoc-ontariotech-canada.jpg"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/12/du-hoc-thuy-dien-dai-hoc-Boras-0512.png"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/10/university-of-waikato-college-logo.png"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/12/du-hoc-canada-cao-dang-george-brown-0612.jpg"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/11/Seneca-logo.png"
                  alt="partner"
                />
              </div>
            </Link>

            <Link className="ps-nav-item">
              <div className="single-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/12/181224-du-hoc-anh-dai-hoc-Anglia-Ruskin.jpg"
                  alt="partner"
                />
              </div>
            </Link>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnerSystem;
