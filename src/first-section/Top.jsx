import React from 'react'
import {motion} from 'framer-motion'
import logo from '/src/images/logo.svg'
import hamburger from '/src/images/icon-hamburger.svg'
import Mobileintro from '/src/images/bg-intro-mobile.svg'
import Desktopintro from '/src/images/bg-intro-desktop.svg'
import mockUp from '/src/images/image-mockups.png'


const ScaleVariant = {
  hover:{
  scale:1.1
  },
  scale:{
    scale:1.3
  }
}


function Top({setDisplay}) {


  

  return (
    <>
    <div className='top'>
     
     <div className="logo-menu">
      <img src={logo} className='logo' alt="logo of the bank" />

   
 
   <nav id='navigation'>
      <ul>
        <motion.li
         variants={ScaleVariant}
  whileHover='hover'
        >Home</motion.li>

        <motion.li
        variants={ScaleVariant}
        whileHover='hover'
        >About</motion.li>

        <motion.li
        variants={ScaleVariant}
        whileHover='hover'
        >Contact</motion.li>

        <motion.li
       variants={ScaleVariant}
       whileHover='hover'
        >Blog</motion.li>

        <motion.li
variants={ScaleVariant}
  whileHover='hover'
        >Careers</motion.li>
      </ul>
     </nav>
  
  
      

  <motion.button
  variants={ScaleVariant}
  whileHover='hover'
   id='top-btn'>Request Invite</motion.button>
      <motion.img variants={ScaleVariant} whileHover='scale' src={hamburger} onClick={()=>setDisplay(true)} className='menu' alt="hamburger menu" />
     </div>

      <div className='Mockup'>
     
        <img  src={mockUp}  alt=""  />
      </div>

      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      className="words">
        <h1>Next generation digital banking</h1>
    
       <p>Take your finances life online. Your Easybank account will be a one-step-shop for spending,saving,budgeting,investing and much more.</p>
  
        <button>Request Invite</button>
      </motion.div>



     </div>
    </>
  )
}

export default Top
