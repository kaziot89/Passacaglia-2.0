import React from "react";

const Banner_podstrona = ({ image, style }) => {
  return (
    <div
      style={{
        width: "1440px",
        height: "400px",
        margin: "auto",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...style,
      }}
    />
  );
};

export default Banner_podstrona;
