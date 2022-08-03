import React from 'react';
import './App.scss';
// import {Header, Orders, HomeReferrals, Testimonials, Dilivery} from '../src/container/Home';
import ButtonPrimary from './components/Buttons/Button_primary';



import {Route, Routes} from 'react-router-dom'

import {About, Contact, Referral} from './container';
import Home from "./container/Home/Home"
import { Footer, Navbar } from './components';


const App = () => {

  function PageNotFound () {
    return (
      <div className="app__homereferrals app__flex" id='app__fish-bg'>
              <div className="app__homeref-content">
                <h1 className="home-ref-headteat">Opps <br/>There is nothing here</h1>
                <p className='home-ref-pteat'>it's possible the page you are looking for does not exist</p>
              </div>
                <ButtonPrimary href="/" order_btn="Go to Home page" />
            </div>
    )
  }
  return (
   <div className="app">
    <Navbar/>
    <Routes>
      <Route >
          <Route exact index path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Referral" element={<Referral />} />
          <Route exact path="/contact" element={<Contact />} />
          
          <Route exact path='*' element={<PageNotFound/>} />
          
      </Route>
      
    </Routes>
    <Footer/>
  </div>
  )
};

export default App;