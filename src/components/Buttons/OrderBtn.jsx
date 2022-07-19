import React from 'react'
import ButtonPrimary from './Button_primary'

const OrderBtn = () => {
  return (
    <>
      <div className='href-desktop'>
        <ButtonPrimary order_btn="Order Now" href="/contact"/>
        </div>
        <div className='href-mobile'>
        <ButtonPrimary order_btn="Order Now" href="tel:+2348103116234"/>
        </div>
    </>
  )
}

export default OrderBtn
