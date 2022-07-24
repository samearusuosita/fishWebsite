import React from 'react';

import './Referral.scss'
import HeadingSection from '../../components/Heading/headingSection';
import Orderslist from '../../components/Orders_list/Orders_list';

import { images } from '../../constants';
import ButtonPrimary from '../../components/Buttons/Button_primary';

import { motion } from 'framer-motion';



const Referral = () => {

const howItWoksCards = [
  {imgurl: images.chatting, title: "Join", description: "Get started by clicking the join botton and become part of queensfield referral program.The process takes less than a menute."},
  {imgurl: images.posting, title: "Get/Share Posts", description: "You will get weekly WhatsApp, Facebook and Instagram posts from us, which you will share across all your social media platforms."},
  {imgurl: images.payments, title: "Get Rewarded", description: "Receive 5% commision on every order placed by your refferals. Grow your net income by refering more customers to Queensfield on weekly basics."}
]


  return (
    <div className='app__referral'>
      <div className='app__ref-bgH'>
        <HeadingSection Wtitle="Refer Us" wsub="Tell your friends and family about us"/>
      </div>
      
      <div className='app__bg-main ref-section'>
        <div className='app__orders'>

        <motion.div
        whileinview={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: "tween"}}
        className="app__animate-item"
        key="test"
        >

          <>
            <img src={images.queensfield_m} alt="" className='img-ref'/>
              <div className="app__orders-text">
                <Orderslist 
                  title="Our Referral Program" 
                  description="Our referral system is designed to help you earn by recommending our products and 
                  services to your family and friends. You can earn, or use your earnings to order any of our product and services, 
                  which will be delivered to your location at no additional cost. All earningds from our referral program will be 
                  sent directly to your registered account at the end of the week."
                />
              </div>
          </>
        </motion.div>  
 
        </div>
        <div className="howItWoks-section">
          <div className="service-cont">
            <h1 className='howItWork-headtext'>How it Works </h1>
            
            <div className="cards-content">
            {howItWoksCards.map((howItWoksCards, index) => 
            (
              <div className="card1" key={index}>
                <div className="img-col">
                  <img src={howItWoksCards.imgurl} alt="test"/>
                </div>
                <div className="card-content">
                  <h3 className='card-h'>{howItWoksCards.title}</h3>
                  <p className='card-p'>{howItWoksCards.description}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className="btn-ref">
          <ButtonPrimary href="/contact" order_btn="Joing the Program"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Referral
