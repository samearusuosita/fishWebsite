import React from 'react'

import './HeadingSection.scss';

const headingSection = ({Wtitle, wsub}) => {
  return (
      <div className='app__header-section '>
        <div className="hero-text">
          <h1 className='hero-2'>{Wtitle}</h1>
          <h5 className='hero-3'>{wsub}</h5>
        </div>
      </div>
  )
}

export default headingSection
