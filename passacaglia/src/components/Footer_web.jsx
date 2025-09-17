import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../Pictures/Logo_banner.png";
import "../Css/Footer_web.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer-logo"
        style={{ backgroundImage: `url(${logo})` }}
      />

      <address className="footer-address">
        <h4>Fundacja Promocji Muzyki Dawnej "Passacaglia"</h4>
        <div className="address-frame">
          <div>
            <p>ul. Kościuszki 13/6</p>
            <p>45-062 Opole</p>
          </div>
          <div className="divider" />
          <div>
            <p>tel: 600 491 650</p>
            <p>email: fundacjapassacaglia@gmail.com</p>
          </div>
          <div className="divider" />
          <div>
            <p>NIP 7543365554</p>
            <p>KRS 0001078197</p>
          </div>
        </div>
      </address>

      <div className="footer-support">
        <button className="support-button">WESPRZYJ</button>

        <div className="social-buttons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
