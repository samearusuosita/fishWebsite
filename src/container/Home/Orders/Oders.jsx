import React from 'react';
// import Heading from '../../../components/Heading/Heading';
import Orderslist from '../../../components/Orders_list/Orders_list';
import {images} from '../../../constants';
import OrderBtn from '../../../components/Buttons/OrderBtn';

import './Orders.scss'

const Oders = () => {

  return (
    <section className='app__orders-main app__bg-main '>
      <>
       <h1 className='title-text'>Order tasty & mouthwatering <br/>carefully selected fish</h1>
       <h5 className="title-text-sub">For the best meal experience</h5>
      </>
      <div className='app__orders'>
      
        <div className="app__order-content">
          <div className="orders-img-cont">
            <img src={images.mangala} alt="" />
          </div>
          
          <div className="app__orders-text">
             <Orderslist 
              title="Dry Asa Fish" 
              description="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
              />
              <OrderBtn/>
          </div>
        </div>
      </div>

      <div className='app__orders'>
        <div className="app__order-content reverse">
          <div className="orders-img-cont">
            <img src={images.catfish} alt="" />
          </div>
          
          <div className="app__orders-text">
            <Orderslist 
              title="Dry CatFish" 
              description="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
              />
              <OrderBtn/>
          </div>
        </div>
      </div>


      <div className='app__orders'>
        <div className="app__order-content">
        <div className="orders-img-cont">
          <img src={images.crayfish} alt="" />
        </div>
          
          <div className="app__orders-text">
            <Orderslist 
              title="Dry Crayfish" 
              description="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
              />
              <OrderBtn/>
          </div>
        </div>
      </div>


    </section>
      )
}

export default Oders



