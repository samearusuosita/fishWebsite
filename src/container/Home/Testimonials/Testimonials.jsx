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

  const sliderContents = [
    {imgurl: images.ijeoma, name: "Amadi Sandra", content: "I love Queensfield crayfish and Asa fish. It’s super neat and tasty unlike the regular fish in the market that is filled with dirt and chaff. The first time I used Queenfield's products, the aroma of my soup changed. I couldn't resist the sweet and unique taste of the fish inside my soup. After my first meal with the soup, I did go back to the pot of soup to take a piece of fish. It was like stealing from my own pot of soup. I’m coming back for more definitely. Queensfield rocks.", title: "Fashion Designer"},
    {imgurl: images.mnsignature, name: "Miracle Nwaele", content: "I adore Queensfield Asa mangala because the taste of this particular fish is something very peculiar. The color and taste are everything a family deserves to have a quality pot of soup. I prefer to use it to make my soup and jollof rice. I adore the good taste and admire the neatness of Queensfield crayfish. It adds quality to my evening soup. It’s Queensfield or nothing, period.", title: "Fashion Designer"},
    {imgurl: images.chidalu, name: "Chidalu O.", content: "When you think of using something healthy, fresh and delicious for your assorted food types, then Queensfield is there to deliver it. Not only is her crayfish free from sand and debris, it also gives my food the exceptional taste that makes me come looking for more. I can personally testify to the taste and beautiful aroma it gave to my rice and soup. Whenever I use it, everyone in my family will want more. It's certain that Queensfield is the glory of my kitchen.", title: "Nurse - London, UK"},
    {imgurl: images.clarissa, name: "Clarissa Okwuba", content: "QueensField is my favourite crayfish plug. After my cruel experience with mass market crayfish in Wuse market and Utako, I can boldly mention that Queensfield is exceptionally the best. Zero dirt, very sweet, and surprisingly affordable with up to N5000 off per Kilo. The quality of Queenfield's fish proves it's from the Atlantic and Cameroon sea. It is boneless, swells and gives great taste in food. My mum is in love with Queensfield fish, so I make it a ritual to send her a carton every two weeks or something.", title: "Business Magnet - ABJ"}
  ]

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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          {sliderContents.map((sliderContents, index) => (

            <SwiperSlide key={index}>

            <div className="swiper">
              <div className="swiper-wraper">
                <div className="swiper-slide">
                  <div className="testimonialBox">
                    <img className="quote" src={images.quote} alt="swipper"/>
                    <div className="content">
                      <p>{sliderContents.content}</p>
                      <div className="details">
                        <div className="imgBox">
                          <img src={sliderContents.imgurl} alt={index} />
                        </div>
                          <h3>{sliderContents.name}<br/> <span>{sliderContents.title}</span></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>

          ))}
      </Swiper>
      </>

      {/* <Route path="/*" component={
            <main className="app__bg-main">
              
              <h1>404</h1>
              <p>There's nothing here!</p>
                <button type='button' className='button'><a href="/">Go Back to Home</a></button>
            </main>}
          /> */}
    </div>
  )
}

export default Testimonials
