import React from 'react'
import './footer.css'
import logo from '/src/images/logo.svg'
import facebook from '/src/images/icon-facebook.svg'
import youtube from '/src/images/icon-youtube.svg'
import twitter from '/src/images/icon-twitter.svg'
import pinterest from '/src/images/icon-pinterest.svg'
import instagram from '/src/images/icon-instagram.svg'

function Footer() {
  return (
   <>
    <div className='footer'>
   
   <div>
   <img src={logo} alt="logo" />

<div className="social-medias">
    <img src={facebook} alt="facebook logo" />
    <img src={youtube} alt="youtube logo" />
    <img src={twitter} alt="twitter logo" />
    <img src={pinterest} alt="pinterest logo" />
    <img src={instagram} alt="instagram logo" />
</div>

   </div>

<div className="others">

<div>

<p>About Us</p>
    <p>Contact</p>
    <p>Blog</p>

</div>
   
 
 <div id='little-margin'>
 <p>Careers</p>
    <p>Support</p>
    <p>Privacy Policy</p>
  
 </div>

</div>

<div>
<button>Request Invite</button>

<h4>@Easybank. All Rights Reserved</h4>
</div>

    </div>
   </>
  )
}

export default Footer
