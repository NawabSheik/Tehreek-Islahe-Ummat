import React from 'react'
import "../styles/HomePage.css"
import HazratImage from "../assets/hazrat.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import p1 from "../assets/p1.jpg"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const videos = [
  "neNuNA-k4oM?si=gkbLAjxCGJErjze0",
  "8eD2_Xi9h8M?si=Lf4z8qOdK2a9NNRy",
  "WQ4y70KoX7w?si=MGGiWzjTZOYiPffP",
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
                <a href="#darul-ifta" class="btn-primary">Ask a Fatwa</a>
                <a href="#events" class="btn-outline">Upcoming Events</a>
                </div>
            </div>
            <span className="stroke"></span>
            <div class="hero-stats">
                <div class="hero-stat"><span class="num">500+</span><span class="lbl">Fatwas Issued</span></div>
                <div class="hero-stat"><span class="num">50+</span><span class="lbl">Events per Year</span></div>
                <div class="hero-stat"><span class="num">10+</span><span class="lbl">States Covered</span></div>
                <div class="hero-stat"><span class="num">25+</span><span class="lbl">Years of Service</span></div>
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
                      Youtube
                </div>
                <div className="media-btn">
                    Instagram
                </div>
                </div>
            </div>

            
        </div>
    </div>


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
    </div>
  )
}

export default HomePage
