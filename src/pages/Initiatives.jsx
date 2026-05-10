import React from "react";
import "../styles/Initiatives.css";

const initiatives = [
  {
    title: "Darul Ifta",
    description:
      "Receive authentic Islamic rulings and guidance on matters of daily life, worship, family matters, business, and social issues from qualified scholars.",
    button: "Submit a Question",
  },
  {
    title: "Mehfil-e-Milad",
    description:
      "Spiritual gatherings celebrating the blessed birth of Prophet Muhammad ﷺ through naats, bayans, durood, and collective remembrance.",
    button: "View Events",
  },
  {
    title: "Ijtema & Conferences",
    description:
      "Large-scale Islamic gatherings bringing together scholars, students, and communities for learning, unity, and spiritual development.",
    button: "Explore Programs",
  },
  {
    title: "Islamic Education",
    description:
      "Educational initiatives focused on Quran, Hadith, Fiqh, Aqeedah, and Islamic ethics for children, youth, and adults.",
    button: "Learn More",
  },
  {
    title: "Lectures & Bayans",
    description:
      "Online and offline Islamic lectures by Mufti Ashraf Jilani Azhari covering contemporary and spiritual topics for the Ummah.",
    button: "Watch Videos",
  },
  {
    title: "Community Welfare",
    description:
      "Programs dedicated to social welfare, counselling, nikah assistance, charity initiatives, and helping those in need.",
    button: "Get Involved",
  },
];

const Initiatives = () => {
  return (
    <div className="initiatives-page">

      {/* HERO SECTION */}

      <div className="initiative-hero">
        <div className="initiative-hero-div">

          <div className="initiative-ornament">
            خدمة الأمة عبادة
          </div>

          <h3 className="initiative-badge">
            Service · Education · Reformation
          </h3>

          <h1 className="initiative-title">
            Our <span>Initiatives</span>
          </h1>

          <p className="initiative-subtitle">
            Empowering communities through Islamic education,
            spiritual guidance, social welfare, and initiatives
            dedicated to the betterment of the Ummah.
          </p>

        </div>
      </div>

      {/* QUOTE SECTION */}

      <div className="initiative-quote">

        <div className="initiative-quote-left">
          <h1 className="initiative-arabic">
            وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى
          </h1>

          <h3 className="initiative-arabic-ref">
            سورة المائدة (٥:٢)
          </h3>
        </div>

        <span className="initiative-line"></span>

        <div className="initiative-quote-right">
          <h1 className="initiative-english">
            “And cooperate in righteousness and piety.”
          </h1>

          <h3 className="initiative-english-ref">
            Surah Al-Ma’idah (5:2)
          </h3>
        </div>

      </div>

      {/* INITIATIVES */}

      <div className="initiatives-section">

        <div className="initiatives-head">
          <h3 className="initiative-small-heading">
            WHAT WE DO
          </h3>

          <h1 className="initiative-main-heading">
            Serving The Ummah Through Meaningful Actions
          </h1>
        </div>

        <div className="initiatives-grid">

          {initiatives.map((item, index) => (
            <div className="initiative-card" key={index}>

              <h1 className="initiative-card-title">
                {item.title}
              </h1>

              <p className="initiative-card-desc">
                {item.description}
              </p>

              <button className="initiative-btn">
                {item.button}
              </button>

            </div>
          ))}

        </div>

      </div>

      {/* FINAL SECTION */}

      <div className="initiative-ending">

        <h1 className="ending-heading">
          Building A Stronger Ummah Together
        </h1>

        <p className="ending-description">
          Every initiative of Tehreek Islahe Ummat is rooted in the
          mission of spreading authentic Islamic teachings, serving
          humanity, and strengthening the bond of unity within the Ummah.
        </p>

      </div>

    </div>
  );
};

export default Initiatives;