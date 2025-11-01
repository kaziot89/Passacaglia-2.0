import { NavLink } from "react-router-dom";

import Banner_podstrona from "../components/Banner_podstrona";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Menu_Mobile from "../components/Menu_Mobile";
import mediaImg from "../Pictures/banner1.jpg";
import radioopole from "../Pictures/radioopole.png";
import doxa from "../Pictures/doxa.png";
import nto from "../Pictures/nto.png";
import Footer from "../components/Footer_web";
import "../Css/Media.css";
const Media = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Menu_Mobile />
      <Banner_podstrona image={mediaImg} objectPosition="center 70%" />
      <div id="media_page">
        <h1>
          MEDIA O NAS <div id="line"></div>
        </h1>

        <div id="media_container">
          <div className="media_item">
            <div
              className="media_photo"
              style={{
                backgroundImage: `url(${radioopole})`,
              }}
            ></div>
            <div className="media_text">
              <h5>RADIO OPOLE</h5>
              <p>
                <a
                  href="https://radio.opole.pl/113,2&idpi=130&idxi=860218&go=morelistinsert&si=91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media_text_link"
                >
                  Gratka dla miłośników muzyki dawnej na dwóch koncertach.
                </a>
              </p>
            </div>
          </div>
          <div class="media_item">
            <div
              className="media_photo"
              style={{
                backgroundImage: `url(${doxa})`,
              }}
            ></div>
            <div class="media_text">
              <h5>RADIO DOXA</h5>
              <p>
                <a
                  href="https://doxa.fm/aktualnosci/region/adwentowe-brzmienia-baroku-koncert-w-muzeum-diecezjalnym-w-opolu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media_text_link"
                >
                  Adwentowe Brzmienia Baroku – koncert w Muzeum Diecezjalnym w
                  Opolu.
                </a>
              </p>
            </div>
          </div>
          <div class="media_item">
            <div
              className="media_photo"
              style={{
                backgroundImage: `url(${nto})`,
              }}
            ></div>
            <div class="media_text">
              <h5>NOWA TRYBUNA OPOLSKA</h5>
              <p>
                <a
                  href="https://nto.pl/trwa-jesien-z-muzyka-dawna-kolejny-z-koncertow-juz-w-niedziele-6-pazdziernika-w-proszkowie/ar/c13-18852693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media_text_link"
                >
                  Trwa „Jesień z muzyką dawną”. Kolejny z koncertów już w
                  niedzielę (6 października) w Prószkowie.
                </a>
              </p>
            </div>
          </div>
          <div class="media_item">
            <div
              className="media_photo"
              style={{
                backgroundImage: `url(${radioopole})`,
              }}
            ></div>
            <div class="media_text">
              <h5>RADIO DOXA</h5>
              <p>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media_text_link"
                >
                  Nadchodzi „Jesień z muzyką dawną”.
                </a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Media;
