import React, {useState} from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import {HiMenuAlt4} from 'react-icons/hi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {motion} from 'framer-motion';

import {BsTwitter, BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  



  return (
    <>
      <div className='app__navbar'>
        <div className="app__navbar-logo">
          <img src={images.queensfield_logo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Referral">Referrals</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)}/>
          
          {toggle && (
            <motion.div 
            whileInView={{x: [300, 0]}}
            transition={{duration: 0.85, ease: 'easeOut' }}
            >
          <MdOutlineRestaurantMenu font size={27} onClick={() => setToggle(false)}/>
          <ul className='app__navbar-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Referral">Referrals</a></li>
            <li><a href="/Contact">Contact</a></li>
            
          </ul>
          
          <ul className="social-icons-nav">
                  <li><a href="/facebook.com"><FaFacebookF/></a></li>
                  <li><a href="/instagram.com"><BsInstagram/></a></li>
                  <li><a href="/twitter.com"><BsTwitter/></a></li>
                </ul>
          </motion.div>
          )}

           
      </div>

      </div>
     

      {/* <div className="social-icons-nav">
                <ul>
                  <li><a href="/facebook.com"><FaFacebookF/></a></li>
                  <li><a href="/instagram.com"><BsInstagram/></a></li>
                  <li><a href="/twitter.com"><BsTwitter/></a></li>
                </ul>
              </div> */}

    </>
    
  )
}

export default Navbar
