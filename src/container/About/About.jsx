import React from 'react';
import './About.scss';

import HeadingSection from '../../components/Heading/headingSection';
import Orderslist from '../../components/Orders_list/Orders_list';

import { images } from '../../constants';

import { motion } from 'framer-motion';
import { Testimonials} from '../Home';


const About = () => {




  return (
    <div className='app__referral'>
      <div className='app__about-bgH'>
        <HeadingSection Wtitle="Who We Are" wsub="The Goldmine of healthy living"/>
      </div>
      
      <div className='app__bg-main ref-section'>
        <div className='app__orders'>

        <motion.div
        whileinview={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: "tween"}}
        className="app__animate-item"
        key="ref-motion"
        >

          <div className='ref-info'>
            <img src={images.whoweare} alt="" className='img-ref'/>
              <div className="app__orders-text">
                <Orderslist 
                  title="We Are Queensfield Ltd" 
                  description="We deal with the production of healthy and natural farm and dry sea food - Asa fish, 
                  Mangala fish, Stock fish, Prawn, Crayfish, etc. Queensfield food has been reviewed by professional 
                  agriculturists and has proven to be completent with its high quality produce, this includes; 
                  the size of the produce, unique taste, and freshness. We all know that natural foods are at their 
                  best when they are fresh."
                />
              </div>
          </div>
        </motion.div>  
 
        </div>
        </div>
        <Testimonials/>
      </div>
  )
}

export default About