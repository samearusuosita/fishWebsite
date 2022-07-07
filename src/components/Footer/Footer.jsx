import React from 'react';
import SocialMedia from '../SocialMedia';

import './Footer.scss';


const Footer = () => {
  return (
    <div className='app__footer'>
      
        <ul className='app__policy-links'>
          <li><a href="/me">Terms</a></li>
          <li><a href="/me">Privacy</a></li>
          <li><a href="/me">Cookie</a></li>
        </ul>  
      <SocialMedia/>
    </div>
  
  )
}

export default Footer;