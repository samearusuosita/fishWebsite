import React from 'react';
import { images } from '../../../constants';


import './Delivery.scss'


const Delivery = () => {
  return (
    <div className='app__delivery app__delivery-bg'>
      <div className='app__delivery-content'>
          <h1 className='title-text'>We Deliver Nationwide <br/>& Across the World</h1>
          <h5 className="title-text-sub">No matter how small or big your order is, we will still deliver to your destination</h5>
       </div>
       <div className="app__delivery-img">
          <img src={images.delivery} alt="delivery" />
        </div>
    </div>
  )
}

export default Delivery
