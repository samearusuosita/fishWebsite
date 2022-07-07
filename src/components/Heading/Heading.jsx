import React from 'react';

import '../Heading/Heading.scss';



const Heading = ({title, subtitle}) => (
  <div className='app__heading'>
    <h1 className="heading-text">{title}</h1>
    <p className="p__subtitle">{subtitle}</p>
  </div>
);

export default Heading;