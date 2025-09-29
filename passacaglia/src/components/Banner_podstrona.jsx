import React from "react";

const Banner_podstrona = ({ image, objectPosition = "center", style }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minWidth: "1024px",
        maxWidth: "1440px",
        aspectRatio: "1440 / 385",
        margin: "auto",
        overflow: "hidden",
        ...style,
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: objectPosition, // ← tu używasz propa
          display: "block",
        }}
      />
    </div>
  );
};

export default Banner_podstrona;
