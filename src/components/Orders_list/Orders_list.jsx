import React from 'react';

const Orders_list = ({ title, description}) => (
  <div className='app__orders-content'>
        <div className="app__orders-content-info">
            <h1 className="order-headtext">{title}</h1>
            <p className='order-head-p'>{description}</p>
        </div>
  </div>
);

export default Orders_list;