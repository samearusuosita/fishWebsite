// using framer motion for react hoc

import React from "react";
import { motion } from "framer-motion";



const MotionWrap = (Component) => function HOC(){
  return (
    <motion.div
    whileinview={{y: [100, 50, 0], opacity: [0, 0, 1]}}
    transition={{duration: 0.5}}>
      
      <Component/>
    </motion.div>
  )
}

export default MotionWrap
