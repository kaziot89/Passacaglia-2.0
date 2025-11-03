import React from "react";
import "../Css/Banner_podstrona.css";

const Banner_podstrona = ({ image, objectPosition = "center", style }) => {
  return (
    <div
      className="banner_podstrona"
      // style={{
      //   position: "relative",
      //   width: "100%",
      //   // minWidth: "1024px",
      //   maxWidth: "1440px",
      //   aspectRatio: "1440 / 385",
      //   margin: "auto",
      //   overflow: "hidden",
      //   ...style,
      // }}
    >
      <img
        src={image}
        alt=""
        style={{
          objectPosition: objectPosition,
        }}
      />
    </div>
  );
};

export default Banner_podstrona;
