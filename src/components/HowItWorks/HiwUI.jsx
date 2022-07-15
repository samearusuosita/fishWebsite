import React from 'react'




const HiwUI = (props) => {
  return (
    <div className="card1">
      <div className="img-col">
        <img src={props.imgurl} alt="test"/>
      </div>
      <div className="card-content">
        <h3 className='card-h'>{props.title}</h3>
        <p className='card-p'>{props.description}</p>
      </div>
    </div>
  )
}

export default HiwUI
