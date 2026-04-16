import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-div">
          
          {/* Logo */}
          <h2 className="logo">
            تحریک اصلاح امت
            <span className="english-logo">
              Tehreek Islahe Ummat
            </span>
          </h2>

          {/* Desktop Nav */}
          <div className="navbar">
            <div className="nav-option">About Us</div>
            <div className="nav-option">Our Initiatives</div>
            <div className="nav-option">Media</div>
            <div className="nav-option">Gallery</div>
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