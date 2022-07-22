import React from 'react';

import Orderslist from '../../../components/Orders_list/Orders_list';
import {images} from '../../../constants';
import OrderBtn from '../../../components/Buttons/OrderBtn';

import { motion } from 'framer-motion';

import './Orders.scss'

const Oders = () => {

  return (
    <section className='app__orders-main app__bg-main '>
      <>
       <h1 className='title-text'>Order tasty & mouthwatering <br/>carefully selected fish</h1>
       <h5 className="title-text-sub">For the best meal experience</h5>
      </>

      <motion.div
        whileinview={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: "tween"}}
        className="app__animate-item"
        key="test"
        >
          <div className='app__orders'>     
        <div className="app__order-content">
          <div className="orders-img-cont">
            <img src={images.mangalafish} alt="" />
          </div>
          
          <div className="app__orders-text">
             <Orderslist 
              title="Dry Asa Fish" 
              description="No doubt, Asa-Mangala fish is one of the most popular delicacies in many Nigerian homes.
               According to experts, Asa (Mangala) stands out for its lasting taste, and highly preserved nutritional values.
               Asa tends to have more flesh, and when a little piece of the dried fish is cut and chewed it fills the mouth. Try it in your meal today." 
              />
              <OrderBtn/>
          </div>
        </div>
      </div>
        </motion.div>

        <motion.div
        whileinview={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: "tween"}}
        className="app__animate-item"
        key="test"
        >

        <div className='app__orders'>
        <div className="app__order-content reverse">
          <div className="orders-img-cont">
            <img src={images.catfish} alt="" />
          </div>
          
          <div className="app__orders-text">
            <Orderslist 
              title="Dry CatFish" 
              description="Are you thinking of low calories and lean protein sea food? Think no more... 
              our catfish has heart-healthy omega-3 fats and vitamin B12. It is fresh and naturally-smoked under 
              highly hygienic conditions, and its from the lake Chad Basin and Cameron. " 
              />
              <OrderBtn/>
          </div>
        </div>
      </div>
      </motion.div>


      <motion.div
        whileinview={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: "tween"}}
        className="app__animate-item"
        key="test"
        >

        <div className='app__orders'>
        <div className="app__order-content">
        <div className="orders-img-cont">
          <img src={images.crayfish} alt="" />
        </div>
          
          <div className="app__orders-text">
            <Orderslist 
              title="Dry Crayfish" 
              description="Imagine the taste of dried edible crustaceans in your meal... 
              Seafood is a high protein food that is low in calories, high in vitamins and minerals, 
              with numerous health benefits. Recent studies have shown that eating seafood can decrease the risk of heart attack, 
              stroke, obesity, and hypertension. Whether you are preparing soup or stew, try our Dry Crayfish today." 
              />
              <OrderBtn/>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
      )
}

export default Oders



