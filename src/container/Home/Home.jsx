import React, {useEffect} from 'react';
import {Header, Orders, HomeReferrals, Testimonials, Dilivery} from '../Home';




const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='home-main'>
      <Header/>
      <Orders/>
      <Dilivery/>
      <Testimonials/>
      <HomeReferrals/>
    </div>
  )
};

export default Home;