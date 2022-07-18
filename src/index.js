import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {About, Contact, Referral} from './container';
import { Footer, Navbar } from './components';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  
  <React.StrictMode>
    <Navbar />
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="About" element={<About/>}/>
          <Route path="Referral" element={<Referral/>}/>
          <Route path="Contact" element={<Contact />}/>
          <Route path="*" element={
            <main className="app__bg-main">
              
              <h1>404</h1>
              <p>There's nothing here!</p>
                <button type='button' className='button'><a href="/">Go Back to Home</a></button>
            </main>
          }
          />
        </Routes>
    
      </BrowserRouter>
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
