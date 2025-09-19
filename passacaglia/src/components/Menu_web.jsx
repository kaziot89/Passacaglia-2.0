import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import zoomIn from "../Pictures/Font_increase.png";
import Contrast from "../Pictures/Contrast_filled.png";
import "../Css/Menu_web.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Menu_Web = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // pozwala sprawdzić aktualny URL

  // Sprawdzanie, czy aktualny URL jest podstroną "O FUNDACJI"
  const isFundacjaActive =
    location.pathname.startsWith("/misja") ||
    location.pathname.startsWith("/zespol") ||
    location.pathname.startsWith("/media");

  return (
    <div id="menuContainer">
      {/* O FUNDACJI z rozwijanym menu */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setOpen(!open)}
          className={`parentLink ${isFundacjaActive ? "activeLink" : ""}`}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          O FUNDACJI <FontAwesomeIcon icon={faCaretDown} />
        </button>
        {open && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              color: "white",
              backgroundColor: "#4A727B",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              margin: "32px 0 0 0",
              width: "160px",
              padding: "8px 0",
              zIndex: "10",
            }}
          >
            <NavLink
              to="/misja"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              style={{
                display: "block",
                padding: "8px 16px",
                color: "white",
                fontWeight: "normal",
                textDecoration: "none",
              }}
            >
              NASZA MISJA
            </NavLink>
            <NavLink
              to="/zespol"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              style={{
                display: "block",
                padding: "8px 16px",
                color: "white",
                fontWeight: "normal",
                textDecoration: "none",
              }}
            >
              ZESPÓŁ
            </NavLink>
            <NavLink
              to="/media"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              style={{
                display: "block",
                padding: "8px 16px",
                color: "white",
                fontWeight: "normal",
                textDecoration: "none",
              }}
            >
              MEDIA O NAS
            </NavLink>
          </div>
        )}
      </div>

      {/* Reszta linków */}
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

      {/* Wesprzyj */}
      <NavLink
        id="wesprzyjButton"
        to="/wesprzyj"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        WESPRZYJ
      </NavLink>

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
          style={{ width: "24px", height: "24px" }}
        />
      </button>
    </div>
  );
};

export default Menu_Web;
