import React from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/Logo_banner.png";

const Logo_web = () => {
  return (
    <Link to="/">
      {" "}
      {/* ← kliknięcie przeniesie na stronę główną */}
      <div
        style={{
          position: "absolute",
          width: "188px",
          height: "208px",
          marginLeft: "36px",
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          zIndex: "10",
          cursor: "pointer", // pokazuje, że to klikalne
        }}
      ></div>
    </Link>
  );
};

export default Logo_web;
