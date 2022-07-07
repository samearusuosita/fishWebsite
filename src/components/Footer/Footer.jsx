import React from 'react';
import SocialMedia from '../SocialMedia';

import { images } from '../../constants';
import './Footer.scss';


const Footer = () => {
  return (
    <div className='app__footer'>
        <img src={images.queensfield_logo} alt="logo" />
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