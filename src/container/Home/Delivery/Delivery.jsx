import React from 'react';
import { images } from '../../../constants';


import './Delivery.scss'


const Delivery = () => {
  return (
    <div className='app__delivery'>
      <>
       <h1 className='title-text'>We Deliver Nationwide <br/>& Across the World</h1>
       <h5 className="title-text-sub">No matter how small or big your order is, we will still deliver to your house or venue</h5>
       <div className="app__delivery-img">
        <img src={images.courier} alt="delivery" />
       </div>
      </>
    </div>
  )
}

export default Delivery
