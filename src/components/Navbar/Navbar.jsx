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

  window.onscroll = function(){
    scrollFunction()
  };

  function scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
  {
    document.getElementById("navbar").style.padding = "0.5rem 5rem 1rem";
    document.getElementById("navbar").style.background = "white";
    document.getElementById("nav-a").style.color = "green";
    document.getElementById("nav-a1").style.color = "green";
    document.getElementById("nav-a2").style.color = "green";
    document.getElementById("nav-a3").style.color = "green";

    document.getElementById("logo").style.hieght = "25px";
   
   
  } else {
    document.getElementById("navbar").style.padding = "0.2rem 2rem 0.8rem";
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.301)";
    document.getElementById("nav-a").style.color = "white";
    document.getElementById("nav-a1").style.color = "white";
    document.getElementById("nav-a2").style.color = "white";
    document.getElementById("nav-a3").style.color = "white";

    document.getElementById("logo").style.hieght = "40pxpx"
  }}





  return (
    <>
      <div className='app__navbar' id="navbar">
        <div className="app__navbar-logo">
          <img src={images.queensfield_logo} alt="logo" id="logo"/>
        </div>
        <ul className='app__navbar-links' id='app__navbar-links'>
          <li><a id='nav-a' href="/">Home</a></li>
          <li><a id='nav-a1' href="/about">About</a></li>
          <li><a id='nav-a2' href="/referral">Referrals</a></li>
          <li><a id='nav-a3' href="/contact">Contact</a></li>
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

    </>
    
  )
}

export default Navbar
