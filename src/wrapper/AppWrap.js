// implementing higher order components

import React from 'react'

import {NavigationDots} from '../components'

const AppWrap = (idName) => function HOC(){
  return (
     <NavigationDots active={idName}/>
  )
}

export default AppWrap;
