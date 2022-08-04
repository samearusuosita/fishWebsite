import React from 'react'
import ButtonPrimary from './Button_primary';
import { Link } from 'react-router-dom';

const OrderBtn = () => {
  return (
    <>
      <div className='href-desktop'>
      <Link to="/contact"><ButtonPrimary order_btn="Contact Us"/></Link>
        </div>
        <div className='href-mobile'>
        <ButtonPrimary order_btn="Call to Order" href="tel:+2348103116234"/>
        </div>
    </>
  )
}

export default OrderBtn
