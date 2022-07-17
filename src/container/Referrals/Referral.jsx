import React from 'react';

import './Referral.scss'
import HeadingSection from '../../components/Heading/headingSection';
import Orderslist from '../../components/Orders_list/Orders_list';

import { images } from '../../constants';

import ButtonPrimary from '../../components/Buttons/Button_primary';

import HiwUI from '../../components/HowItWorks/HiwUI';



const Referral = () => {
  return (
    <div className='app__referral'>
      <div className='app__ref-bgH'>
        <HeadingSection Wtitle="Refer Us" wsub="Tell your friends and family about us"/>
      </div>
      
      <div className='app__bg-main ref-section'>
        <div className='app__orders'>
          <div className="app__order-content">
            <img src={images.queensfield_m} alt="" className='img-ref'/>
            <div className="app__orders-text">
              <Orderslist 
              title="Our Referral Program" 
              description="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="service-cont">
            <h1>How it Works </h1>

            <div className="mycard">
              <HiwUI imgurl={images.chatting} title="Join" description="Get started by clicking the join botton and become part of queensfield referral program. 
            The process takes less than a menute."/>
              <HiwUI imgurl={images.posting} title="Get/Share Posts" description="You will get weekly WhatsApp, Facebook and Instagram posts from us, 
            which you will share across all your social media platforms."/>
              <HiwUI imgurl={images.payments} title="Get Rewarded" description="Receive 5% commision on every order placed by your refferals. 
            Grow your net income by refering more customers to Queensfield on weekly basics."/>
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
