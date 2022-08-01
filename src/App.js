import React from 'react';
import './App.scss';
import {Header, Orders, HomeReferrals, Testimonials, Dilivery} from '../src/container/Home';


const App = () => {
  return (
   <div className="app">
    <Header/>
    <Orders/>
    <Dilivery/>
    <Testimonials/>
    <HomeReferrals/>
    </div>
  )
};

export default App;