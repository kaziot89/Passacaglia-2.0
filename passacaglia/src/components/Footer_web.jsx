import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../Pictures/Logo_banner.png";
import "../Css/Footer_web.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" aria-label="Przejdź do strony głównej">
        <div
          className="footer-logo"
          style={{ backgroundImage: `url(${logo})` }}
          role="img" 
          aria-label="Logo Fundacji Passacaglia"
        />
      </Link>

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
            <a
              href="mailto:fundacjapassacaglia@gmail.com"
              aria-label="Wyślij wiadomość e-mail do działu kontaktu"
            >
              email: fundacjapassacaglia@gmail.com
            </a>
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
            href="https://www.facebook.com/profile.php?id=61554927042363"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź nas na Facebooku"
            className="social-icon"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://www.instagram.com/fundacjapassacaglia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź nas na Instagramie"
            className="social-icon"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://www.youtube.com/@jesienzmuzykadawna"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź nas na YouTube"
            className="social-icon"
          >
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
