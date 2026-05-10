
import React from "react";
import "../styles/Gallery.css";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p1.jpg";
import p3 from "../assets/p1.jpg";
import p4 from "../assets/p1.jpg";
import p5 from "../assets/p1.jpg";
import p6 from "../assets/p1.jpg";

const images = [p1, p2, p3, p4, p5, p6];

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
                src={image}
                alt="gallery"
              />

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default GalleryPage;
