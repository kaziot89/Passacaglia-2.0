import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import zoomIn from "../Pictures/Font_increase.png";
import Contrast from "../Pictures/Contrast_filled.png";
import "../Css/Menu_web.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Menu_Web = () => {
  const [open, setOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeFont, setLargeFont] = useState(false); // stan powiększonej czcionki
  const location = useLocation();

  const isFundacjaActive =
    location.pathname.startsWith("/misja") ||
    location.pathname.startsWith("/zespol") ||
    location.pathname.startsWith("/media");

  // 🔹 Wczytaj ustawienia z localStorage przy starcie
  useEffect(() => {
    const savedContrast = localStorage.getItem("highContrast");
    if (savedContrast === "true") setHighContrast(true);

    const savedFont = localStorage.getItem("largeFont");
    if (savedFont === "true") setLargeFont(true);
  }, []);

  // 🔹 Kontrast – dodaj/usuń klasę body + zapis
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add("high-contrast");
      localStorage.setItem("highContrast", "true");
    } else {
      document.body.classList.remove("high-contrast");
      localStorage.setItem("highContrast", "false");
    }
  }, [highContrast]);

  // 🔹 Powiększenie czcionki +2px toggle
  useEffect(() => {
    const allElements = document.querySelectorAll("*");

    if (largeFont) {
      allElements.forEach((el) => {
        const style = window.getComputedStyle(el);
        if (!el.dataset.originalFontSize) {
          el.dataset.originalFontSize = style.fontSize;
        }
        const currentSize = parseFloat(style.fontSize);
        el.style.fontSize = currentSize + 3 + "px";
      });
      localStorage.setItem("largeFont", "true");
    } else {
      allElements.forEach((el) => {
        if (el.dataset.originalFontSize) {
          el.style.fontSize = el.dataset.originalFontSize;
        }
      });
      localStorage.setItem("largeFont", "false");
    }
  }, [largeFont]);

  return (
    <div id="menuContainer">
      {/* --- O FUNDACJI --- */}
      <div
        style={{
          position: "relative",
          height: "26px",
          display: "flex",
          alignItems: "center", // wyśrodkowanie pionowe
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          className={`parentLink ${isFundacjaActive ? "activeLink" : ""}`}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          O FUNDACJI <FontAwesomeIcon icon={faCaretDown} />
        </button>

        {open && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              color: "white",
              backgroundColor: "#4A727B",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              margin: "27px -27px 0px",
              width: "160px",
              padding: "8px 0",
              zIndex: "10",
            }}
          >
            <NavLink to="/misja">NASZA MISJA</NavLink>
            <NavLink to="/zespol">ZESPÓŁ</NavLink>
            <NavLink to="/media">MEDIA O NAS</NavLink>
          </div>
        )}
      </div>

      {/* --- Reszta linków --- */}
      <NavLink
        to="/projekty"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        PROJEKTY
      </NavLink>

      <NavLink
        to="/aktualnosci"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        AKTUALNOŚCI
      </NavLink>

      <NavLink
        to="/kontakt"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        KONTAKT
      </NavLink>

      <NavLink id="wesprzyjButton" to="/wesprzyj">
        WESPRZYJ
      </NavLink>

      {/* --- Przycisk kontrastu --- */}
      <button id="btn-contrast" onClick={() => setHighContrast(!highContrast)}>
        <img src={Contrast} alt="Kontrast" />
      </button>

      {/* --- Przycisk powiększenia czcionki --- */}
      <button id="btn-zoom-in" onClick={() => setLargeFont(!largeFont)}>
        <img src={zoomIn} alt="Powiększ" />
      </button>
    </div>
  );
};

export default Menu_Web;
