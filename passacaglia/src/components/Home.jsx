import React from "react";
import Banner_HP_web from "../components/Banner_HP_web";
import Menu_Web from "../components/Menu_web";
import Logo_web from "../components/Logo_web";
import More_button from "../components/More_button";
import Footer from "../components/Footer_web";
import "../Css/Home.css";
// importy obrazków
import herb from "../Pictures/herb.png";
import owcip from "../Pictures/owcip.png";

const Home = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Banner_HP_web />

      <div id="misja">
        <div>
          <h1>
            NASZA MISJA<div id="line"></div>
          </h1>
        </div>
        <div id="misja_text">
          <h2>
            Fascynuje nas muzyczny ruch wykonawstwa historycznego. Chcemy
            budować przestrzeń, w której będzie mógł rozkwitać. Tak powstała
            Fundacja Promocji Muzyki Dawnej „Passacaglia”.{" "}
          </h2>
          <p>
            Naszą misją jest pielęgnowanie i popularyzacja muzycznego
            dziedzictwa. Chcemy inspirować zarówno muzyków, jak i melomanów do
            odkrywania piękna muzyki dawnej. Ważne jest dla nas, aby mogła
            wybrzmieć w sposób, w jaki wyobraził to sobie kompozytor, dlatego
            dbamy, aby pokazywać ją w wykonaniach zgodnych z historyczną
            praktyką wykonawczą, na kopiach instrumentów z epoki. Chcemy przy
            tym, aby w całym swoim pięknie była różnorodna, dostępna i
            egalitarna.
          </p>
          <br />
          <p>
            Jesteśmy organizacją non-profit, co znaczy, że wszystkie środki,
            które pozyskujemy, przeznaczamy na realizację naszej misji.
            Urzeczywistniamy ją poprzez organizowanie wartościowych wydarzeń:
            koncertów, festiwali, wykładów, spotkań, warsztatów, realizację
            materiałów audio i wideo, upowszechniających muzykę w nurcie
            wykonawstwa historycznego, a także prace badawcze i edytorskie.
            Szczególnie chętnie łączymy siły z innymi dziedzinami sztuki i
            nauki. Wierzymy, że muzyka dawna jest wciąż żywa i może przekazywać
            we współczesnym świecie autentyczne, prawdziwe emocje.
          </p>
        </div>
        <div id="button_container">
          <More_button />
        </div>
      </div>

      <div id="aktualnosci">
        <h1>
          AKTUALNOŚCI<div id="line"></div>
        </h1>
        <div id="aktualnosci_container">
          <div className="akt"></div>
          <div className="akt"></div>
          <div className="akt"></div>
        </div>
        <More_button />
      </div>

      <div id="owcip">
        <div id="owcip_logo1">
          <img src={herb} alt="Herb" />
        </div>
        <div id="owcip_text">
          <p>
            Budowę strony sfinansowano ze środków pochodzących z dotacji
            Opolskiego Centrum Wspierania Inicjatyw Pozarządowych <br></br>w
            ramach konkursu „Silne NGO 25” umowa nr 5/2025/SN, finansowanego ze
            środków Urzędu Miasta Opola <br></br> na podstawie umowy
            CDO-RIPS.526.6.1.2025 z dnia 11.03.2025.
          </p>
        </div>
        <div id="owcip_logo2">
          <img src={owcip} alt="Logo" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
