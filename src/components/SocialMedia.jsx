import React from 'react'

import {BsTwitter, BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";



const SocialMedia = () => {


  return (
    <div className='app__social'>
      
      <div>
        <a className="App-link" href="https://facebook.com/queensfields" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
      </div>
      <div>
        <a className="App-link" href="https://instagram.com/queensfields" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
      </div>
      <div>
        <a className="App-link" href="https://twitter.com/queensfields" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
      </div>
    </div>
  )
}

export default SocialMedia
