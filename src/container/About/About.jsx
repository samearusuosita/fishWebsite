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
      <HeadingSection Wtitle="Who we are" wsub="The Goldmine of healthy living"/>
      </div>

      <div className="app__about-content">
        <div className='app__orders'>
                <div className="app__order-content">
                  <img src={images.whoweare} alt="" />
                  <div className="app__orders-text">
                    <Orderslist 
                      title="We are Queensfield Ltd." 
                      description="We deal with the production of healthy and natural farm and dry sea food - Asa fish, Mangala fish, 
                      Stock fish, Prawn, Crayfish, etc. Queensfield food has been reviewed by professional agriculturists and has proven 
                      to be completent with its high quality produce, this includes; the size of the produce, unique taste, and freshness. 
                      We all know that natural foods are at their best when they are fresh."
                    />
                  </div>
                </div>
        </div>
           <Testimonials/>
      </div>

    </div>
  )
}

export default About;