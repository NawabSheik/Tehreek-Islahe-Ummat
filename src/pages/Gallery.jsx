import React from "react";
import "../styles/Gallery.css";

// Auto-load 64 images from gallery folder
const imageModules = import.meta.glob("../assets/gallery/*.jpeg", {
  eager: true,
});

const images = Object.values(imageModules).map((module) => module.default);

const GalleryPage = () => {
  return (
    <div className="gallery-page">

      {/* HERO */}
      <div className="gallery-hero">
        <div className="gallery-hero-div">

          <div className="gallery-ornament">
            وَذَكِّرْهُم بِأَيَّامِ اللَّهِ
          </div>

          <h3 className="gallery-badge">
            Moments • Gatherings • Memories
          </h3>

          <h1 className="gallery-title">
            Photo <span>Gallery</span>
          </h1>

          <p className="gallery-subtitle">
            Explore moments from Islamic gatherings,
            Mehfil-e-Milad, conferences, educational
            programs, and community events organized by
            Tehreek Islahe Ummat.
          </p>

        </div>
      </div>

      {/* GALLERY */}
      <div className="gallery-section">

        <div className="gallery-head">
          <h3 className="gallery-small-heading">
            EVENT HIGHLIGHTS
          </h3>

          <h1 className="gallery-main-heading">
            Capturing Moments of Faith & Unity
          </h1>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={image.default || image}
                alt={`gallery-${index + 1}`}
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default GalleryPage;