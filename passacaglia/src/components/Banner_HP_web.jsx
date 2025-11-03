import React, { useState, useEffect } from "react";
import bannerImg1 from "../Pictures/Banner_HP_background.png";
import bannerImg3 from "../Pictures/Banner_HP_background2.png";
import bannerImg2 from "../Pictures/IMG_0231.jpg";
import "../Css/Banner_HP_media_css.css";

const Banner_HP_web = () => {
  const images = [bannerImg1, bannerImg2, bannerImg3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="banner-container"
      // style={{
      //   position: "relative",
      //   width: "100%", // ← pełna szerokość okna
      //   minWidth: "1024px",
      //   maxWidth: "1440px", // ← ale nie większa niż 1440 px
      //   aspectRatio: "1440 / 750", // ← automatyczna wysokość w tej samej proporcji
      //   margin: "auto",
      //   overflow: "hidden",
      // }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize:
              index === 1 ? "cover" : index === 2 ? "cover" : "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "opacity 1s ease-in-out",
            opacity: currentImage === index ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default Banner_HP_web;
