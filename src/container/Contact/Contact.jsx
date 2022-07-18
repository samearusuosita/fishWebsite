import React, {useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.scss'
import HeadingSection from '../../components/Heading/headingSection';
import { HomeReferrals } from '../Home';


import {BsTwitter, BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";

import {MotionWrap} from '../../wrapper';



const Contact = () => {


  // Submitting contact form

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u0r75bj', 'template_hyvg6da', form.current, 'Gv3ek3VoD7N2IEviR')
      .then((result) => {
          console.log(result.text);
          form.current.reset(); 

      }, (error) => {
          console.log(error.text);
      });
  };

  
 


  return (
    <div className="main">
      <div className='app__contact-bgH'>
        <HeadingSection Wtitle="Lets Talk" wsub="Tell us about your orders"/>
      </div>
      
      <div className='contactUs app__bg-main'>
      
        <div className="boxes">
          {/* form box */}
          <div className="contact form">
            <h3>Kindly Fill Our Contact Form</h3>

            
              <form ref={form} onSubmit={sendEmail}>
                <div className="formBox">
                  <div className="row50">
                    <div className="inputBox">
                      <span>Full Name</span>
                      <input id='user_name' type="text" name="user_name" placeholder='E.g: John Doe'/>
                    </div>
                  </div>
                  
                  <div className="row50">
                      <div className="inputBox">
                        <span>Email</span>
                        <input  id='user_email' type="email" name="user_email" placeholder='E.g: John@email.com'/>
                      </div>
                  </div>

                  <div className="row50">
                    <div className="inputBox">
                        <span>Mobile</span>
                        <input id='user_mobile' type="tel" name="user_mobile" placeholder='E.g: 123 456 789'/>
                      </div>
                  </div>

                  <div className="row100">
                    <div className="inputBox">
                      <span>Message</span>
                      <textarea id='message' name="message" cols="25" rows="10" placeholder='Enter your Message'></textarea>
                    </div>
                  </div>

                  <div className="submit-btn">
                  
                      <button type="submit" value="Send" onClick={() => alert('Thank you for getting in touch!')}>Send Message Now</button>
                    
                  </div>

                    
                </div>
              </form>

            </div>
              {/* info box */}
              <div className="contact info">
                <h3 className='contact-side-bars'>Address</h3>
                <ul>
                  <li><a href="/google.com">153 Ademola Adetokumbo <br/>Wuse 2, Abuja, Nigeria</a></li>
                  <li className='p-text'><a href="tel:+2348103116234">08103116234</a></li>
                  <li className='p-text'><a href="mailto:sales@myqueensfield.com">sales@myqueensfield.com</a></li>
                </ul>
              </div>

            {/* socail box */}
          <div className="contact socail">
            <h3>Get Social</h3>
              <div className="social-icons">
                <ul>
                  <li><FaFacebookF/><a href="/facebook.com">Facebook</a></li>
                  <li><BsInstagram/><a href="/instagram.com">Instagram</a></li>
                  <li><BsTwitter/><a href="/twitter.com">Twitter</a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <HomeReferrals/>
    </div>
    
  )
}

export default MotionWrap (Contact);
