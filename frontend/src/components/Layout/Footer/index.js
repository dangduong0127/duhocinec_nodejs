import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Socials from "../Header/Socials";
import { Button } from "antd";
import { UpOutlined } from "@ant-design/icons";
import "./styles.scss";
const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const btnScrollEl = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
    if (scrollPosition >= 500) {
      btnScrollEl.current.style.opacity = 1;
    } else {
      btnScrollEl.current.style.opacity = 0;
    }
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="footer-wrapper">
      <Button
        ref={btnScrollEl}
        className="scrollToTop"
        onClick={() => scrollToTop()}
      >
        <UpOutlined />
      </Button>

      {/* Logo & Social Links */}
      <section className="section">
        <div className="bg section-bg">
          <div className="is-border"></div>
        </div>

        <div className="section-content relative">
          <div className="row row-collapse align-middle align-center container">
            {/* Logo */}
            <div className="col medium-4 small-12 large-4">
              <div className="col-inner text-left">
                <div className="img">
                  <Link to="/">
                    <div className="img-inner dark">
                      <img
                        src="https://duhocinec.com/wp-content/uploads/2024/08/logo-inec-since2006.png"
                        alt="Logo INEC"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="col medium-8 small-12 large-8">
              <div className="col-inner text-right">
                <div className="social-icons">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Sections */}
      <section className="section section-info">
        <div className="section-content relative">
          <div className="row row-collapse align-equal align-center container">
            {/* Giới thiệu về INEC */}
            <div className="col medium-4 small-12 large-4">
              <div className="col-inner dark">
                <h3 className="section-title">
                  <span>Giới thiệu về INEC</span>
                </h3>
                <ul className="info-menu">
                  <li>
                    <Link to="https://duhocinec.com/gioi-thieu-ve-inec/">
                      Lý do nên chọn INEC
                    </Link>
                  </li>
                  <li>
                    <Link to="https://duhocinec.com/nhung-dich-vu-cho-khach-hang/">
                      Dịch vụ tư vấn du học
                    </Link>
                  </li>
                  <li>
                    <Link to="https://duhocinec.com/cac-giai-thuong-inec/">
                      Chứng nhận giải thưởng
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kết nối với INEC */}
            <div className="col medium-4 small-12 large-4">
              <div className="col-inner dark">
                <h3 className="section-title">
                  <span>Kết nối với INEC</span>
                </h3>
                <p>
                  Tổng đài tư vấn: <strong>1900 636 990</strong>
                  <br />
                  Email: inec@inec.vn
                  <br />
                  Giờ làm việc: Thứ Hai - Thứ Sáu, 8h00 - 17h00
                </p>
              </div>
            </div>

            {/* Các văn phòng INEC */}
            <div className="col medium-4 small-12 large-4">
              <div className="col-inner dark">
                <h3 className="section-title">
                  <span>Các văn phòng INEC</span>
                </h3>
                <ul className="info-menu">
                  <li>
                    <Link to="https://maps.app.goo.gl/zsBvDKYiRhKtvWZW8">
                      279 Trần Nhân Tôn, Quận 10, TP. Hồ Chí Minh
                    </Link>
                  </li>
                  <li>
                    <Link to="https://maps.app.goo.gl/vF1Xg5UE6jj3LoD3A">
                      127 Nguyễn Du, Quận Hải Châu, Đà Nẵng
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="absolute-footer">
        <div className="container">
          <p>© 2024 INEC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
