import React from 'react'
import './footer.css'
import logo from '/src/images/logo.svg'
import facebook from '/src/images/icon-facebook.svg'
import youtube from '/src/images/icon-youtube.svg'
import twitter from '/src/images/icon-twitter.svg'
import pinterest from '/src/images/icon-pinterest.svg'
import instagram from '/src/images/icon-instagram.svg'
import {motion} from 'framer-motion'


const ScaleVariant = {
    hover:{
    scale:1.2
    },
    buttonHover:{
    scale:1.1
    }
  }


function Footer() {
  return (
   <>
    <div className='footer'>
   
   <div>
   <img src={logo} className='bottom-logo' alt="logo" />

<div className="social-medias">
    <motion.img variants={ScaleVariant} whileHover='hover'src={facebook} alt="facebook logo" />
    <motion.img variants={ScaleVariant} whileHover='hover' src={youtube} alt="youtube logo" />
    <motion.img variants={ScaleVariant} whileHover='hover' src={twitter} alt="twitter logo" />
    <motion.img variants={ScaleVariant} whileHover='hover' src={pinterest} alt="pinterest logo" />
    <motion.img variants={ScaleVariant} whileHover='hover' src={instagram} alt="instagram logo" />
</div>

   </div>

<div className="others">

<div>

<motion.p variants={ScaleVariant} whileHover='hover'>About Us</motion.p>
    <motion.p variants={ScaleVariant} whileHover='hover'>Contact</motion.p>
    <motion.p variants={ScaleVariant} whileHover='hover'>Blog</motion.p>

</div>
   
 
 <div id='little-margin'>
 <motion.p variants={ScaleVariant} whileHover='hover'>Careers</motion.p>
    <motion.p variants={ScaleVariant} whileHover='hover'>Support</motion.p>
    <motion.p variants={ScaleVariant} whileHover='hover'>Privacy Policy</motion.p>
  
 </div>

</div>

<div>
<motion.button variants={ScaleVariant} whileHover='buttonHover'>Request Invite</motion.button>

<h4>@Easybank. All Rights Reserved</h4>
</div>

    </div>
   </>
  )
}

export default Footer
