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
import { Link } from "react-router-dom";
const Socials = () => {
  return (
    <ul className="social-list">
      <li>
        <Link
          target="_blank"
          className="social-icon"
          to="https://www.facebook.com/tuvanduhocinec/"
        >
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#ccc" }} />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          className="social-icon"
          to="https://www.instagram.com/duhocinec/"
        >
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#ccc" }} />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          className="social-icon"
          to="https://www.tiktok.com/@duhocinec"
        >
          <FontAwesomeIcon icon={faTiktok} style={{ color: "#ccc" }} />
        </Link>
      </li>

      <li>
        <Link target="_blank" className="social-icon" to="mailto:inec@inec.vn">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ccc" }} />
        </Link>
      </li>

      <li>
        <Link
          target="_blank"
          className="social-icon"
          to="https://www.youtube.com/user/tuvanduhocinec"
        >
          <FontAwesomeIcon icon={faYoutube} style={{ color: "#ccc" }} />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
