import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Menu_mobile.css";

export default function Menu_Mobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu_mobile">
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
        <button className="closeButton" onClick={() => setOpen(false)}>
          &times;
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
          MADIA O NAS
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
