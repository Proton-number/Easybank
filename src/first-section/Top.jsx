import React from 'react'
import {motion} from 'framer-motion'
import logo from '/src/images/logo.svg'
import hamburger from '/src/images/icon-hamburger.svg'
import Mobileintro from '/src/images/bg-intro-mobile.svg'
import Desktopintro from '/src/images/bg-intro-desktop.svg'
import mockUp from '/src/images/image-mockups.png'

function Top({setDisplay}) {


  

  return (
    <>
    <div className='top'>
     
     <div className="logo-menu">
      <img src={logo} className='logo' alt="logo of the bank" />

   
 
   <nav id='navigation'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
     </nav>
  
  
      

  <button id='top-btn'>Request Invite</button>
      <img src={hamburger} onClick={()=>setDisplay(true)} className='menu' alt="hamburger menu" />
     </div>

      <div className='Mockup'>
     
        <img src={mockUp}  alt=""  />
      </div>

      <div className="words">
        <h1>Next generation digital banking</h1>
    
       <p>Take your finances life online. Your Easybank account will be a one-step-shop for spending,saving,budgeting,investing and much more.</p>
  
        <button>Request Invite</button>
      </div>



     </div>
    </>
  )
}

export default Top
