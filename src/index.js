import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {About, Contact, Referral} from './container';
import { Footer, Navbar } from './components';


import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  
  <React.StrictMode>
    <Navbar />
      <HashRouter>
      
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
    
      </HashRouter>
      <Footer />
  </React.StrictMode>
);

reportWebVitals();
