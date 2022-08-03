// using framer motion for react hoc

import React from "react";
import { motion } from "framer-motion";



const MotionWrap = (Component) => function HOC(){
  return (
    <motion.div
    whileinview={{y: [100, 50, 0], opacity: [0, 0, 1]}}
    transition={{duration: 0.5}}>
      
      <Component/>



      {/* <Navbar/>
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
    <Footer/> */}






    </motion.div>
  )
}

export default MotionWrap
