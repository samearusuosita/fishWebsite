import React from 'react'

import './HeadingSection.scss';

const headingSection = ({Wtitle, wsub}) => {
  return (
      <div className='app__header-section '>
        <div className="hero-text">
          <h1 className='here-2'>{Wtitle}</h1>
          <h5 className='here-3'>{wsub}</h5>
          {/* <h5 className='here-3'>The goldmine of healthy living</h5> */}
        </div>
      </div>
  )
}

export default headingSection
