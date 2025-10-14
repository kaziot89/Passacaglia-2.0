import React from "react";
import { Link } from "react-router-dom";
import { projektyData } from "../data/projektyData";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Menu_Mobile from "../components/Menu_Mobile";
import Banner_podstrona from "../components/Banner_podstrona";
import Footer from "../components/Footer_web";
import projektyImg from "../Pictures/banner_projekty.jpg";
import "../Css/Projekty.css";

const Projekty = () => {
  const aktualne = projektyData.filter(p => p.category === "aktualne");
  const archiwalne = projektyData.filter(p => p.category === "archiwalne");

  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Menu_Mobile />
      <Banner_podstrona image={projektyImg} objectPosition="center 21%" />

      <div id="projekty_page">
        <section id="aktualne_projekty">
          <h1>AKTUALNE PROJEKTY<div id="line"></div></h1>
          <div className="projekty_container_act">
            {aktualne.map(projekt => (
              <div key={projekt.id} className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{ backgroundImage: `url(${projekt.image})` }}
                >
                  <Link
                    to={`/projekty/${projekt.slug}`}
                    className="projekty_text_link projekty_text"
                  >
                    <h5><i>{projekt.title}</i></h5>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="archiwalne_projekty">
          <h1>ARCHIWALNE PROJEKTY<div id="line"></div></h1>
          <div className="projekty_container_arc">
            {archiwalne.map(projekt => (
              <div key={projekt.id} className="projekty_item">
                <div
                  className="projekty_photo"
                  style={{ backgroundImage: `url(${projekt.image})` }}
                >
                  <Link
                    to={`/projekty/${projekt.slug}`}
                    className="projekty_text_link projekty_text"
                  >
                    <h5><i>{projekt.title}</i></h5>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Projekty;
