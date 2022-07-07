import React from "react";

import './Testimonials.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { images } from "../../../constants";



const Testimonials = () => {

  return (
    <div className="app__testimonials app__bg-main">
      <div className="head-text-test">
         <h1 className='title-text'>our customer stories</h1>
       <h5 className="title-text-sub">better sevice starts here</h5>
      </div>
    
      <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

          <div className="swiper">
            <div className="swiper-wraper">
              <div className="swiper-slide">
                <div className="testimonialBox">
                  <img className="quote" src={images.quote} alt="swipper"/>
                  <div className="content">
                    <p>This is the testimonia section where all of them will be displayed. kindly add more testimonials here. 
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src={images.catfish} alt="" />
                      </div>
                        <h3>Somone Famouse <br/> <span>Creative Designer</span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
                <div className="testimonialBox">
                  <img className="quote" src={images.quote} alt="swipper"/>
                  <div className="content">
                    <p>This is the testimonia section where all of them will be displayed. kindly add more testimonials here. 
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src={images.catfish} alt="" />
                      </div>
                        <h3>Somone Famouse <br/> <span>Creative Designer</span></h3>
                    </div>
                  </div>
                </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
                <div className="testimonialBox">
                  <img className="quote" src={images.quote} alt="swipper"/>
                  <div className="content">
                    <p>This is the testimonia section where all of them will be displayed. kindly add more testimonials here. 
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                      This is the testimonia section where all of them will be displayed. kindly add more testimonials here.
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src={images.catfish} alt="" />
                      </div>
                        <h3>Somone Famouse <br/> <span>Creative Designer</span></h3>
                    </div>
                  </div>
                </div>
              </div>
        </SwiperSlide>
        
      </Swiper>
      </>
    </div>
  )
}

export default Testimonials
