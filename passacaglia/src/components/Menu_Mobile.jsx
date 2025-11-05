import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Menu_mobile.css";
import zoomIn from "../Pictures/Font_increase.png";
import Contrast from "../Pictures/Contrast_filled.png";
import closeIcon from "../Pictures/closeIcon.png";

export default function Menu_Mobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu_mobile">
      <div id="icons">
        {/* Przycisk z ikoną Contrast */}
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontWeight: "normal",
          }}
        >
          <img
            src={Contrast}
            alt="Kontrast"
            style={{ width: "16px", height: "16px" }}
          />
        </button>

        {/* Przycisk z ikoną Zoom */}
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={zoomIn}
            alt="Powiększ"
            style={{ width: "16px", height: "16px" }}
          />
        </button>
      </div>
      {/* Hamburger po prawej */}
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
          {" "}
          <img
            src={closeIcon}
            alt="Powiększ"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
        <NavLink to="/" onClick={(e) => e.preventDefault()}>
          O FUNDACJI
        </NavLink>

        <NavLink
          to="/misja"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setOpen(false)}
        >
          NASZA MISJA
        </NavLink>

        <NavLink
          to="/zespol"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setOpen(false)}
        >
          ZESPÓŁ
        </NavLink>

        <NavLink
          to="/media"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setOpen(false)}
        >
          MEDIA O NAS
        </NavLink>

        <NavLink
          to="/projekty"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setOpen(false)}
        >
          PROJEKTY{" "}
        </NavLink>

        <NavLink
          to="/aktualnosci"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setOpen(false)}
        >
          AKTUALNOŚCI
        </NavLink>

        <NavLink
          to="/kontakt"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setOpen(false)}
        >
          KONTAKT
        </NavLink>

        <NavLink
          id="wesprzyjButton"
          to="/wesprzyj"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          WESPRZYJ
        </NavLink>
      </div>
    </div>
  );
}
