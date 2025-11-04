import { NavLink } from "react-router-dom";
import Banner_podstrona from "../components/Banner_podstrona";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Menu_Mobile from "../components/Menu_Mobile";
import Footer from "../components/Footer_web";
import aktImg from "../Pictures/aktualnosci.jpg";
import boxes from "../Pictures/boxes_img.png";
import computer from "../Pictures/computer.png";
import "../Css/Aktualnosci.css";

// Dane aktualności trzymamy w tym samym pliku
const aktualnosciData = [
  {
    id: 1,
    title: "Dotacja na zakup sprzętu technicznego",
    date: "13.04.2025",
    description:
      "Pod koniec czerwca 2025 roku ogłoszono wyniki oceny merytorycznej konkursu o mikrodotacje w ramach projektu Kierunek Nowe FIO 2025 prowadzonego przez Opolskie Centrum Inicjatyw Pozarządowych. Celem głównym projektu było zwiększenie zaangażowania obywateli i organizacji pozarządowych w życie publiczne poprzez zrealizowanie inicjatyw, które pobudzą aktywność społeczną oraz potencjał ludzki i infrastrukturalny. Wpłynęły aż 183 wnioski, a nasza Fundacja z wnioskiem o zakup niezbędnego sprzętu technicznego uplasowała się na wysokiej 39. pozycji, uzyskując dofinansowanie. Dzięki temu wsparciu, będziemy mogli zakupić m.in. mikrofony, pulpity, reflektory, roll-up oraz drukarkę. Projekt finansowany ze środków Narodowego Instytutu Wolności Centrum Rozwoju Społeczeństwa Obywatelskiego w ramach Programu Fundusz Inicjatyw Obywatelskich NOWEFIO na lata 2021-2030.",
    img: boxes,
  },
  {
    id: 2,
    title: "Strona internetowa Fundacji",
    date: "13.04.2025",
    description: "Pełny opis wydarzenia 2...",
    img: computer,
  },
  // {
  //   id: 3,
  //   title: "Opis wydarzenia 3",
  //   date: "10.11.2025",
  //   description: "Pełny opis wydarzenia 3...",
  //   img: aktImg,
  // },
];

// Komponent pojedynczego kafelka
const NewsCard = ({ id, title, date, img }) => (
  <div className="akt_sub">
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

// Główny komponent Aktualności
const Aktualnosci = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Menu_Mobile />
      <Banner_podstrona image={aktImg} objectPosition="center 44%" />

      <div id="aktualnosci_sub">
        <h1>
          CO NOWEGO<div id="line"></div>
        </h1>

        <div id="aktualnosci_container_sub">
          {aktualnosciData.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aktualnosci;
export { aktualnosciData };
