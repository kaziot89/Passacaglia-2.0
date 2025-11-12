import React from "react";
import { useParams, Link } from "react-router-dom";
import { projektyData } from "../data/projektyData";
import ProjektGallery from "../components/ProjektGallery";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Menu_Mobile from "../components/Menu_Mobile";
import Banner_podstrona from "../components/Banner_podstrona";
import Footer from "../components/Footer_web";
import projektyImg from "../Pictures/banner_projekty.jpg";
import "../Css/ProjektyDetails.css";

const ProjektyDetails = () => {
  const { slug } = useParams();
  const projekt = projektyData.find((p) => p.slug === slug);

  if (!projekt) {
    return <div className="projekt-not-found">Nie znaleziono projektu.</div>;
  }

  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Menu_Mobile />
      <Banner_podstrona image={projektyImg} objectPosition="center 21%" />
      <div className="projekt-details-page">
        <div className="projekt-title">{projekt.title}</div>
        <div className="projekt-details">
          <img
            src={projekt.image}
            alt={projekt.title}
            className="projekt-image"
          />
          <div className="projekt-info">
            {/* <h1>{projekt.title}</h1> */}
            <div className="projekt-description">
              {projekt.description
                .trim()
                .split(/\n\s*\n/)
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>

            {/* <a href={projekt.link} target="_blank" rel="noopener noreferrer" className="projekty_btn">
            Odwiedź stronę projektu
            </a> */}
            <h3>Galeria zdjęć:</h3>
            <ProjektGallery gallery={projekt.gallery} title={projekt.title} />

            <Link to="/projekty" className="projekty_back_link">
              ← Powrót do listy projektów
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjektyDetails;
