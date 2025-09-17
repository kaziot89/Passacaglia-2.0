import React, { useState, useEffect } from "react";
import bannerImg1 from "../Pictures/Banner_HP_background.png";
import bannerImg2 from "../Pictures/Banner_HP_background2.png";

const Banner_HP_web = () => {
  const images = [bannerImg1, bannerImg2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "1440px",
        height: "750px",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${img})`,
            backgroundSize: index === 1 ? "120% auto" : "cover",
            backgroundPosition: "center",
            transition: "opacity 1s ease-in-out",
            opacity: currentImage === index ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default Banner_HP_web;
