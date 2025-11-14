import Banner_podstrona from "../components/Banner_podstrona";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Menu_Mobile from "../components/Menu_Mobile";
import Footer from "../components/Footer_web";
import zespolImg from "../Pictures/banner1.jpg";
import joannaImg from "../Pictures/joanna.png";
import monikaImg from "../Pictures/monika.png";
import "../Css/Zespol.css";
const Zespol = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Menu_Mobile />
      <Banner_podstrona image={zespolImg} objectPosition="center 70%" />
      <div id="zespol_page">
        <h1>
          ZESPÓŁ <div id="line"></div>
        </h1>
        <div id="zespol_container">
          <div className="person_container">
            <div
              className="picture"
              style={{ backgroundImage: `url(${joannaImg})` }}
            ></div>
            <div className="person_text">
              <h2>Joanna Owczarek-Ciszewska</h2>
              <h4>PREZES ZARZĄDU</h4>
              <p>
                Absolwentka Akademii Muzycznej w Krakowie (fortepian),
                Hochschule für Musik und Theater w Monachium (fortepian
                historyczny) i Akademii Muzycznej w Katowicach (klawesyn).
                Studiowała także Historię Sztuki na Uniwersytecie Jagiellońskim
                w Krakowie. Laureatka międzynarodowych konkursów pianistycznych
                i kameralnych. Za swoje osiągnięcia została dwukrotnie
                uhonorowana Nagrodą Prezydenta Miasta Gdańska, Stypendium
                Marszałka Województwa Pomorskiego, a w roku 2023 Stypendium
                twórczym Marszałka Województwa Opolskiego, w ramach którego
                zajęła się aranżacją utworów związanych z regionem Śląska
                Opolskiego na skład kameralny z klawesynem. Przygodę z
                wykonawstwem na historycznych instrumentach klawiszowych
                rozpoczęła w 2010 r. podczas pobytu w Salzburgu w ramach
                stypendium Sokrates-Erasmus, zgłębiając tajniki gry na
                pianoforte pod okiem prof. Wolfganga Brunnera, a w następnych
                latach na klawikordzie (Akademia Muzyczna w Krakowie, klasa mgr
                Marii Erdman). Uczestniczyła także w kursach mistrzowskich
                poświęconych instrumentom historycznym prowadzonych przez
                artystów takich jak Katarzyna Drogosz, Jos van Immerseel,
                Christine Schornsheim, Menno van Delft, Alexei Lubimov, Malcolm
                Bilson, Petra Matejova i Andreas Staier. Występuje jako solistka
                i kameralistka (m.in. z Trio ohne Worte i Duo Veloce) w kraju i
                zagranicą, specjalizując się w muzyce XVIII i początku XIX w.
                Jako klawesynistka współpracuje również z orkiestrą Filharmonii
                Opolskiej. Działalność koncertową łączy z pracą pedagogiczną w
                Państwowej Szkole Muzycznej I i II st. W Opolu, ma na swoim
                koncie również publikacje poświęcone zagadnieniom wykonawstwa
                historycznego.
              </p>
            </div>
          </div>
          <div className="person_container">
            <div
              className="picture"
              style={{ backgroundImage: `url(${monikaImg})` }}
            ></div>
            <div className="person_text">
              <h2>Monika Targowska</h2>
              <h4>WICEPREZES ZARZĄDU</h4>
              <p>
                Flecistka, ukończyła dwa kierunki studiów w Akademii Muzycznej w
                Łodzi i we Wrocławiu, stypendium w Hochschule für Musik und
                Theater w Hanowerze oraz studia podyplomowe z dziennikarstwa
                muzycznego w Collegium Civitas w Warszawie. Uczestniczyła w
                wielu kursach i konkursach fletowych. Od 2006 roku związana z
                zespołem orkiestry symfonicznej Filharmonii Opolskiej, z którą
                koncertuje jako solistka i kameralistka. Interesuje się
                historycznymi praktykami wykonawczymi, gra zarówno na fletach
                współczesnych, jak i barokowych. Współzałożycielka zespołu
                kameralistów barokowych Sanssouci. Od wielu lat prowadzi klasy
                fletu w szkołach muzycznych I stopnia, w których aktywnie
                propaguje muzykę dawną. Publikuje teksty poświęcone muzyce i
                edukacji, m.in. w kwartalniku "Szkoła artystyczna" oraz w
                internetowym magazynie meakultura.pl. Współautorka innowacji
                edukacyjnej „Instrumentownik” wydanej przez Fundację Meakultura.
                W 2021 roku otrzymała nagrodę Centrum Edukacji Artystycznej, a w
                roku 2023 stypendium twórcze Marszałka Województwa Opolskiego w
                kategorii upowszechniania kultury.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Zespol;
