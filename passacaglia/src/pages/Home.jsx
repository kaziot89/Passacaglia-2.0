import { NavLink } from "react-router-dom";
import Banner_HP_web from "../components/Banner_HP_web";
import Footer from "../components/Footer_web";
import Logo_web from "../components/Logo_web";
import Menu_Mobile from "../components/Menu_Mobile";
import Menu_Web from "../components/Menu_web";
import More_button from "../components/More_button";
import herb from "../Pictures/herb.png";
import owcip from "../Pictures/owcip.png";

import { aktualnosciData } from "./Aktualnosci";
const NewsCardHome = ({ id, title, date, img }) => (
  <div className="akt">
    <div className="akt_photo" style={{ backgroundImage: `url(${img})` }}></div>
    <div className="akt_text">
      <h5>{date}</h5>
      <p>
        <NavLink to={`/aktualnosci/${id}`} className="media_text_link">
          {title}
        </NavLink>
      </p>
    </div>
  </div>
);

const Home = () => {
  const latestNews = aktualnosciData.slice(-3).reverse();

  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Menu_Mobile />
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
          <More_button to="/misja" id="go_to_misja" />
        </div>
      </div>

      <div id="aktualnosci">
        <h1>
          AKTUALNOŚCI<div id="line"></div>
        </h1>
        <div id="aktualnosci_container">
          {latestNews.map((news) => (
            <NewsCardHome key={news.id} {...news} />
          ))}
        </div>
        <More_button to="/aktualnosci" />
      </div>

      <div id="owcip">
        <div id="owcip_logo1">
          <img src={herb} alt="Herb" />
        </div>
        <div id="owcip_text">
          <p>
            Budowę strony sfinansowano ze środków pochodzących z dotacji
            Opolskiego Centrum Wspierania Inicjatyw Pozarządowych w ramach
            konkursu „Silne NGO 25” umowa nr 5/2025/SN, finansowanego ze
            środków Urzędu Miasta Opola na podstawie umowy
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
