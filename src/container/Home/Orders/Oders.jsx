import React from 'react';
// import Heading from '../../../components/Heading/Heading';
import Orderslist from '../../../components/Orders_list/Orders_list';
import {images} from '../../../constants';

import './Orders.scss'

const Oders = () => {
  return (
    <section className='app__orders-main app__bg-main '>
      <>
       <h1 className='title-text'>Order tasty & mouthwatering <br/>carefuly selected fish</h1>
       <h5 className="title-text-sub">For the best meal experience</h5>
      </>
      <div className='app__orders'>
      
        <div className="app__order-content">
          <img src={images.mangala} alt="" />
          <div className="app__orders-text">
             <Orderslist 
              title="Dry Asa Fish" 
              description="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
              order_btn="Order Now"/>

          </div>
        </div>
      </div>

      <div className='app__orders '>
        <div className="app__order-content reverse">
          <div className="app__orders-text">
              <Orderslist 
              title="Dry Crayfish" 
              description="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
              order_btn="Order Now"/>
          </div>
          <img src={images.crayfish} alt="" />
        </div>
      </div>

      <div className='app__orders'>
        <div className="app__order-content">
          <img src={images.mangala} alt="" />
          <div className="app__orders-text">
            <Orderslist 
              title="Dry CatFish" 
              description="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
              order_btn="Order Now"/>
          </div>
        </div>
      </div>
    </section>
      )
}

export default Oders



