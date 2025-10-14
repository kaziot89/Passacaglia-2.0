import React, { useState } from "react";
import "../Css/ProjektGallery.css"; // tu będą style grid + modal

const ProjektGallery = ({ gallery, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!gallery || gallery.length === 0) return null;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % gallery.length);
  const prevImage = () =>
    setCurrentIndex((currentIndex - 1 + gallery.length) % gallery.length);

  return (
    <div className="photogallery">
      {/* GRID */}
      {gallery.map((photo, i) => (
        <img
          key={i}
          src={photo}
          alt={`${title} ${i + 1}`}
          onClick={() => openModal(i)}
          className="photogallery-img"
        />
      ))}

      {/* MODAL */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <button className="modal-prev" onClick={prevImage}>
              ‹
            </button>
            <img
              src={gallery[currentIndex]}
              alt={`${title} ${currentIndex + 1}`}
              className="modal-img"
            />
            <button className="modal-next" onClick={nextImage}>
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjektGallery;
