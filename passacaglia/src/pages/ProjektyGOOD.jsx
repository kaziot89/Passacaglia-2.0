import React from "react";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Menu_Mobile from "../components/Menu_Mobile";
import Banner_podstrona from "../components/Banner_podstrona";
import projektyImg from "../Pictures/banner_projekty.jpg";
import Jesienimg from "../Pictures/jesienzfletem.jpg";
import Footer from "../components/Footer_web";
import "../Css/Projekty.css";

const Projekty = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Menu_Mobile />
      <Banner_podstrona image={projektyImg} objectPosition="center 21%" />

      <div id="projekty_page">
        <div id="aktualne_projekty">
          <h1>
            AKTUALNE PROJEKTY<div id="line"></div>
          </h1>

          <div id="projekty_aktualne_section">
            <div className="projekty_container_act">
              <div className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{
                    backgroundImage: `url(${Jesienimg})`,
                  }}
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projekty_text_link  projekty_text"
                  >
                    <h5>
                      <i>Jesień z muzyką dawną</i>
                      <br />
                      II edycja
                    </h5>
                  </a>
                </div>
              </div>
              <div className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{
                    backgroundImage: `url(${Jesienimg})`,
                  }}
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projekty_text_link  projekty_text"
                  >
                    <h5>
                      <i>Jesień z muzyką dawną</i>
                      <br />
                      II edycja
                    </h5>
                  </a>
                </div>
              </div>
              <div className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{
                    backgroundImage: `url(${Jesienimg})`,
                  }}
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projekty_text_link  projekty_text"
                  >
                    <h5>
                      <i>Jesień z muzyką dawną</i>
                      <br />
                      II edycja
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="archiwalne_projekty">
          <h1>
            ARCHIWALNE PROJEKTY<div id="line"></div>
          </h1>
          <div id="projekty_archiwalne_section">
            <div className="projekty_container_arc">
              <div className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{
                    backgroundImage: `url(${Jesienimg})`,
                  }}
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projekty_text_link  projekty_text"
                  >
                    <h5>
                      <i>Jesień z muzyką dawną</i>
                      <br />
                      II edycja
                    </h5>
                  </a>
                </div>
              </div>
              <div className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{
                    backgroundImage: `url(${Jesienimg})`,
                  }}
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projekty_text_link  projekty_text"
                  >
                    <h5>
                      <i>Jesień z muzyką dawną</i>
                      <br />
                      II edycja
                    </h5>
                  </a>
                </div>
              </div>
              <div className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{
                    backgroundImage: `url(${Jesienimg})`,
                  }}
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projekty_text_link  projekty_text"
                  >
                    <h5>
                      <i>Jesień z muzyką dawną</i>
                      <br />
                      II edycja
                    </h5>
                  </a>
                </div>
              </div>
              <div className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{
                    backgroundImage: `url(${Jesienimg})`,
                  }}
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projekty_text_link  projekty_text"
                  >
                    <h5>
                      <i>Jesień z muzyką dawną</i>
                      <br />
                      II edycja
                    </h5>
                  </a>
                </div>
              </div>
              <div className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{
                    backgroundImage: `url(${Jesienimg})`,
                  }}
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projekty_text_link  projekty_text"
                  >
                    <h5>
                      <i>Jesień z muzyką dawną</i>
                      <br />
                      II edycja
                    </h5>
                  </a>
                </div>
              </div>
              <div className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{
                    backgroundImage: `url(${Jesienimg})`,
                  }}
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projekty_text_link  projekty_text"
                  >
                    <h5>
                      <i>Jesień z muzyką dawną</i>
                      <br />
                      II edycja
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Projekty;
