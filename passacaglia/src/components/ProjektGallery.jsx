import React, { useState, useEffect, useRef } from "react";
import "../Css/ProjektGallery.css";

const ProjektGallery = ({ gallery, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentCity, setCurrentCity] = useState("");

  const imageRefs = useRef([]); // referencje do wszystkich zdjęć

  // --- fade-in efekt (Intersection Observer) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // już nie trzeba obserwować
          }
        });
      },
      { threshold: 0.2 } // pojawia się przy ~20% widoczności
    );

    imageRefs.current.forEach((img) => img && observer.observe(img));

    return () => observer.disconnect();
  }, [gallery]);

  // --- reszta jak wcześniej ---
  if (!gallery || (Array.isArray(gallery) && gallery.length === 0)) return null;

  const openModal = (index, city, galleryArr) => {
    setCurrentIndex(index);
    setCurrentCity(city);
    setCurrentGallery(galleryArr);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () =>
    setCurrentIndex((currentIndex + 1) % currentGallery.length);
  const prevImage = () =>
    setCurrentIndex(
      (currentIndex - 1 + currentGallery.length) % currentGallery.length
    );

  return (
    <div className="photogallery">
      {Array.isArray(gallery) ? (
        gallery.map((photo, i) => (
          <img
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            src={photo}
            alt={`${title} ${i + 1}`}
            onClick={() => openModal(i, title, gallery)}
            className="photogallery-img fade-in"
          />
        ))
      ) : (
        Object.entries(gallery).map(([city, photos]) => (
          <div key={city} className="gallery-city-section">
            <h3 className="gallery-city-title">{city}</h3>
            <div className="gallery-city-grid">
              {photos.map((photo, i) => (
                <img
                  key={i}
                  ref={(el) => (imageRefs.current.push(el))}
                  src={photo}
                  alt={`${title} ${city} ${i + 1}`}
                  onClick={() => openModal(i, city, photos)}
                  className="photogallery-img fade-in"
                />
              ))}
            </div>
          </div>
        ))
      )}

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <button className="modal-prev" onClick={prevImage}>
              ‹
            </button>
            <img
              src={currentGallery[currentIndex]}
              alt={`${title} ${currentCity} ${currentIndex + 1}`}
              className="modal-img"
            />
            <button className="modal-next" onClick={nextImage}>
              ›
            </button>
            <p className="modal-caption">
              {currentCity} — {currentIndex + 1}/{currentGallery.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjektGallery;


/*import React, { useState } from "react";
import "../Css/ProjektGallery.css";

const ProjektGallery = ({ gallery, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentCity, setCurrentCity] = useState("");

  if (!gallery || (Array.isArray(gallery) && gallery.length === 0)) return null;

  const openModal = (index, city, galleryArr) => {
    setCurrentIndex(index);
    setCurrentCity(city);
    setCurrentGallery(galleryArr);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((currentIndex + 1) % currentGallery.length);

  const prevImage = () =>
    setCurrentIndex(
      (currentIndex - 1 + currentGallery.length) % currentGallery.length
    );

  return (
    <div className="photogallery">
      {Array.isArray(gallery) ? (
        gallery.map((photo, i) => (
          <img
            key={i}
            src={photo}
            alt={`${title} ${i + 1}`}
            onClick={() => openModal(i, title, gallery)}
            className="photogallery-img"
          />
        ))
      ) : (
        <div className="gallery-city-container">
          {Object.entries(gallery).map(([city, photos]) => (
            <div key={city} className="gallery-city-section">
              <h3 className="gallery-city-title">{city}</h3>
              <div className="gallery-city-grid">
                {photos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt={`${title} ${city} ${i + 1}`}
                    onClick={() => openModal(i, city, photos)}
                    className="photogallery-img"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <button className="modal-prev" onClick={prevImage}>
              ‹
            </button>
            <img
              src={currentGallery[currentIndex]}
              alt={`${title} ${currentCity} ${currentIndex + 1}`}
              className="modal-img"
            />
            <button className="modal-next" onClick={nextImage}>
              ›
            </button>
            <p className="modal-caption">
              {currentCity} — {currentIndex + 1}/{currentGallery.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjektGallery;
*/