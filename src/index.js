import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ButtonPrimary from './components/Buttons/Button_primary';


import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";

import {About, Contact, Referral} from './container';
import { Footer, Navbar } from './components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar/>
  <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route exact path='/About' element={<About/>} />
        <Route exact path='/Referral' element={<Referral/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route exact path='*' element={
        <div className="app__homereferrals app__flex" id='app__fish-bg'>
        <div className="app__homeref-content">
          <h1 className="home-ref-headteat">Opps <br/>There is nothing here</h1>
          <p className='home-ref-pteat'>it's possible the page you are looking for does not exist</p>
        </div>
        <ButtonPrimary href="/" order_btn="Go to Home page" />
      </div>} />
      </Routes>
      
    </BrowserRouter>
    <Footer/>
  </>
     
 
);

reportWebVitals();
