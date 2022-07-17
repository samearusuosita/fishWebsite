import React from 'react'

const Button_primary = ({order_btn, href}) => {
  return (
    <div className='btn-primary'>
      <button type='button' className='button'><a href={href}>{order_btn}</a></button>
    </div>
  )
}

export default Button_primary
