import { NavLink } from "react-router-dom";
import Banner_podstrona from "../components/Banner_podstrona";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Menu_Mobile from "../components/Menu_Mobile";
import kontaktImg from "../Pictures/kontakt.jpg";
import malyKontaktImg from "../Pictures/kontakt_mob.png"; // <-- nowy obraz
import Footer from "../components/Footer_web";

import "../Css/Kontakt.css";

const Kontakt = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Menu_Mobile />
      <Banner_podstrona image={kontaktImg} objectPosition="center 48%" />
      <div id="kontakt_container">
        <h1>
          SKONTAKTUJ SIĘ Z NAMI<div id="line"></div>
        </h1>
        <div className="contact-wrapper">
          {/* Lewa kolumna – dane kontaktowe */}
          <div className="contact-info">
            <h2>
              Fundacja Promocji
              <br />
              Muzyki Dawnej „Passacaglia”
            </h2>
            <p>
              Ul. Kościuszki 13/6
              <br />
              45-062 Opole
            </p>
            <p>
              tel. 600&nbsp;491&nbsp;650
              <br />
              <a href="mailto:fundacjapassacaglia@gmail.com">
                fundacjapassacaglia@gmail.com
              </a>
            </p>
            <p style={{ margin: "20px 0" }}>
              NIP 7543365554
              <br />
              KRS 0001078197
            </p>
            <p style={{ marginBottom: "20px" }}>
              Rachunek złotówkowy dla darowizn:
              <br />
              07&nbsp;1140&nbsp;2004&nbsp;0000&nbsp;3102&nbsp;8442&nbsp;0678
            </p>
            <p>
              Przy darowiznach prosimy o wpisanie tytułu przelewu:
              <em> Darowizna na cele statutowe</em>
            </p>
          </div>

          {/* Prawa kolumna – formularz */}
          {/* <form className="contact-form">
            <input type="text" name="name" placeholder="   Imię i nazwisko" />
            <input type="email" name="email" placeholder="   Twój e-mail" />
            <textarea
              name="message"
              placeholder="Wiadomość"
              rows="6"
            ></textarea>

            <div className="checkbox-group">
              <div id="labels">
                <label>
                  <input type="checkbox" name="rodo" required />
                  Zgoda na przetwarzanie danych osobowych*
                </label>

                <label>
                  <input type="checkbox" name="privacy" />
                  Akceptuję politykę prywatności
                </label>
              </div>

              <button type="submit" className="submit-btn">
                WYŚLIJ
              </button>
            </div>
          </form> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Kontakt;
