import React from 'react';

import './HomeReferrals.scss';
import { Link } from 'react-router-dom';

import ButtonPrimary from '../../../components/Buttons/Button_primary';

const HomeReferrals = () => {
  return (
    <div className="app__homereferrals app__flex" id='app__referral-bg'>
      <div className="app__homeref-content">
        <h1 className="home-ref-headteat">You can also <br/>Earn by Referring us</h1>
        <p className='home-ref-pteat'>tell your family and friends about us and earn money</p>
      </div>
      <Link to="/referral"><ButtonPrimary order_btn="Learn More" /></Link>
      
    </div>
  )
}

export default HomeReferrals
