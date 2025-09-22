import { NavLink } from "react-router-dom";
import Banner_podstrona from "../components/Banner_podstrona";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import mediaImg from "../Pictures/aktualnosci.jpg";
import Footer from "../components/Footer_web";

import "../Css/Media.css";
import "../Css/Aktualnosci.css";
const Aktualnosci = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Banner_podstrona
        image={mediaImg}
        style={{ backgroundPosition: `center 1250px` }}
      />
      <div id="aktualnosci">
        <h1>
          CO NOWEGO<div id="line"></div>
        </h1>
        <div id="aktualnosci_container">
          <div className="akt">
            <div
              className="akt_photo"
              //   style={{
              //     backgroundImage: `url(${zdjecie - (zrobić import na górze)})`,
              //   }}
            ></div>
            <div className="akt_text">
              <h5>Data wydarzenia</h5>
              <p>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media_text_link"
                >
                  OPIS WYDARZENIA - LINK
                </a>
              </p>
            </div>
          </div>
          <div className="akt">
            <div
              className="akt_photo"
              //   style={{
              //     backgroundImage: `url(${zdjecie - (zrobić import na górze)})`,
              //   }}
            ></div>
            <div className="akt_text">
              <h5>Data wydarzenia</h5>
              <p>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media_text_link"
                >
                  OPIS WYDARZENIA - LINK
                </a>
              </p>
            </div>
          </div>
          <div className="akt">
            <div
              className="akt_photo"
              //   style={{
              //     backgroundImage: `url(${zdjecie - (zrobić import na górze)})`,
              //   }}
            ></div>
            <div className="akt_text">
              <h5>Data wydarzenia</h5>
              <p>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media_text_link"
                >
                  OPIS WYDARZENIA - LINK
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Aktualnosci;
