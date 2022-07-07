import React from 'react';

import '../Orders_list/Orders_list.scss';



const Orders_list = ({ title, description, order_btn}) => (
  <div className='app__orders-content'>
        <div className="app__orders-content-info">
            <h1>{title}</h1>
            <p>{description}</p>
            <button type='button' className='button'><a href="tel:07065434953">{order_btn}</a></button>
        </div>
  </div>
);

export default Orders_list;