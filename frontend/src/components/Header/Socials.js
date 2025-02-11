import React from "react";
import "./socials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Socials = () => {
  return (
    <ul className="social-list">
      <li>
        <a
          target="_blank"
          className="social-icon"
          href="https://www.facebook.com/tuvanduhocinec/"
        >
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#ccc" }} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          className="social-icon"
          href="https://www.instagram.com/duhocinec/"
        >
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#ccc" }} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          className="social-icon"
          href="https://www.tiktok.com/@duhocinec"
        >
          <FontAwesomeIcon icon={faTiktok} style={{ color: "#ccc" }} />
        </a>
      </li>

      <li>
        <a target="_blank" className="social-icon" href="mailto:inec@inec.vn">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ccc" }} />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          className="social-icon"
          href="https://www.youtube.com/user/tuvanduhocinec"
        >
          <FontAwesomeIcon icon={faYoutube} style={{ color: "#ccc" }} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
