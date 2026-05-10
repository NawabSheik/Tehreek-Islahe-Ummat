import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-div">
          
          {/* Logo */}
          <h2 className="logo">
            <Link to="/" className="nav-link">
               تحریک اصلاح امت
            </Link>
            
            <span className="english-logo"><Link to="/" className="nav-link">
              Tehreek Islahe Ummat</Link>
            </span>
            
          </h2>

          {/* Desktop Nav */}
          <div className="navbar">
            <div className="nav-option"><Link to="/about" className="nav-link">About Us </Link></div>
            <div className="nav-option"><Link to="/initiatives" className="nav-link">Our Initiatives </Link></div>
            <div className="nav-option"> <Link to="/media" className="nav-link"> Media </Link></div>
            <div className="nav-option"><Link to="/gallery" className="nav-link">Gallery </Link> </div>
          </div>

          {/* Right */}
          <div className="right-section">
            <button className="contact-btn">Contact Us</button>

            {/* Hamburger */}
            <div
              className={`hamburger ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* FULL SCREEN MENU */}
      <div className={`fullscreen-menu ${isOpen ? "open" : ""}`}>
        
        {/* Close Button */}
        <div className="close-btn" onClick={() => setIsOpen(false)}>
          ✕
        </div>

        {/* Menu Items */}
        <div className="menu-items">
          <div className="menu-item">About Us</div>
          <div className="menu-item">Our Services</div>
          <div className="menu-item">Media</div>
          <div className="menu-item">Gallery</div>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Header;