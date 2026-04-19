import React from 'react'
import "../styles/HomePage.css"
import HazratImage from "../assets/hazrat.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import p1 from "../assets/p1.jpg"
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const videos = [
  "neNuNA-k4oM?si=gkbLAjxCGJErjze0",
  "8eD2_Xi9h8M?si=Lf4z8qOdK2a9NNRy",
  "WQ4y70KoX7w?si=MGGiWzjTZOYiPffP",
];

const photos=[
    {src: p1, width:1080, height:1350},
     {src: p1, width:1080, height:1350},
      {src: p1, width:1080, height:1350}
];


const HomePage = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-div">
        <div class="hero-ornament">بسم الله الرحمن الرحيم</div>
            <div className='hero-section-inside'>
                <h2 class="hero-badge">Established · Bhilwara (Raj.), India</h2>
                <div class="hero-arabic">تحریک اصلاح امت</div>
                <h1 class="hero-title">
                Tehreek <br/>
                <strong>Islahe Ummat</strong>
                </h1>
                <p class="hero-sub">Guided by Mufti Ashraf Jilani Azhari — Al-Azhar University, Cairo. Serving the Muslim community through Darul Ifta, education, and Islamic events across India.</p>
                <div class="hero-buttons">
                <a href="#darul-ifta" class="btn-primary">Our Initiatives</a>
                <a href="#events" class="btn-outline">Upcoming Events</a>
                </div>
            </div>
            <span className="stroke"></span>
            <div class="hero-stats">
                <div class="hero-stat"><span class="num">6+</span><span class="lbl">Years of Impact</span></div>
                <div class="hero-stat"><span class="num">50+</span><span class="lbl">Events per Year</span></div>
                <div class="hero-stat"><span class="num">50+</span><span class="lbl">Team Members</span></div>
                <div class="hero-stat"><span class="num">1M+</span><span class="lbl">Peoples Reached</span></div>
            </div>
      </div>
      </div>

      <div className="quote-section">
        <div className="quote-section-left">
            <h1 className="arabic-verse">
                اقْرَأْ بِاسْمِ  رَبِّكَ  <br/>الَّذِي خَلَقَ
            </h1>
            <h3 className='arabic-reference'>
                سورة العلق (٩٦:١)
            </h3>
        </div>
        <span className="quote-stroke"></span>
        <span className="quote-stroke-mobile"></span>

        <div className="quote-section-right">
            <h1 className="english-verse">
                Read in the name of <br/> your Lord who created.
            </h1>
            <h3 className="english-reference">
                Surah Al-‘Alaq (96:1)
            </h3>
        </div>
      </div>

      <div className="about-us">
        <div className="about-div">
            <div className="about-left">
                <img src={HazratImage}/>
            </div>
            <div className="about-right">
                <h3 className="heading">ABOUT US</h3>
                <h1 className="hazrat-designation">Mufti <span className='hazrat-name'> Ashraf Jilani </span>Azhari</h1>
                <p className="hazrat-description">Mufti Ashraf Jilani Azhari is a distinguished Islamic scholar from Ganjdundwara, India, and a graduate of the prestigious Al-Azhar University, Cairo, Egypt — one of the world's oldest and most revered centres of Islamic learning.

                    As the founder and head of Tehreek Islahe Ummat, Mufti Sahib has dedicated his life to the spiritual reformation and moral upliftment of the Muslim Ummah. Through Darul Ifta, educational programs, and large-scale events, the organisation reaches Muslims across India.

                    His work encompasses religious guidance, community welfare, and preserving the authentic Sunni tradition for future generations.</p>
                <ul className="about-pointers">
                    <li className="pointers">Graduate, Al-Azhar University, Cairo, Egypt</li>
                    <li className="pointers">Head of Darul Ifta, Tehreek Islahe Ummat</li>
                    <li className="pointers">Islamic scholar and orator across India</li>
                    <li className="pointers">Organiser of Milad, Ijtema & educational programs</li>
                </ul>
            </div>
        </div>
      </div>

      <div className="services">
        <div className="service-section">
            <div className="services-head">
            <h2 className='service-heading'>WHAT WE DO</h2>
            <h1 className='our-services'>Our Services</h1>
            </div>
            <div className="services-row">
            <div className="service-div">
                <h1 className="service-name">
                    Darul Ifta
                </h1>
                <p className="service-desc">
                    Receive authentic Islamic rulings and guidance on matters of daily life, worship, transactions, family, and more from qualified scholars.
                </p>
                <button className="service-btn">
                    Submit a Question
                </button>
            </div>
            <div className="service-div">
                <h1 className="service-name">
                    Darul Ifta
                </h1>
                <p className="service-desc">
                    Receive authentic Islamic rulings and guidance on matters of daily life, worship, transactions, family, and more from qualified scholars.
                </p>
                <button className="service-btn">
                    Submit a Question
                </button>
            </div>
            <div className="service-div">
                <h1 className="service-name">
                    Darul Ifta
                </h1>
                <p className="service-desc">
                    Receive authentic Islamic rulings and guidance on matters of daily life, worship, transactions, family, and more from qualified scholars.
                </p>
                <button className="service-btn">
                    Submit a Question
                </button>
            </div>
            </div>

            <div className="services-row">
            <div className="service-div">
                <h1 className="service-name">
                    Darul Ifta
                </h1>
                <p className="service-desc">
                    Receive authentic Islamic rulings and guidance on matters of daily life, worship, transactions, family, and more from qualified scholars.
                </p>
                <button className="service-btn">
                    Submit a Question
                </button>
            </div>
            <div className="service-div">
                <h1 className="service-name">
                    Darul Ifta
                </h1>
                <p className="service-desc">
                    Receive authentic Islamic rulings and guidance on matters of daily life, worship, transactions, family, and more from qualified scholars.
                </p>
                <button className="service-btn">
                    Submit a Question
                </button>
            </div>
            <div className="service-div">
                <h1 className="service-name">
                    Darul Ifta
                </h1>
                <p className="service-desc">
                    Receive authentic Islamic rulings and guidance on matters of daily life, worship, transactions, family, and more from qualified scholars.
                </p>
                <button className="service-btn">
                    Submit a Question
                </button>
            </div>
            </div>
            
      </div>
    </div>


    <div className="events">
        <div className="events-section">
             <div className="events-head">
            <h2 className='service-heading'>PROGRAMS & GATHERINGS</h2>
            <h1 className='upcoming-event'>UPCOMING EVENTS</h1>
            <button className="event-btn">
                View All Events
            </button>
            </div>
           
            <div className="events-row">
                 <div className="event-div">
                <div className="event-details-head">
            
                <div className="dates">
                <h1 className='date'>21</h1>
                <h3 className="month-year">April 2026</h3>
                </div>
                <button className="event-tag">Milad</button>
                  </div>
                  <span className="event-stroke"></span>
                <div className="event-details">
                    <div className="event-name">Mehfil-e-Milad un Nabi ﷺ</div>
                    <div className="event-desc">
                        Annual celebration of the birth of the Holy Prophet ﷺ with naats, bayans, and dua.
                    </div>

                    <div className="location-time">
                        <div className="event-location">
                            Bhilwara, Rajasthan
                        </div>
                        <div className="event-time">
                            After Isha
                        </div>
                    </div>
              
             </div>
             </div>
              <div className="event-div">
                <div className="event-details-head">
            
                <div className="dates">
                <h1 className='date'>21</h1>
                <h3 className="month-year">April 2026</h3>
                </div>
                <button className="event-tag">Milad</button>
                  </div>
                  <span className="event-stroke"></span>
                <div className="event-details">
                    <div className="event-name">Mehfil-e-Milad un Nabi ﷺ</div>
                    <div className="event-desc">
                        Annual celebration of the birth of the Holy Prophet ﷺ with naats, bayans, and dua.
                    </div>

                    <div className="location-time">
                        <div className="event-location">
                            Bhilwara, Rajasthan
                        </div>
                        <div className="event-time">
                            After Isha
                        </div>
                    </div>
              
             </div>
             </div>
              <div className="event-div">
                <div className="event-details-head">
            
                <div className="dates">
                <h1 className='date'>21</h1>
                <h3 className="month-year">April 2026</h3>
                </div>
                <button className="event-tag">Milad</button>
                  </div>
                  <span className="event-stroke"></span>
                <div className="event-details">
                    <div className="event-name">Mehfil-e-Milad un Nabi ﷺ</div>
                    <div className="event-desc">
                        Annual celebration of the birth of the Holy Prophet ﷺ with naats, bayans, and dua.
                    </div>

                    <div className="location-time">
                        <div className="event-location">
                            Bhilwara, Rajasthan
                        </div>
                        <div className="event-time">
                            After Isha
                        </div>
                    </div>
              
             </div>
             </div>
            </div>
        </div>
    </div>


    <div className="media">
        <div className="media-section">
            <div className="media-head">
                <h3 className="media-heading">Lectures & Video Library</h3>
                <h1 className="bayans">BAYANS & EVENT RECORDINGS</h1>
            </div>

            <span className="media-stroke"></span>

            <div className="media-div">
                <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={true}
                    loop={true}
                    style={{ width: "100%", height: "100%" }}
                >
                    {videos.map((id, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ width: "100%", height: "100%", borderRadius:"30px", overflow:"hidden" }}>
                        <iframe
                            width="100%"
                            height="100%"
                            borderRadius="30px"
                            src={`https://www.youtube.com/embed/${id}?controls=1`}
                            title="YouTube video"
                            
                            allow="encrypted-media"
                            allowFullScreen
                            style={{
                            width: "100%",
                            height: "100%",
                            }}
                        />
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            

            <div className="media-buttons">
                <div className="media-btn-head">
                    FIND MORE LIKE THESE
                </div>
                <div className="btn-row">
                <div className="media-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg> Youtube
                </div>
                <div className="media-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg> Instagram
                </div>
                </div>
            </div>

            
        </div>
    </div>

{/*

    <div className="gallery">
        <div className="gallery-section">
         <div className="media-head">
                <h3 className="media-heading">MOMENTS & MEMORIES</h3>
                <h1 className="bayans">PHOTO GALLERY</h1>
                <span className="media-stroke"></span>
            </div>   

            <div className="gallery-div">
                <Swiper
        direction={'horizontal'}
        slidesPerView={3}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        
      >
        <SwiperSlide><div className="gallery-image"><img src={p1}/></div></SwiperSlide>
        <SwiperSlide><div className="gallery-image"><img src={p1}/></div></SwiperSlide>
        <SwiperSlide><div className="gallery-image"><img src={p1}/></div></SwiperSlide>
        <SwiperSlide><div className="gallery-image"><img src={p1}/></div></SwiperSlide>
        <SwiperSlide><div className="gallery-image"><img src={p1}/></div></SwiperSlide>
        <SwiperSlide><div className="gallery-image"><img src={p1}/></div></SwiperSlide>
        <SwiperSlide><div className="gallery-image"><img src={p1}/></div></SwiperSlide>
        <SwiperSlide><div className="gallery-image"><img src={p1}/></div></SwiperSlide>
        <SwiperSlide><div className="gallery-image"><img src={p1}/></div></SwiperSlide>
        <SwiperSlide><div className="gallery-image"><img src={p1}/></div></SwiperSlide>
       
      </Swiper>
            </div>
        </div>
    </div>
    */}
    </div>
  )
}

export default HomePage
