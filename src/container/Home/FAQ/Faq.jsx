import React from 'react'

import Accordion from './Accordion/Accordion';

import './Faq.scss';

const Faq = () => {

  return (
    <div className="faq">
        <div className="container">
          <div className="left">
            <h1 className="frq-head-text">Frequent Asked Questions</h1>
            <p className='p-text-p'>Here, you will find answers to most common questions you may have on Queensfield. Also feel free to check our <span>Facebook, Instagram</span> and <span>YourTube Channel. </span>
             If you still cant find the answer you are looking for, just <a href="/contact">Contact Us.</a></p>
          </div>
          <div className="right">
            <Accordion/>
          </div>
        </div>

    </div>
  )
}

export default Faq
