import React from 'react';

import '../Orders_list/Orders_list.scss';



const Orders_list = ({ title, description}) => (
  <div className='app__orders-content'>
        <div className="app__orders-content-info">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
  </div>
);

export default Orders_list;