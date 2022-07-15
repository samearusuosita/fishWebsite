import React from 'react';
import './About.scss';

import Orderslist from '../../components/Orders_list/Orders_list';

import { images } from '../../constants';
import {Testimonials} from '../Home';

import HeadingSection from '../../components/Heading/headingSection';



const About = () => {
  return (
    <div className="app__about">
      
      <div className='app__about-bgH'>
      <HeadingSection Wtitle="Who we are" wsub="the Goldmine of healthy living"/>
      </div>

      <div className="app__about-content">
      <div className='app__orders'>
              <div className="app__order-content">
                <img src={images.whoweare} alt="" />
                <div className="app__orders-text">
                  <Orderslist 
                    title="We are Queensfield Ltd." 
                    description="Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </div>
              </div>
            </div>
      <Testimonials/>
      </div>

    </div>
  )
}

export default About;