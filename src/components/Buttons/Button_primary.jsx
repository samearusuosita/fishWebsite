import React from 'react';


const Button_primary = ({order_btn, href}) => {
  return (
    <div className='btn-primary'>
      <button type='button' className='button'>
        <a className="App-link" href={href} rel="noopener noreferrer">{order_btn}</a>
        </button>
    </div>
  )
}

export default Button_primary
