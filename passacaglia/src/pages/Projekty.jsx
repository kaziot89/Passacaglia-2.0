import React from "react";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import Banner_podstrona from "../components/Banner_podstrona";
import projektyImg from "../Pictures/banner1.jpg"
import Footer from "../components/Footer_web";
import "../Css/Projekty.css";
import "../Css/Button.css";

const Projekty = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Banner_podstrona
        image={projektyImg}
        style={{ backgroundPosition: `center 875px` }}
        />

      <div id="projekty_page">
        <div id="aktualne_projekty">
        
          <h1>
            AKTUALNE PROJEKTY<div id="line"></div>
          </h1>

          <div id="projekty_aktualne_container">
           
          </div>
        </div>
        <div id="archiwalne_projekty">
          <h1>ARCHIWALNE PROJEKTY<div id="line"></div></h1>
          <div id="projekty_archiwalne_container"></div>   
        </div>
      
        <Footer />
      </div>
    </div>
  );
};

export default Projekty;
