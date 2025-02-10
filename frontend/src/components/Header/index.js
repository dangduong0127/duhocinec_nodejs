import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMailBulk,
  faMailForward,
  faMailReply,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faMailchimp,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-top-inner container">
          <div className="header-top-left">
            <ul>
              <li>
                <span>Bạn cần hỗ trợ tư vấn?</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#009925" }} />
                <a className="phoneContact" href="tel:1900636990">
                  1900 636 990
                </a>
              </li>
              <li>
                <a href="#dangkytuvan" className="signup-advise">
                  Đăng ký tư vấn
                </a>
              </li>
            </ul>
          </div>

          <div className="header-top-right">
            <div className="homeSearchWrapper">
              <input type="text" placeholder="Search..." />
              <button className="btn-search">Tìm kiếm</button>
            </div>
            <ul>
              <li>
                <a className="social-icon" href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#ccc" }}
                  />
                </a>
              </li>
              <li>
                <a className="social-icon" href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#ccc" }}
                  />
                </a>
              </li>
              <li>
                <a className="social-icon" href="#">
                  <FontAwesomeIcon icon={faTiktok} style={{ color: "#ccc" }} />
                </a>
              </li>

              <li>
                <a className="social-icon" href="#">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#ccc" }}
                  />
                </a>
              </li>

              <li>
                <a className="social-icon" href="#">
                  <FontAwesomeIcon icon={faYoutube} style={{ color: "#ccc" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
