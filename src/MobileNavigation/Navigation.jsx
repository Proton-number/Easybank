import React from 'react'
import './Navigation.css'
import close from '/src/images/icon-close.svg'
import { motion } from 'framer-motion'


const navVariants ={
  animate:{
    x:-20
  },
  scale:{
    scale:1.3
  }
}


function Navigation({setDisplay}) {
  return (
   <>
    <motion.div
    initial={{x:'250vw'}}
    animate={{x:0}}
    transition={{duration:1}}
     className='nav'>
    <div className="main">
      <h1>Menu</h1>
    <motion.img variants={navVariants} whileHover='scale' id='close' src={close} onClick={()=> setDisplay(false)} alt="" />
    </div>
   
        <div className="navigation">
        <motion.p variants={navVariants} whileHover='animate'>Home</motion.p>
        <motion.p variants={navVariants} whileHover='animate' >About</motion.p>
        <motion.p variants={navVariants} whileHover='animate'>Contact</motion.p>
        <motion.p variants={navVariants} whileHover='animate'>Blog</motion.p>
        <motion.p variants={navVariants} whileHover='animate' >Careers</motion.p>
        </div>
      

    
 
    </motion.div>
   </>
  )
}

export default Navigation
