import { useParams, NavLink } from "react-router-dom";
import Banner_podstrona from "../components/Banner_podstrona";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Menu_Mobile from "../components/Menu_Mobile";
import Footer from "../components/Footer_web";
import { aktualnosciData } from "./Aktualnosci"; // import tablicy danych
import "../Css/Aktualnosci.css";

const News_page = () => {
  const { id } = useParams();
  const news = aktualnosciData.find((n) => n.id === Number(id));

  if (!news) return <p>Nie znaleziono aktualności</p>;

  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Menu_Mobile />
      <Banner_podstrona image={news.img} objectPosition="center 44%" />

      <div id="news_detail">
        <h1>{news.title}</h1>
        <h5>{news.date}</h5>
        <p>{news.description}</p> {/* <-- tu zamiast news.link */}
        <NavLink to="/aktualnosci" className="media_text_link">
          ← Wróć do aktualności
        </NavLink>
      </div>

      <Footer />
    </div>
  );
};

export default News_page;
