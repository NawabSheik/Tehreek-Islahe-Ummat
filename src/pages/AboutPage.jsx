import React from "react";
import "../styles/About.css";
import HazratImage from "../assets/hazrat.png";

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}

      <div className="about-hero">
        <div className="about-hero-div">

          <div className="about-ornament">
            بسم الله الرحمن الرحيم
          </div>

          <h3 className="about-badge">
            Faith · Unity · Reformation
          </h3>

          <h1 className="about-title">
            About <span>Tehreek Islahe Ummat</span>
          </h1>

          <p className="about-subtitle">
            A movement dedicated to reviving Islamic values,
            strengthening the Ummah, and guiding society through
            authentic knowledge, spiritual awareness, and unity.
          </p>

        </div>
      </div>

      {/* QURAN SECTION */}

      <div className="quran-section">

        <div className="quran-left">
          <h1 className="quran-arabic">
            إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ
            <br />
            حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ
          </h1>

          <h3 className="quran-ref">
            سورة الرعد (١٣:١١)
          </h3>
        </div>

        <span className="quran-line"></span>

        <div className="quran-right">
          <h1 className="quran-translation">
            “Indeed, Allah will not change the condition
            of a people until they change what is within themselves.”
          </h1>

          <h3 className="translation-ref">
            Surah Ar-Ra’d (13:11)
          </h3>
        </div>

      </div>

      {/* ABOUT SECTION */}

      <div className="about-main">
        <div className="about-main-div">

          <div className="about-image">
            <img src={HazratImage} alt="Mufti Ashraf Jilani" />
          </div>

          <div className="about-content">

            <h3 className="section-tag">
              WHO WE ARE
            </h3>

            <h1 className="about-heading">
              Reviving Faith Through
              <span> Knowledge & Unity</span>
            </h1>

            <p className="about-description">
              Tehreek Islahe Ummat is an Islamic movement focused on
              spiritual reformation, Islamic education, and the moral
              upliftment of society. Under the guidance of Mufti Ashraf
              Jilani Azhari, the organization works to spread authentic
              Islamic teachings through Darul Ifta, educational initiatives,
              Islamic gatherings, and community welfare programs.
            </p>

            <p className="about-description">
              Our purpose is to reconnect people with the Quran and
              Sunnah while addressing the challenges faced by modern
              society with wisdom, compassion, and sincerity.
            </p>

            <ul className="about-list">
              <li>Authentic Islamic Guidance</li>
              <li>Educational & Spiritual Programs</li>
              <li>Unity & Welfare of the Ummah</li>
              <li>Youth Awareness & Development</li>
            </ul>

          </div>

        </div>
      </div>

      {/* MISSION & VISION */}

      <div className="mission-vision">

        <div className="mission-card">

          <h3 className="mv-tag">OUR MISSION</h3>

          <h1 className="mv-heading">
            Building a Better Ummah
          </h1>

          <p className="mv-description">
            Our mission is to spread authentic Islamic knowledge,
            inspire positive change, and encourage Muslims to live
            according to the teachings of the Quran and Sunnah.
          </p>

          <blockquote className="mv-quote">
            “The best among you are those who learn the Quran and teach it.”
          </blockquote>

        </div>

        <div className="mission-card">

          <h3 className="mv-tag">OUR VISION</h3>

          <h1 className="mv-heading">
            Faith That Inspires Generations
          </h1>

          <p className="mv-description">
            We envision a united Ummah rooted in knowledge,
            spirituality, compassion, and service to humanity —
            empowering future generations with Islamic values.
          </p>

          <blockquote className="mv-quote">
            “Reformation begins within ourselves, but transforms generations.”
          </blockquote>

        </div>

      </div>

    </div>
  );
};

export default AboutUs;