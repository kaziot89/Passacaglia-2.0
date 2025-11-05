import React from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/Logo_banner.png";
import "../Css/Logo_web.css"; // ← dodaj import stylu

const Logo_web = () => {
  return (
    <Link to="/">
      <div className="logo_web"></div>
    </Link>
  );
};

export default Logo_web;
