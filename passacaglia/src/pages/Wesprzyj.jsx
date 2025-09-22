import { NavLink } from "react-router-dom";
import Banner_podstrona from "../components/Banner_podstrona";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import mediaImg from "../Pictures/wspracie.jpg";
import Footer from "../components/Footer_web";

import "../Css/Wesprzyj.css";

const Wesprzyj = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Banner_podstrona
        image={mediaImg}
        style={{ backgroundPosition: `center 3590px` }}
      />
      <div id="wesprzyj">
        <h1>
          WESPRZYJ NAS<div id="line"></div>
        </h1>
        <div id="wesprzyj_container">
          <p id="wesprzyj_paragraph">
            Jako organizacja non-profit, działamy z pasji i potrzeby serca –
            promujemy muzykę dawną, chronimy ją i udostępniamy tam, gdzie zwykle
            jej brakuje. Nie robimy tego dla zysku – robimy to dla ludzi. Pomóż
            nam się rozwijać. Razem możemy wiecej!
          </p>
          <h3>Jak można nas wesprzeć?</h3>
          <div id="bank_container">
            <h3>
              Bezpośredni przelew bankowy <br />
              lub zlecenie stałe
            </h3>
            <div id="bank_info">
              <p>Fundacja Promocji Muzyki Dawnej „Passacaglia”</p>
              <p style={{ lineHeight: "24px", fontWeight: 300 }}>
                ul. Kościuszki 13/6
              </p>

              <p style={{ lineHeight: "24px", fontWeight: 300 }}>
                45-062 Opole{" "}
              </p>
            </div>
            <div id="account_info">
              <p style={{ margin: "8px 0" }}>
                Numer konta: 07 1140 2004 0000 3102 8442 0678
              </p>
              <p style={{ fontWeight: 300, display: "inline" }}>
                Tytuł przelewu:{" "}
                <p
                  style={{
                    fontWeight: 300,
                    display: "inline",
                    fontStyle: "italic",
                  }}
                >
                  Darowizna na cele statutowe{" "}
                </p>
              </p>
            </div>
          </div>
          <div id="patron_container">
            <h3>Zostań patronem Fundacji w serwisie Patronite </h3>
            <div id="parton_info">
              <a href="">Zobacz profil</a>
            </div>
          </div>
          <div id="tax_container">
            <h3>Przekaż nam 1,5% podatku </h3>
            <div id="tax_info">
              <p style={{ display: "inline", fontWeight: "300" }}>
                poprzez zaprzyjaźnioną Fundację Studencką{" "}
              </p>
              <p style={{ display: "inline" }}>Młodzi Młodym</p>
              <p style={{ marginTop: "8px" }}>KRS 0000270261</p>
              <p style={{ display: "inline", fontWeight: "300" }}>
                Cel szczegółowy:
              </p>
              <p style={{ display: "inline" }}>PASSACAGLIA 23441</p>

              <p style={{ marginTop: "8px" }}>
                Numer konta: 35 2030 0045 1110 0000 0382 5640
              </p>
              <a href="">Zobacz profil</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Wesprzyj;
