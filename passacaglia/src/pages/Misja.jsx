import React from "react";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Menu_Mobile from "../components/Menu_Mobile";
import Banner_podstrona from "../components/Banner_podstrona";
import misjaImg from "../Pictures/banner1.jpg";
import Footer from "../components/Footer_web";
import "../Css/Misja.css"; // osobny plik CSS dla tej strony
import "../Css/Button.css"; // osobny plik CSS dla tej strony

const Misja = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Menu_Mobile />
      <Banner_podstrona image={misjaImg} objectPosition="center 70%" />

      <div id="misja_page">
        <h1>
          NASZA MISJA <div id="line"></div>
        </h1>

        <div id="misja_container">
          <p id="cele_paragraph">
            Fundacja Promocji Muzyki Dawnej „Passacaglia” powstała w 2023 roku w
            Opolu z inicjatywy Joanny Owczarek-Ciszewskiej i Moniki Targowskiej.
            Swoją nazwę zawdzięcza wywodzącej się z XVII-wiecznego tańca formie
            wariacji, opartych na stałym temacie (ostinato), pojawiającym się w
            partii basu. Podobnie stałym motywem działań Fundacji jest muzyka
            dawna, szczególnie okresów baroku i klasycyzmu. Celem Fundacji jest
            działalność w obszarze kultury, sztuki, ochrony dóbr kultury i
            dziedzictwa narodowego oraz nauki, edukacji i wychowania, obejmująca
            przede wszystkim: propagowanie muzyki klasycznej, ze szczególnym
            uwzględnieniem muzyki dawnej; wspieranie i promocję muzyków, zarówno
            dorosłych, jak i uzdolnionych dzieci i młodzieży, w tym związanych
            ze środowiskiem lokalnym obszaru działalności fundacji;
            popularyzację muzyki klasycznej w środowiskach zagrożonych
            wykluczeniem kulturalnym; rozwój wykonawstwa historycznie
            poinformowanego; inicjowanie działań syntetyzujących różne dziedziny
            sztuki i nauki z muzyką.
          </p>
          <div class="button_container">
            <button class="oval_button">POBIERZ STATUT</button>
            <button class="oval_button">POBIERZ LOGOTYPY</button>
          </div>
          <div id="cele_container">
            <h2>Fundacja realizuje swoje cele poprzez:</h2>
            <h3>Organizowanie koncertów i festiwali muzyki klasycznej</h3>
            <p>
              Organizacja koncertów muzyki dawnej na instrumentach historycznych
              to rdzeń działalności fundacji. Współpracujemy z ośrodkami
              kultury, muzeami, instytucjami i organizacjami pozarządowymi przy
              produkcji koncertów o jak najwyższym poziomie artystycznym.
              Działania te służą zwiększaniu świadomości kulturowej, wspierają
              rozwój wrażliwości muzycznej, sprzyjają również integracji
              społecznej oraz budowaniu lokalnej wspólnoty. Naszym flagowym
              przedsięwzięciem jest cykliczny festiwal “Jesień z muzyką dawną”,
              odbywający się w historycznych lokalizacjach na Śląsku Opolskim.
            </p>
            <h3>Organizację wykładów, spotkań, warsztatów </h3>
            <p>
              Niezwykle ważna jest dla nas działalność edukacyjna. Organizowane
              przez Fundację warsztaty i wykłady popularyzujące muzykę dawną
              służą nie tylko jej ochronie, ale i aktywnemu praktykowaniu —
              poprzez przybliżanie kontekstu historycznego, stylistyki,
              ornamentyki i brzmienia instrumentów z epoki. Wydarzenia
              edukacyjne to również okazja do spotkań ludzi z różnych środowisk:
              profesjonalistów, amatorów, pedagogów i uczniów. Tego rodzaju
              działania służą rozwojowi społeczności zainteresowanej muzyką
              dawną - wykształconych wykonawców i świadomych odbiorców.
            </p>
            <h3>Organizację interdyscyplinarnych wydarzeń artystycznych</h3>
            <p>
              Synteza muzyki z innymi dziedzinami sztuki to fascynujące pole do
              eksploracji. Z chęcią podejmujemy działania, które łączą różne
              dziedziny artystyczne. W ten sposób Fundacja nie tylko przyczynia
              się do ochrony i upowszechniania muzyki dawnej, ale również
              inspiruje nowe formy twórczości artystycznej oraz rozwija dialog
              między epokami, stylami i lokalnymi środowiskami.
            </p>
            <h3>Prace badawcze i edytorskie</h3>
            <p>
              Jednym z istotnych celów statutowych Fundacji jest prowadzenie
              prac badawczych i edytorskich nad dawnymi materiałami nutowymi,
              mających na celu dokumentację, ochronę, rekonstrukcję i
              udostępnienie muzycznego dziedzictwa przeszłości. Działania te są
              podstawą do dalszej popularyzacji muzyki dawnej, umożliwiają jej
              wykonawstwo w zgodzie z kontekstem historycznym oraz wspierają
              rozwój wiedzy muzykologicznej.
            </p>
            <h3>Prowadzenie działalności wydawniczej </h3>
            <p>
              Ważnym aspektem realizacji celów statutowych jest działalność
              wydawnicza Fundacji, której zadaniem jest promowanie wiedzy na
              temat muzyki dawnej, udostępnianie materiałów źródłowych oraz
              wspieranie edukacji muzycznej. Uważamy publikacje za ważne
              narzędzie służące zachowaniu i rozpowszechnianiu dziedzictwa
              muzycznego oraz budowaniu świadomości historycznej i estetycznej
              wśród szerokiego grona odbiorców.
            </p>
            <h3>Realizację filmów oraz nagrań audio</h3>
            <p>
              Podejmujemy działania związane z profesjonalną produkcją
              materiałów audio i wideo, dokumentujących naszą działalność
              artystyczną. Nagrania te pełnią nie tylko funkcję archiwalną, ale
              także edukacyjną, promocyjną i popularyzatorską – umożliwiając
              utrwalenie twórczości artystów oraz wydarzeń organizowanych przez
              Fundację.
            </p>
            <h3>Zakup oraz konserwację instrumentów i innych sprzętów</h3>
            <p>
              Zakup i konserwacja instrumentów historycznych lub ich wiernych
              kopii stanowi ważny element dbałości o autentyczność wykonawczą
              muzyki dawnej. Celom Fundacji służą również zakupy sprzętów
              estradowych, technicznych i biurowych, niezbędnych przy
              organizacji wydarzeń. Dzięki tym działaniom zapewniamy wysoką
              jakość artystyczną naszych projektów oraz możliwość pracy w
              profesjonalnych warunkach- zarówno dla artystów, jak i
              koordynatorów czy edukatorów.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Misja;
