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
        <NavLink to="/wesprzyj" onClick={() => setOpen(false)}>
          WESPRZYJ
        </NavLink>
      </div>
    </div>
  );
}
