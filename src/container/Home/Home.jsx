import React from 'react';
import {Header, Faq, Orders, HomeReferrals, Testimonials, Dilivery} from '../Home';
import './Home.scss'



const Home = () => {
  return (
    <div className='home-main'>
      <Header/>
      <Orders/>
      <Dilivery/>
      <Testimonials/>
      <HomeReferrals/>
      {/* <Faq/> */}
    </div>
  )
};

export default Home;