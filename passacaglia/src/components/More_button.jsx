import React, { useState } from "react";
import { Link } from "react-router-dom";

const More_button = ({ to, id }) => {
  const [hover, setHover] = useState(false);

  const style = {
    backgroundColor: "white",
    color: hover ? "rgba(188, 127, 121, 0.7)" : "#BC7F79",
    border: "2px solid",
    borderRadius: "25px",
    borderColor: hover ? "rgba(188, 127, 121, 0.7)" : "#BC7F79",
    padding: "10px 20px",
    fontSize: "13px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "block",
    margin: "48px auto 0",
    transition: "color 0.1s ease, border-color 0.1s ease",
  };

  return (
    <Link to={to}>
      <button
        id={id}
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        ZOBACZ WIĘCEJ
      </button>
    </Link>
  );
};

export default More_button;
