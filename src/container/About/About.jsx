import React from 'react';
import './About.scss';

import Orderslist from '../../components/Orders_list/Orders_list';

import { images } from '../../constants';



const About = () => {
  return (
    <div className="app__about app__bg-main">
       <>
       <h1 className='title-text'>About Us</h1>
       <h5 className="title-text-sub">Welcome to queensfield, we are glade you are here</h5>
      </>

      <div className='app__orders'>
      
        <div className="app__order-content">
          <img src={images.about} alt="" />
          <div className="app__orders-text">
             <Orderslist 
              title="Dry Asa Fish" 
              description="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;