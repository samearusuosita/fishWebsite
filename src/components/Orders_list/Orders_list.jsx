import React from 'react';

const Orders_list = ({ title, description}) => (
  <div className='app__orders-content'>
        <div className="app__orders-content-info">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
  </div>
);

export default Orders_list;