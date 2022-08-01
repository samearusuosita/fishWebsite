import React from 'react'

import {BsTwitter, BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";



const SocialMedia = () => {


  return (
    <div className='app__social'>
      
      <div>
        <a href="www.facebook.com/queensfields"><FaFacebookF/></a>
      </div>
      <div>
        <a href="www.instagram.com/queensfields"><BsInstagram/></a>
      </div>
      <div>
        <a href="www.twitter.com/queensfields"><BsTwitter/></a>
      </div>
    </div>
  )
}

export default SocialMedia
