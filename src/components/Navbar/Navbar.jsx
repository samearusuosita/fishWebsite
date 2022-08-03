import React, {useState} from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import {HiMenuAlt4} from 'react-icons/hi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {motion} from 'framer-motion';

import {BsTwitter, BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  window.onscroll = function(){
    scrollFunction()
  };

  function scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
  {
    document.getElementById("navbar").style.padding = "0.5rem 5rem 1rem";
    document.getElementById("navbar").style.background = "green";
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("nav-a").style.color = "green";
    document.getElementById("nav-a1").style.color = "green";
    document.getElementById("nav-a2").style.color = "green";
    document.getElementById("nav-a3").style.color = "green";
    

    document.getElementById("logo").style.hieght = "25px";

    // document.getElementById("logo").style.display = "none";
    document.getElementById("logo").style.display = "";
    document.getElementById("logo2").style.opacity = "1";
    
   
    
   
   
  } else {
    document.getElementById("navbar").style.padding = "0.2rem 2rem 0.8rem";
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.301)";
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("nav-a").style.color = "white";
    document.getElementById("nav-a1").style.color = "white";
    document.getElementById("nav-a2").style.color = "white";
    document.getElementById("nav-a3").style.color = "white";

    document.getElementById("logo").style.hieght = "35pxpx"
    

    document.getElementById("logo").style.display = "";
    document.getElementById("logo2").style.display = "none";
  }}





  return (
    <>
      <div className='app__navbar' id="navbar">
        <div className="app__navbar-logo">
          <img src={images.queensfield_logo} alt="logo" id="logo"/>
          <img src={images.queensfield_logo2} alt="logo2" id="logo2"/>
        </div>
        <ul className='app__navbar-links' id='app__navbar-links'>

          <li id='nav-a'><Link to='/'>Home</Link></li>
          <li id='nav-a1'><Link to='/about'>About</Link></li>
          <li id='nav-a2'><Link to='/referral'>Referral</Link></li>
          <li id='nav-a3'><Link to='/contact'>Contact</Link></li>
          <Link to="/does-not-exist"></Link>
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
            <li><a href="/about">About</a></li>
            <li><a href="/referral">Referrals</a></li>
            <li><a href="/contact">Contact</a></li>
            
          </ul>
          
          <ul className="social-icons-nav">
                  <li><a href="https://facebook.com/queensfields" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a></li>
                  <li><a href="https://instagram.com/queensfields" target="_blank" rel="noopener noreferrer"><BsInstagram/></a></li>
                  <li><a href="https://twitter.com/queensfields"target="_blank" rel="noopener noreferrer"><BsTwitter/></a></li>
                </ul>
          </motion.div>
          )}

      </div>

      </div>

    </>
    
  )
}

export default Navbar
