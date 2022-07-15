import React from 'react';

import './HomeReferrals.scss'

import ButtonPrimary from '../../../components/Buttons/Button_primary';

const HomeReferrals = () => {
  return (
    <div className="app__homereferrals app__flex" id='app__referral-bg'>
      <div className="app__homeref-content">
        <h1>You can also <br/>Earn by Referring us</h1>
        <p>tell your family and friends about us and earn money</p>
      </div>
      <ButtonPrimary href="/contact" order_btn="Joing the Program" />
    </div>
  )
}

export default HomeReferrals
