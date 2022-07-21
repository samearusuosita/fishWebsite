import React from "react";

import './Testimonials.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { images } from "../../../constants";



const Testimonials = () => {

 return (
    <div className="app__testimonials content-center">
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
                    <p>I love queenfield crayfish and Asa fish. It’s very neat and very tasty unlike the regular 
                      fish in the market that is filled with dirt and chaff. The first time i use their product, 
                      the aroma of my soup changed, I couldn't resist the sweat taste of the fish inside my soup. 
                      After i finished eating, I had to go back to the pot of soup to take a piece of fish, 
                      it was like stealing from my own pot of soup. I’m coming back for more definitely. 
                      Queensfield is the best.
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src={images.ijeoma} alt="" />
                      </div>
                        <h3>Amadi Sandra<br/> <span>Fashion Designer</span></h3>
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
                    <p>I love Queensfield Asa mangala mostly because the taste of that particular fish is something 
                      else unlike other fish, the color and taste is everything a good meal needs to have a complete taste, 
                      I prefer using it to make my soup and jollof rice and also eat it cos it has a very good taste also her 
                      crayfish is very neat and tasty too, it adds so much sweetness to your home cooked meal, 
                      it’s Queensfield or nothing period.
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src={images.mnsignature} alt="" />
                      </div>
                        <h3>Miracle Nwaele <br/> <span>Fashion Designer</span></h3>
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
                    <p>When you think of using something healthy, fresh and delicious for your assorted meal types then queen’s 
                      field is there to deliver it. Not only is her crayfish free from sand and unnecessary chaff but it gives 
                      food the exceptional taste that makes me come looking for more, I can personally testify to the taste and beautiful aroma it gave to my rice and soup when I used it everyone 
                      in my family was asking for more. When she said is a farm far from other regular farms it is surely true.
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src={images.chidalu} alt="" />
                      </div>
                        <h3>Chidalu O.<br/> <span>Nursing - London, Uk</span></h3>
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
