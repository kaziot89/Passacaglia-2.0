import { NavLink } from "react-router-dom";

import Banner_podstrona from "../components/Banner_podstrona";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Menu_Mobile from "../components/Menu_Mobile";
import mediaImg from "../Pictures/banner1.jpg";
import radioopole from "../Pictures/radioopole.png";
import doxa from "../Pictures/doxa.png";
import nto from "../Pictures/nto.png";
import klasyka from "../Pictures/Klasyka_logo.png";
import meakultura from "../Pictures/LOGO_MEAKULTURA_PISMO.jpg";
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
                backgroundImage: `url(${meakultura})`,
                backgroundSize: "contain", // dopasowuje obraz do diva, bez przycinania
                backgroundRepeat: "no-repeat", // zapobiega powtarzaniu tła
                backgroundPosition: "center",
              }}
            ></div>
            <div className="media_text">
              <h5>MEAKULTURA</h5>
              <p>
                <a
                  href="https://meakultura.pl/artykul/2-festiwal-jesien-z-muzyka-dawna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media_text_link"
                >
                  2. Festiwal „Jesień z muzyką dawną”
                </a>
              </p>
            </div>
          </div>
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
                  href="https://radio.opole.pl/365,1696,jesien-z-muzyka-dawna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media_text_link"
                >
                  Jesień z muzyką dawną - Radio Opole
                </a>
              </p>
            </div>
          </div>
          <div className="media_item">
            <div
              className="media_photo"
              style={{
                backgroundImage: `url(${klasyka})`,
                backgroundSize: "contain", // dopasowuje obraz do diva, bez przycinania
                backgroundRepeat: "no-repeat", // zapobiega powtarzaniu tła
                backgroundPosition: "center",
              }}
            ></div>
            <div className="media_text">
              <h5>KLASYKA NA KAŻDĄ PORĘ</h5>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=nzM5mT0XGwg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media_text_link"
                >
                  Fundacja "Passacaglia" o Festiwalu "Jesień z muzyką dawną"
                  2025
                </a>
              </p>
            </div>
          </div>
          <div className="media_item">
            <div
              className="media_photo"
              style={{
                backgroundImage: `url(${nto})`,
              }}
            ></div>
            <div className="media_text">
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
          <div className="media_item">
            <div
              className="media_photo"
              style={{
                backgroundImage: `url(${doxa})`,
              }}
            ></div>
            <div className="media_text">
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
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Media;
