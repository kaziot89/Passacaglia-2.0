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
    date: "15.11.2025",
    description:
      'W listopadzie tego roku zakończyłyśmy projekt "Zakup sprzętu technicznego na potrzeby działalności statutowej Fundacji Passacaglia" sfinansowany z mikrodotacji projektu Kierunek Nowe FIO 2025 prowadzonego przez Opolskie Centrum Inicjatyw Pozarządowych. Dzięki temu wsparciu możliwy był zakup sprzętu technicznego, niezbędnego do prowadzenia działalności kulturalno-edukacyjnej i statutowej: urządzenia wielofunkcyjnego, pulpitów do nut, profesjonalnego oświetlenia (reflektory i lampki do pulpitów), mikrofonów i roll-upu z grafiką fundacji. Sprzęt został skatalogowany, opisany zgodnie z umową i jest obecnie użytkowany w bieżącej pracy zespołu organizacyjno-artystycznego naszej fundacji. Projekt został sfinansowany ze środków Narodowego Instytutu Wolności Centrum Rozwoju Społeczeństwa Obywatelskiego w ramach Programu Fundusz Inicjatyw Obywatelskich NOWEFIO na lata 2021-2030.',
    img: boxes,
  },
  {
    id: 2,
    title: "Strona internetowa Fundacji",
    date: "15.11.2025",
    description:
      "W dniu 06.06.2025 podpisałyśmy umowę o realizację zadania publicznego p.t. „Budowa strony internetowej Fundacji Promocji Muzyki Dawnej Passacaglia” z Opolskim Centrum Wspierania Inicjatyw Pozarządowych. Celem projektu jest podniesienie poziomu promocyjnego Fundacji Passacaglia przez profesjonalizację i zwiększenie zasięgu komunikacji w Internecie, i dotarcie tym samym do większej ilości odbiorców. Dzięki wsparciu z dotacji powstała nowoczesna i funkcjonalna strona internetowa, umożliwiająca znalezienie wszelkich potrzebnych informacji o fundacji oraz promocję naszej działalności w sieci.Zadanie zostało sfinansowane ze środków pochodzących od OCWIP oraz Urzędu Miasta Opola w ramach programu Silne NGO 2025.",
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
