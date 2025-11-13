import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Menu_mobile.css";
import zoomIn from "../Pictures/Font_increase.png";
import Contrast from "../Pictures/Contrast_filled.png";
import closeIcon from "../Pictures/closeIcon.png";

export default function Menu_Mobile() {
  const [open, setOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeFont, setLargeFont] = useState(false); // stan powiększonej czcionki

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
        el.style.fontSize = currentSize + 2 + "px";
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
    <div className="menu_mobile">
      <div id="icons">
        {/* Przycisk kontrastu */}
        <button
          id="btn-contrast"
          onClick={() => setHighContrast(!highContrast)}
        >
          <img src={Contrast} alt="Kontrast" />
        </button>

        {/* Przycisk powiększenia czcionki */}
        <button id="btn-zoom-in" onClick={() => setLargeFont(!largeFont)}>
          <img src={zoomIn} alt="Powiększ" />
        </button>
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Rozwijane menu */}
      <div className={`mobileLinks ${open ? "open" : ""}`}>
        {/* X do zamknięcia */}
        <button
          className="closeButton"
          onClick={() => setOpen(false)}
          style={{
            width: "32px",
            height: "32px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={closeIcon}
            alt="Zamknij"
            style={{ width: "20px", height: "20px" }}
          />
        </button>

        <NavLink to="/" onClick={(e) => e.preventDefault()}>
          O FUNDACJI
        </NavLink>
        <NavLink to="/misja" onClick={() => setOpen(false)}>
          NASZA MISJA
        </NavLink>
        <NavLink to="/zespol" onClick={() => setOpen(false)}>
          ZESPÓŁ
        </NavLink>
        <NavLink to="/media" onClick={() => setOpen(false)}>
          MEDIA O NAS
        </NavLink>
        <NavLink to="/projekty" onClick={() => setOpen(false)}>
          PROJEKTY
        </NavLink>
        <NavLink to="/aktualnosci" onClick={() => setOpen(false)}>
          AKTUALNOŚCI
        </NavLink>
        <NavLink to="/kontakt" onClick={() => setOpen(false)}>
          KONTAKT
        </NavLink>
        <NavLink id="wesprzyjButton" to="/wesprzyj">
          WESPRZYJ
        </NavLink>
      </div>
    </div>
  );
}
