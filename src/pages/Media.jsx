import React from "react";
import "../styles/Media.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const longVideos = [
  {
    id: "neNuNA-k4oM",
    title: "Islamic Bayan"
  },
  {
    id: "8eD2_Xi9h8M",
    title: "Mehfil Recording"
  },
  {
    id: "WQ4y70KoX7w",
    title: "Conference Bayan"
  },
];

const shorts = [
  {
    id: "amwWhlJ6unI?si=mGqpw7J0FiqCWJtU",
   
  },
  {
    id: "80X6DL19Zpc?si=e4OeXBmXOh_XM2lR",
    
  },
  {
    id: "_Jz98BdFE-A?si=exdDgunTLSfKarxr",
    
  },
  {
    id: "aNp39t0eCe0?si=DAqFiN-yEQft9sqD",
  
  },
];

const MediaPage = () => {
  return (
    <div className="media-page">

      {/* HERO */}

      <div className="media-hero">
        <div className="media-hero-div">

          <div className="media-ornament">
            وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنْفَعُ الْمُؤْمِنِينَ
          </div>

          <h3 className="media-badge">
            Bayans • Lectures • Islamic Shorts
          </h3>

          <h1 className="media-title">
            Media <span>Library</span>
          </h1>

          <p className="media-subtitle">
            Explore Islamic lectures, conference recordings,
            reminders, and short-form Islamic content from
            Tehreek Islahe Ummat.
          </p>

        </div>
      </div>

      {/* QUOTE */}

      <div className="media-quote">

        <div className="media-quote-left">

          <h1 className="media-arabic">
            وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ
            <br />
            تَنْفَعُ الْمُؤْمِنِينَ
          </h1>

          <h3 className="media-ref">
            سورة الذاريات (٥١:٥٥)
          </h3>

        </div>

        <span className="media-line"></span>

        <div className="media-quote-right">

          <h1 className="media-translation">
            “And remind, for indeed the reminder benefits the believers.”
          </h1>

          <h3 className="media-translation-ref">
            Surah Adh-Dhariyat (51:55)
          </h3>

        </div>

      </div>

      {/* LONG VIDEOS */}

      <div className="youtube-section">

        <div className="section-head">
          <h3 className="small-heading">
            ISLAMIC LECTURES
          </h3>

          <h1 className="main-heading">
            Bayans & Event Recordings
          </h1>
        </div>

        <div className="video-slider">

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={30}
          >

            {longVideos.map((video, index) => (
              <SwiperSlide key={index}>

                <div className="video-frame">

                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allowFullScreen
                  />

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

      {/* SHORTS */}

      <div className="shorts-section">

        <div className="section-head shorts-head">

          <h3 className="small-heading green-text">
            SHORT FORM CONTENT
          </h3>

          <h1 className="main-heading green-text">
            Islamic Shorts
          </h1>

        </div>

        <div className="shorts-grid">

          {shorts.map((short, index) => (

            <div className="short-card" key={index}>

              <div className="short-video">

                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${short.id}`}
                  title={short.title}
                  allowFullScreen
                />

              </div>

             

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default MediaPage;

